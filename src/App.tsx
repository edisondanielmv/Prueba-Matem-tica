import React, { useState } from 'react';
import { questions as allQuestions } from './data/questions';
import { AppState, StudentSubmission, Question } from './types';
import { QuestionCard } from './components/QuestionCard';
import { Button } from './components/Button';
import { UploadSection } from './components/UploadSection';
import { submitAssessment } from './services/submissionService';

// Algoritmo Fisher-Yates para una mezcla perfectamente aleatoria
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.INTRO);
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  
  // Quiz State
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [files, setFiles] = useState<File[]>([]);
  
  // Validation
  const [errors, setErrors] = useState<string[]>([]);

  const handleStartQuiz = () => {
    if (!studentName.trim() || !studentId.trim()) {
      setErrors(['Por favor ingrese su nombre y su número de cédula para comenzar.']);
      return;
    }
    
    // --- LÓGICA ANTI-REPETICIÓN ---
    const STORAGE_KEY = 'math_quiz_seen_ids_v1';
    let seenIds: number[] = [];
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        seenIds = JSON.parse(stored);
      }
    } catch (e) {
      console.error("Error leyendo historial:", e);
    }

    // 1. Separar preguntas disponibles (no vistas) y ya vistas
    const unseenQuestions = allQuestions.filter(q => !seenIds.includes(q.id));
    const seenQuestions = allQuestions.filter(q => seenIds.includes(q.id));
    
    const QUIZ_SIZE = 7;
    let selectedQuestions: Question[] = [];

    // 2. Mezclar ambos grupos aleatoriamente
    const shuffledUnseen = shuffleArray(unseenQuestions);
    const shuffledSeen = shuffleArray(seenQuestions);

    // 3. Selección prioritaria
    if (shuffledUnseen.length >= QUIZ_SIZE) {
      // Si hay suficientes preguntas nuevas, usamos solo esas
      selectedQuestions = shuffledUnseen.slice(0, QUIZ_SIZE);
    } else {
      // Si no alcanzan, usamos todas las nuevas y completamos con las antiguas
      selectedQuestions = [
        ...shuffledUnseen,
        ...shuffledSeen.slice(0, QUIZ_SIZE - shuffledUnseen.length)
      ];
    }

    // 4. Actualizar el historial de preguntas vistas
    const newSeenIds = [...seenIds, ...selectedQuestions.map(q => q.id)];
    // Eliminar duplicados en el historial
    let uniqueSeenIds = Array.from(new Set(newSeenIds));

    // Si ya hemos visto TODO el banco de preguntas, reiniciamos el ciclo
    // para que la próxima vez haya "nuevas" disponibles (rotación completa)
    if (uniqueSeenIds.length >= allQuestions.length) {
      // Guardamos solo las de ESTE examen como vistas, liberando el resto
      uniqueSeenIds = selectedQuestions.map(q => q.id);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(uniqueSeenIds));

    // 5. Mezcla final para que las preguntas nuevas no aparezcan siempre primero
    setQuizQuestions(shuffleArray(selectedQuestions));

    setErrors([]);
    setAppState(AppState.QUIZ);
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setStudentName('');
    setStudentId('');
    setAnswers({});
    setFiles([]);
    setQuizQuestions([]);
    setErrors([]);
    setAppState(AppState.INTRO);
    window.scrollTo(0, 0);
  };

  const handleAnswerSelect = (questionId: number, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleQuizComplete = () => {
    // Check if all displayed questions are answered
    const unanswered = quizQuestions.filter(q => !answers[q.id]);
    
    if (unanswered.length > 0) {
      // Allow proceeding but warn the user
      const confirmProceed = confirm(
        `Tiene ${unanswered.length} preguntas sin responder. Estas se calificarán con 0 puntos.\n\n¿Desea finalizar la evaluación de todas formas?`
      );
      if (!confirmProceed) {
        return;
      }
    }
    
    setAppState(AppState.UPLOAD);
    window.scrollTo(0, 0);
  };

  const calculateScoreValue = () => {
    let correct = 0;
    quizQuestions.forEach(q => {
      // If answer is undefined, it doesn't match correctAnswer, so points are 0.
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    // Calculate score out of 20
    // formula: (correct / total) * 20
    const score20 = (correct / quizQuestions.length) * 20;
    return score20;
  };

  const handleFinalSubmit = async () => {
    if (files.length === 0) {
      if (!confirm("No ha subido ninguna imagen de evidencia. ¿Está seguro que desea enviar sin sustento? Esto afectará su calificación.")) {
        return;
      }
    }

    setAppState(AppState.SUBMITTING);

    const submission: StudentSubmission = {
      studentName,
      studentId,
      answers,
      files,
      timestamp: Date.now()
    };
    
    const finalScore = calculateScoreValue();
    const pointsPerQuestion = 20 / quizQuestions.length;

    // Generar reporte detallado para el Excel
    // Formato: "P[ID]: Eligió 'a' (Correcta: 'b') | 0/2.85 pts"
    const detailedReport = quizQuestions.map(q => {
      const selected = answers[q.id] || '(Sin respuesta)'; // Handle unanswered
      const isCorrect = selected === q.correctAnswer;
      const pointsEarned = isCorrect ? pointsPerQuestion : 0;
      
      return `${q.label}: Eligió '${selected}' (Correcta: '${q.correctAnswer}') -> ${pointsEarned.toFixed(2)}/${pointsPerQuestion.toFixed(2)} pts`;
    }).join('\n'); // Usamos salto de línea para que se vea ordenado en la celda de Excel

    try {
      await submitAssessment(submission, finalScore, detailedReport);
      setAppState(AppState.SUCCESS);
    } catch (error) {
      console.error(error);
      setAppState(AppState.ERROR);
    }
  };

  const calculateScoreResult = () => {
    let correct = 0;
    quizQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    const score20 = (correct / quizQuestions.length) * 20;
    return {
      correctCount: correct,
      totalCount: quizQuestions.length,
      finalScore: score20
    };
  };

  const renderIntro = () => (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 36v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Evaluación de Matemáticas</h1>
        <p className="text-slate-500">Curso General • Prof. Matemáticas</p>
      </div>

      <div className="space-y-6 mb-8">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-3">Instrucciones:</h3>
          <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
            <li>El sistema seleccionará aleatoriamente <strong>7 ejercicios</strong> del banco de preguntas.</li>
            <li>La nota máxima es de <strong>20 puntos</strong>.</li>
            <li>Debe seleccionar la respuesta correcta para cada pregunta.</li>
            <li>Puede dejar preguntas en blanco (valen 0 puntos).</li>
            <li>Al finalizar, <strong>debe subir fotos</strong> de sus hojas de resolución como evidencia. Puede subir múltiples imágenes.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
              placeholder="Ej: Juan Pérez"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Número de Cédula</label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
              placeholder="Ej: 1712345678"
            />
          </div>
        </div>
        
        {errors.length > 0 && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-200">
            {errors.map((e, i) => <p key={i}>{e}</p>)}
          </div>
        )}
      </div>

      <Button onClick={handleStartQuiz} fullWidth>
        Comenzar Evaluación
      </Button>
    </div>
  );

  const renderQuiz = () => (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-100 sticky top-4 z-10">
        <div>
          <h2 className="text-sm font-semibold text-slate-800">{studentName}</h2>
          <p className="text-xs text-slate-500">Progreso: {Object.keys(answers).length} / {quizQuestions.length}</p>
        </div>
        <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-500 transition-all duration-500" 
            style={{ width: `${(Object.keys(answers).length / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-8">
        {quizQuestions.map((q, index) => (
          <div key={q.id}>
             <div className="mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Pregunta {index + 1} de {quizQuestions.length}</div>
            <QuestionCard
              question={q}
              selectedOptionId={answers[q.id]}
              onSelect={(optId) => handleAnswerSelect(q.id, optId)}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-6 pb-12">
        <Button onClick={handleQuizComplete} size="lg">
          Siguiente: Cargar Evidencias &rarr;
        </Button>
      </div>
    </div>
  );

  const renderUpload = () => (
    <div className="max-w-2xl mx-auto space-y-8">
      <Button variant="outline" onClick={() => setAppState(AppState.QUIZ)}>
        &larr; Volver a las preguntas
      </Button>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Paso Final: Sustento</h2>
        <UploadSection files={files} onFilesChange={setFiles} />
        
        <div className="mt-8 border-t pt-6">
          <Button onClick={handleFinalSubmit} fullWidth>
            Enviar Evaluación
          </Button>
          <p className="text-center text-xs text-slate-400 mt-4">
            Al enviar, confirma que este trabajo es propio y respeta las normas de integridad académica.
          </p>
        </div>
      </div>
    </div>
  );

  const renderSubmitting = () => (
    <div className="max-w-md mx-auto text-center pt-20">
      <div className="w-20 h-20 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto mb-8"></div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Enviando respuestas...</h2>
      <p className="text-slate-500">Subiendo imágenes a Google Drive y guardando notas.</p>
    </div>
  );

  const renderSuccess = () => {
    const results = calculateScoreResult();
    return (
      <div className="max-w-xl mx-auto bg-white p-12 rounded-2xl shadow-xl border border-green-100 text-center mt-10">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">¡Evaluación Enviada!</h2>
        <p className="text-slate-600 mb-8">
          Sus respuestas y archivos de evidencia han sido registrados correctamente en el sistema.
          <br />
          <span className="text-2xl font-bold text-brand-600 mt-4 block">
            Nota: {results.finalScore.toFixed(2)} / 20
          </span>
          <span className="text-sm text-slate-400 block mt-1">
            ({results.correctCount} correctas de {results.totalCount})
          </span>
        </p>
        
        <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-500 mb-8 text-center">
          <p>Puede cerrar esta ventana de manera segura.</p>
        </div>

        <Button onClick={handleReset} variant="outline">
          Nueva Evaluación
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      {appState === AppState.INTRO && renderIntro()}
      {appState === AppState.QUIZ && renderQuiz()}
      {appState === AppState.UPLOAD && renderUpload()}
      {appState === AppState.SUBMITTING && renderSubmitting()}
      {appState === AppState.SUCCESS && renderSuccess()}
      {appState === AppState.ERROR && (
        <div className="text-center pt-20">
          <h2 className="text-2xl font-bold text-red-600">Error en el envío</h2>
          <Button onClick={() => setAppState(AppState.UPLOAD)} className="mt-4">Intentar de nuevo</Button>
        </div>
      )}
    </div>
  );
};

export default App;
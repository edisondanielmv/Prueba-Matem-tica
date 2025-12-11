export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  category: string;
  label?: string;
  text: string;
  subText?: string; // For things like "Donde t es el tiempo..."
  equation?: string; // LaTeX-like or text representation of the equation
  options: Option[];
  correctAnswer: string;
}

export interface StudentSubmission {
  studentName: string;
  studentId: string;
  answers: Record<number, string>; // QuestionID -> OptionID
  files: File[];
  timestamp: number;
}

export enum AppState {
  INTRO = 'INTRO',
  QUIZ = 'QUIZ',
  UPLOAD = 'UPLOAD',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
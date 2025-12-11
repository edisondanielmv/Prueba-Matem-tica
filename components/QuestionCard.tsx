import React, { useEffect, useState } from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, selectedOptionId, onSelect }) => {
  const [htmlEquation, setHtmlEquation] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Reset state when question changes
    setHtmlEquation('');
    setError(false);

    if (!question.equation) return;

    const render = () => {
      const katex = (window as any).katex;
      if (!katex) return false;

      try {
        // Use renderToString for better React integration
        const html = katex.renderToString(question.equation, {
          throwOnError: false,
          displayMode: true,
          fleqn: false
        });
        setHtmlEquation(html);
        return true;
      } catch (e) {
        console.error("KaTeX rendering error:", e);
        setError(true);
        return true; // Stop retrying
      }
    };

    // Attempt render immediately
    if (render()) return;

    // Retry if KaTeX is not yet loaded (fallback)
    const interval = setInterval(() => {
      if (render()) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [question.equation]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
        <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
          {question.category}
        </span>
        <span className="text-xs font-mono text-slate-400">
          ID: {question.label}
        </span>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <h3 className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed">
            {question.text}
          </h3>
          {question.subText && (
            <p className="text-slate-600 mt-2 italic text-sm md:text-base border-l-4 border-slate-200 pl-3">
              {question.subText}
            </p>
          )}
        </div>
        
        {question.equation && (
          <div className="bg-brand-50/30 border border-brand-100 rounded-lg p-6 mb-8 flex justify-center items-center min-h-[100px]">
            {error ? (
              <div className="text-red-500 text-sm font-mono bg-red-50 p-2 rounded">
                Error visualizando la fórmula: {question.equation}
              </div>
            ) : htmlEquation ? (
              <div 
                className="text-slate-800 w-full overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: htmlEquation }} 
              />
            ) : (
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
              </div>
            )}
          </div>
        )}

        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            return (
              <button
                key={option.id}
                onClick={() => onSelect(option.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 relative group
                  ${isSelected 
                    ? 'border-brand-500 bg-brand-50 text-brand-900' 
                    : 'border-slate-200 hover:border-brand-200 hover:bg-slate-50 text-slate-600'
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors text-sm font-bold
                    ${isSelected ? 'border-brand-500 bg-brand-500 text-white' : 'border-slate-300 text-slate-400 group-hover:border-brand-400 group-hover:text-brand-400'}`}>
                    {option.id.toUpperCase()}
                  </div>
                  <span className={`py-1 ${isSelected ? 'font-medium' : 'font-normal'}`}>
                    {option.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, selectedOptionId, onSelect }) => {
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
        <h3 className="text-lg md:text-xl text-slate-800 font-medium mb-4 leading-relaxed whitespace-pre-wrap">
          {question.text}
        </h3>
        
        {question.equation && (
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8 overflow-x-auto">
             {/* 
                whitespace-pre is essential for ASCII art (fractions, matrices) to line up correctly.
                min-w-max ensures the content doesn't wrap inside the scrolling container.
             */}
            <div className="font-mono text-base md:text-lg text-slate-800 whitespace-pre min-w-max leading-relaxed">
              {question.equation}
            </div>
          </div>
        )}

        {question.subText && (
          <p className="text-slate-600 mb-6 italic">{question.subText}</p>
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
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                    ${isSelected ? 'border-brand-500 bg-brand-500 text-white' : 'border-slate-300 group-hover:border-brand-400'}`}>
                    {isSelected && (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`${isSelected ? 'font-medium' : 'font-normal'}`}>
                    <span className="font-bold mr-2">{option.id})</span>
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
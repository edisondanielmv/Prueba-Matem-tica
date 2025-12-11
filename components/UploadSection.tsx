import React, { useCallback, useState } from 'react';

interface UploadSectionProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
}

export const UploadSection: React.FC<UploadSectionProps> = ({ files, onFilesChange }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files) as File[];
      // Simple validation: images only
      const validFiles = newFiles.filter(file => file.type.startsWith('image/'));
      if (validFiles.length < newFiles.length) {
        alert("Solo se permiten archivos de imagen.");
      }
      onFilesChange([...files, ...validFiles]);
    }
  }, [files, onFilesChange]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      onFilesChange([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    onFilesChange(newFiles);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 animate-fade-in">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">Cargar Evidencias</h3>
      <p className="text-slate-500 mb-6 text-sm">
        Por favor, suba fotos claras de las hojas donde resolvió los ejercicios. Estas imágenes son necesarias para validar su evaluación.
      </p>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-3 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer relative
          ${isDragging ? 'border-brand-500 bg-brand-50' : 'border-slate-300 hover:border-brand-400 hover:bg-slate-50'}`}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="flex flex-col items-center gap-3 pointer-events-none">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-slate-700 font-medium">
            Arrastre imágenes aquí o haga clic para seleccionar
          </p>
          <p className="text-xs text-slate-400">JPG, PNG (Max 10MB)</p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 space-y-2">
          <p className="text-sm font-semibold text-slate-700">Archivos seleccionados ({files.length}):</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200 text-sm">
                <span className="truncate max-w-[80%] text-slate-600">{file.name}</span>
                <button 
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 p-1"
                  title="Eliminar"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
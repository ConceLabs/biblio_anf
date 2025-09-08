import React from 'react';
import { CREDITS_IMAGE_URL } from '../assets';

interface AdminViewProps {
  isLoggedIn: boolean;
  onLogin: (password: string) => boolean;
  documents: Document[];
  onAddDocument: (doc: Omit<Document, 'id'>) => void;
  onUpdateDocument: (doc: Document) => void;
  onDeleteDocument: (id: string) => void;
  onReorderDocument: (id: string, direction: 'up' | 'down') => void;
}

const AdminView: React.FC<AdminViewProps> = () => {
  const handleUpdate = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const registration of registrations) {
          registration.unregister();
        }
        window.location.reload();
      }).catch(error => {
        console.error('Error al anular el registro del Service Worker:', error);
        alert('Error al intentar actualizar. Por favor, intenta de nuevo.');
      });
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="flex justify-center items-start pt-16 flex-grow">
      <div className="w-full max-w-sm">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full flex flex-col items-center mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Actualizar Contenido</h2>
          <p className="text-slate-600 text-center mb-4">Si se han realizado cambios recientes en las leyes o el contenido, presiona este botón para asegurar que tienes la última versión.</p>
          <button onClick={handleUpdate} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
            <i className="fa-solid fa-sync-alt mr-2"></i>
            Forzar Actualización
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-center text-slate-600 mt-8">
          <p className="text-lg italic mb-4">Creado en 2025 por:</p>
          <img
            src={CREDITS_IMAGE_URL}
            alt="Logo de Créditos"
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
          />
          <a href="https://www.concelabs.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 mt-2">
            www.concelabs.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, image, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={onClose}>
      <div className="relative max-w-4xl w-full bg-white rounded-lg shadow-xl" onClick={e => e.stopPropagation()}>
        <button 
          className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <div className="relative aspect-video">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-t-lg" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 
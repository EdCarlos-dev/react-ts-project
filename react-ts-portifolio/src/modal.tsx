import React from 'react';

type ModalProps = {
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Content</h2>
        <p>This is a simple modal content.</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;

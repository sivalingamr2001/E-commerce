import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {children}
      </div>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 100%;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer
          width: 100vw;
          height: 100vh;
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          max-width: 1200px;
          width: 100%;
          overflow-y: scroll;
        }

        .close-btn {
          background: transparent;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Modal;

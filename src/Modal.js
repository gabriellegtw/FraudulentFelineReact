import React from 'react';
import './Modal.css';

function Modal({ message, onClose }) {
    return (
        <div className="modal-background">
            <div className="modal-content">
                <pre>{message}</pre>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
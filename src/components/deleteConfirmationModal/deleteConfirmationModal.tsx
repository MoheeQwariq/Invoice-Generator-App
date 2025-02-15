import React from 'react';
import './deleteConfirmationModal.css';
import { DeleteConfirmationModalProps } from '../../types';

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirm-delete-modal">
      <div className="confirm-delete-card">
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this invoice?</p>
        <div className="confirm-delete-actions">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;

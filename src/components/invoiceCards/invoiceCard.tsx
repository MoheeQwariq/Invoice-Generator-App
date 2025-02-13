import React from 'react';
import './invoiceCard.css';
import { InvoiceCardProps } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import profile1 from '../../assets/profileImages/profile (1).png';
import profile2 from '../../assets/profileImages/profile (2).png';
import profile3 from '../../assets/profileImages/profile (3).png';
import profile4 from '../../assets/profileImages/profile (4).png';
import profile5 from '../../assets/profileImages/profile (5).png';

const profileImages = [
    profile1,
    profile2,
    profile3,
    profile4,
    profile5,
];
const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    return profileImages[randomIndex];
};

const InvoiceCard: React.FC<InvoiceCardProps> = ({ clientName, clientEmail, invoiceNumber, date, totalAmount, status, onDelete, onEdit }) => {
    const profileImage = getRandomImage();
    return (
        <div className="invoice-card">
            <div className="invoice-item client-info">
                <img src={profileImage} className="circular-image" alt="Profile Image" />
                <div className="client-details">
                    <div className="client-name">{clientName}</div>
                    <div className="client-email">{clientEmail}</div>
                </div>
            </div>
            <div className="invoice-item">{invoiceNumber}</div>
            <div className="invoice-item">{date}</div>
            <div className="invoice-item">{totalAmount}</div>
            <div className={`invoice-item ${status}`}>{status}</div>
            <div className="invoice-item action-icons">
                <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={onEdit} />
                <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={onDelete} />
            </div>
        </div>
    );
};

export default InvoiceCard;
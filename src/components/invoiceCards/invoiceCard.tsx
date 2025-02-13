
import './invoiceCard.css';
import { InvoiceCardProps } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import useRandomImage from '../../hook/useRandomImage';


const InvoiceCard: React.FC<InvoiceCardProps> = ({ clientName, clientEmail, invoiceNumber, date, totalAmount, status, onDelete, onEdit }) => {
    const profileImage = useRandomImage(invoiceNumber);

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
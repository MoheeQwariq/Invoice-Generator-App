import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InvoiceCardProps } from '../../types/types';
import InvoiceCard from '../../components/invoiceCards/invoiceCard';
import './invoiceList.css';
import { FaFileInvoice, FaFilter, FaSearch } from 'react-icons/fa';

const sampleInvoices: InvoiceCardProps[] = [
  {
    clientName: 'Alaa Mousa',
    clientEmail: 'alaamousa@example.com',
    invoiceNumber: 'INV-001',
    date: '2025-02-01',
    totalAmount: 1500,
    status: 'UnPaid',
    onDelete: () => {},
    onEdit: () => {},
  },
  {
    clientName: 'Yazeed Sleat',
    clientEmail: 'yazeedSleat@example.com',
    invoiceNumber: 'INV-002',
    date: '2025-02-05',
    totalAmount: 2500,
    status: 'Paid',
    onDelete: () => {},
    onEdit: () => {},
  },
  {
    clientName: 'Mohammad Khalili',
    clientEmail: 'mohammad@example.com',
    invoiceNumber: 'INV-003',
    date: '2025-02-08',
    totalAmount: 3000,
    status: 'Paid',
    onDelete: () => {},
    onEdit: () => {},
  },
];

const CardList: React.FC = () => {
  const [invoiceList, setInvoiceList] = useState(sampleInvoices);
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [invoiceToDelete, setInvoiceToDelete] = useState<InvoiceCardProps | null>(null);
  const navigate = useNavigate();
  const handleEdit = (invoice: InvoiceCardProps) => {
    navigate('./create-invoice', { state: { invoice } });
  };
  const applyFilter = () => {
    let filteredInvoices = sampleInvoices;
    if (filterType && filterValue) {
      filteredInvoices = sampleInvoices.filter((invoice) => {
        if (filterType === 'Client Name') return invoice.clientName.toLowerCase().includes(filterValue.toLowerCase());
        if (filterType === 'Status') return invoice.status.toLowerCase().includes(filterValue.toLowerCase());
        if (filterType === 'Invoice Number') return invoice.invoiceNumber.toLowerCase().includes(filterValue.toLowerCase());
        if (filterType === 'Date') return invoice.date === filterValue;
        return false;
      });
    }
    setInvoiceList(filteredInvoices);
    setShowFilter(false);
  };

  const handleDelete = (invoice: InvoiceCardProps) => {
    setInvoiceToDelete(invoice);
    setShowConfirmDelete(true);
  };

  const confirmDelete = () => {
    if (invoiceToDelete) {
      setInvoiceList(invoiceList.filter(i => i.invoiceNumber !== invoiceToDelete.invoiceNumber));
      setShowConfirmDelete(false);
      setInvoiceToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirmDelete(false);
    setInvoiceToDelete(null);
  };

  return (
    <div className='AllInvoices'>
      <div className='containerr'>
        <div className='search-bar'>
          <FaSearch className='icon' />
          <input
            type='text'
            placeholder='Search invoices'
            onChange={(e) => {
              const value = e.target.value.toLowerCase();
              setInvoiceList(sampleInvoices.filter(invoice =>
                invoice.clientName.toLowerCase().includes(value) ||
                invoice.invoiceNumber.toLowerCase().includes(value) ||
                invoice.status.toLowerCase().includes(value)
              ));
            }}
          />
        </div>
        <div className='buttons'>
          <button className='create-invoice'>
            <FaFileInvoice className='icon' /> Create Invoice
          </button>
          <button className='filter' onClick={() => setShowFilter(!showFilter)}>
            <FaFilter className='icon' /> Filters
          </button>
        </div>
      </div>

      {showFilter && (
        <div className='filter-modal'>
          <div className='filter-card'>
            <h3>Apply Filters</h3>
            <div className='filter-options'>
              <label>Filter By:</label>
              <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                <option value=''>Select Filter Type</option>
                <option value='Client Name'>Client Name</option>
                <option value='Invoice Number'>Invoice Number</option>
                <option value='Date'>Date</option>
                <option value='Status'>Status</option>
              </select>
            </div>
            {filterType && (
              <div className='filter-input'>
                <label>Enter {filterType}:</label>
                <input
                  type='text'
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  placeholder={`Enter ${filterType}`}
                />
              </div>
            )}
            <div className='filter-actions'>
              <button onClick={applyFilter}>Apply</button>
              <button onClick={() => setShowFilter(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {showConfirmDelete && (
        <div className='confirm-delete-modal'>
          <div className='confirm-delete-card'>
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this invoice?</p>
            <div className='confirm-delete-actions'>
              <button onClick={confirmDelete}>Yes</button>
              <button onClick={cancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}

      <div className='invoice-container'>
        <div className='invoice-header'>
          <div className='header-item client'>Client</div>
          <div className='header-item'>Invoice Number</div>
          <div className='header-item'>Date</div>
          <div className='header-item'>Total Amount</div>
          <div className='header-item'>Status</div>
          <div className='header-item'>Actions</div>
        </div>
        <div className='cards-container'>
          {invoiceList.map((invoice) => (
            <InvoiceCard
              key={invoice.invoiceNumber}
              clientName={invoice.clientName}
              clientEmail={invoice.clientEmail}
              invoiceNumber={invoice.invoiceNumber}
              date={invoice.date}
              totalAmount={invoice.totalAmount}
              status={invoice.status}
              onDelete={() => handleDelete(invoice)}
              onEdit={() => handleEdit(invoice)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
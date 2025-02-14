
import { useState } from 'react';
import { InvoiceCardProps } from '../types';

const useInvoiceFilter = (initialInvoices: InvoiceCardProps[]) => {
    const [filterType, setFilterType] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [filterStatus, setFilterStatus] = useState({ paid: false, unpaid: false });
    const [filteredInvoices, setFilteredInvoices] = useState(initialInvoices);
    const [searchQuery, setSearchQuery] = useState('');

    const applyFilter = () => {
        let filtered = initialInvoices;

        if (filterType === 'Status') {
            filtered = filtered.filter((invoice) =>
                (filterStatus.paid && invoice.status.toLowerCase() === 'paid') ||
                (filterStatus.unpaid && invoice.status.toLowerCase() === 'unpaid')
            );
        } else if (filterType === 'Date' && filterValue) {
            filtered = filtered.filter((invoice) => invoice.date === filterValue);
        } else if (filterType && filterValue) {
            filtered = filtered.filter((invoice) => {
                if (filterType === 'Client Name') return invoice.clientName.toLowerCase().includes(filterValue.toLowerCase());
                if (filterType === 'Invoice Number') return invoice.invoiceNumber.toLowerCase().includes(filterValue.toLowerCase());
                return false;
            });
        }

        if (searchQuery.trim().length > 0) {
            filtered = filtered.filter((invoice) =>
                invoice.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                invoice.status.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredInvoices(filtered);
    };

    return { filterType, setFilterType, filterValue, setFilterValue, filterStatus, setFilterStatus, searchQuery, setSearchQuery, filteredInvoices, applyFilter };
};

export default useInvoiceFilter;

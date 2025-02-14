import { useState } from 'react';
import { InvoiceCardProps } from '../types';

const useInvoiceFilter = (initialInvoices: InvoiceCardProps[]) => {
    const [filterType, setFilterType] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [filteredInvoices, setFilteredInvoices] = useState(initialInvoices);
    const [searchQuery, setSearchQuery] = useState('');

    const applyFilter = () => {
        let filtered = initialInvoices;

        if (filterType && filterValue) {
            filtered = filtered.filter((invoice) => {
                if (filterType === 'Client Name') return invoice.clientName.toLowerCase().includes(filterValue.toLowerCase());
                if (filterType === 'Status') return invoice.status.toLowerCase().includes(filterValue.toLowerCase());
                if (filterType === 'Invoice Number') return invoice.invoiceNumber.toLowerCase().includes(filterValue.toLowerCase());
                if (filterType === 'Date') return invoice.date === filterValue;
                return false;
            });
        }

        if (searchQuery) {
            filtered = filtered.filter((invoice) =>
                invoice.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                invoice.status.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredInvoices(filtered);
    };

    return { filterType, setFilterType, filterValue, setFilterValue, searchQuery, setSearchQuery, filteredInvoices, applyFilter };
};

export default useInvoiceFilter;
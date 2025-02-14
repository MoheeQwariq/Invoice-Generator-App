import { useState } from 'react';
import { InvoiceCardProps } from '../types';

const useSearch = (initialInvoices: InvoiceCardProps[]) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<InvoiceCardProps[]>(initialInvoices);

    const search = (query: string) => {
        const filtered = initialInvoices.filter(
            invoice =>
                invoice.clientName.toLowerCase().includes(query.toLowerCase()) ||
                invoice.invoiceNumber.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filtered);
    };

    return { searchQuery, setSearchQuery, searchResults, search };
};

export default useSearch;

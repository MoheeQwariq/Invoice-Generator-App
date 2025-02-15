import { useState } from "react";
import { InvoiceCardProps } from "../types";

const useDelete = (initialInvoices: InvoiceCardProps[]) => {
  const [invoiceListDelte, setInvoiceList] = useState(initialInvoices);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [invoiceToDelete, setInvoiceToDelete] =
    useState<InvoiceCardProps | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleDelete = (invoice: InvoiceCardProps) => {
    setInvoiceToDelete(invoice);
    setShowConfirmDelete(true);
  };

  const confirmDelete = () => {
    if (invoiceToDelete) {
      setInvoiceList(
        invoiceListDelte.filter(
          (i) => i.invoiceNumber !== invoiceToDelete.invoiceNumber
        )
      );
      setShowConfirmDelete(false);
      setInvoiceToDelete(null);
      setIsConfirmed(true);
    }
  };

  const cancelDelete = () => {
    setShowConfirmDelete(false);
    setInvoiceToDelete(null);
    setIsConfirmed(false);
  };

  return {
    invoiceListDelte,
    handleDelete,
    confirmDelete,
    cancelDelete,
    showConfirmDelete,
    isConfirmed,
  };
};

export default useDelete;

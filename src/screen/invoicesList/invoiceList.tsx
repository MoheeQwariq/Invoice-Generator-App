import React, { useState, useEffect } from "react";
import { InvoiceCardProps } from "../../types";
import "./invoiceList.css";
import { FaFileInvoice, FaFilter } from "react-icons/fa";
import FilterModal from "../../components/filterModals";
import DeleteConfirmationModal from "../../components/deleteConfirmationModal";
import useDelete from "../../hook/useDelete";
import useInvoiceFilter from "../../hook/useInvoiceFilter";
import { useNavigate } from "react-router-dom";
import useSearch from "../../hook/useSearch";
import SearchBar from "../../components/search";
import InvoiceCard from "../../components/invoiceCards";

const sampleInvoices: InvoiceCardProps[] = [
  {
    clientName: "Alaa Mousa",
    clientEmail: "alaamousa@example.com",
    invoiceNumber: "INV-001",
    date: "2025-02-01",
    totalAmount: 1500,
    status: "UnPaid",
    onDelete: () => {},
    onEdit: () => {},
  },
  {
    clientName: "Alaa Mousa",
    clientEmail: "alaamousa@example.com",
    invoiceNumber: "INV-0091",
    date: "2025-02-01",
    totalAmount: 1500,
    status: "UnPaid",
    onDelete: () => {},
    onEdit: () => {},
  },
  {
    clientName: "Yazeed Sleat",
    clientEmail: "yazeedSleat@example.com",
    invoiceNumber: "INV-002",
    date: "2025-02-05",
    totalAmount: 2500,
    status: "Paid",
    onDelete: () => {},
    onEdit: () => {},
  },
  {
    clientName: "Mohammad Khalili",
    clientEmail: "mohammad@example.com",
    invoiceNumber: "INV-003",
    date: "2025-02-08",
    totalAmount: 3000,
    status: "Paid",
    onDelete: () => {},
    onEdit: () => {},
  },
];

const CardList: React.FC = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [invoiceList, setInvoiceList] =
    useState<InvoiceCardProps[]>(sampleInvoices); // Keeping the state of invoices

  const {
    invoiceListDelte,
    handleDelete,
    confirmDelete,
    cancelDelete,
    showConfirmDelete,
  } = useDelete(invoiceList);

  const [mainInvoiceList, setMainInvoiceList] =
    useState<InvoiceCardProps[]>(sampleInvoices); // Keeping the state of invoices
  // const { filterType, setFilterType, filterValue, setFilterValue, filteredInvoices, applyFilter } = useInvoiceFilter(mainInvoiceList);
  const {
    filterType,
    setFilterType,
    filterValue,
    setFilterValue,
    filterStatus,
    setFilterStatus,
    filteredInvoices,
    applyFilter,
  } = useInvoiceFilter(mainInvoiceList);
  const { searchQuery, setSearchQuery, searchResults, search } =
    useSearch(mainInvoiceList);
  const handleCreateInvoie = () => {
    navigate("/CreateInvoice");
  };

  const handleApplyFilter = () => {
    applyFilter();
    setShowFilter(false);
  };

  const handleDeleteInvoice = (invoice: InvoiceCardProps) => {
    handleDelete(invoice);
  };

  useEffect(() => {
    setInvoiceList(invoiceListDelte);
    setMainInvoiceList(invoiceListDelte);
  }, [invoiceListDelte]);

  useEffect(() => {
    setInvoiceList(filteredInvoices);
  }, [filteredInvoices]);
  useEffect(() => {
    setInvoiceList(searchResults);
  }, [searchResults]);

  return (
    <div className="AllInvoices">
      <div className="containerr">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          search={search}
        />
        <div className="buttons">
          <button className="create-invoice" onClick={handleCreateInvoie}>
            <FaFileInvoice className="icon" /> Create Invoice
          </button>
          <button className="filter" onClick={() => setShowFilter(!showFilter)}>
            <FaFilter className="icon" /> Filters
          </button>
        </div>
      </div>

      {showFilter && (
        <FilterModal
          filterType={filterType}
          setFilterType={setFilterType}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          applyFilter={handleApplyFilter}
          closeFilter={() => setShowFilter(false)}
        />
      )}

      {showConfirmDelete && (
        <DeleteConfirmationModal
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}

      <div className="invoice-container">
        <div className="invoice-header">
          <div className="header-item client">Client</div>
          <div className="header-item">Invoice Number</div>
          <div className="header-item">Date</div>
          <div className="header-item">Total Amount</div>
          <div className="header-item">Status</div>
          <div className="header-item">Actions</div>
        </div>
        <div className="cards-container">
          {invoiceList.map((invoice) => (
            <InvoiceCard
              key={invoice.invoiceNumber}
              {...invoice}
              onDelete={() => handleDeleteInvoice(invoice)}
              onEdit={() => handleCreateInvoie()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;

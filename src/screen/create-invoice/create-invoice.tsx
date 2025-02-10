import OrderTable from "../../components/table";
import "./create-invoice.css";
import { useState } from "react";

const CreateInvoice = () => {
  const users = JSON.parse(localStorage.getItem("users") || "[]") || [];
  const user =
    users.length > 0
      ? users[0]
      : { name: "", email: "", phone: "", address: "" };

  const generateInvoiceNumber = () => {
    return `INV-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNumber: generateInvoiceNumber(),
    issuedDate: "",
    dueDate: "",
    status: "Unpaid",
    paymentMethod: "",
  });

  const [clientDetails, setClientDetails] = useState({
    clientName: "",
    email: "",
    address: "",
  });

  const handleInvoiceChange = (e:React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLSelectElement>) => {
    setInvoiceDetails({ ...invoiceDetails, [e.target.name]: e.target.value });
  };

  const handleClientChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setClientDetails({ ...clientDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="main">
      <div className="MainPart1">
        <div className="General-Info">
          <div className="G1">
            <div className="maglo">{user.name}</div>
            <div className="sales-maglo-com">{user.email}</div>
          </div>
          <div className="G2">
            <div className="textG2">{user.address}</div>
            <div className="phone">{user.phone || "No Phone Available"}</div>
          </div>
        </div>
        <div className="card-theme-off">
          <div className="invoice-number">
            <div className="invoice-number2">Invoice Details</div>
            <div className="info">
              <div className="InvoiceDetails">
                <div className="InvoiceDetailsText">Invoice Number</div>
                <div className="LargeInvoiceNumber">
                  {invoiceDetails.invoiceNumber}
                </div>
              </div>
              <div className="InvoiceDetails">
                <div className="InvoiceDetailsText">Due Date</div>
                <div className="input-container">
                  <input
                    type="date"
                    name="dueDate"
                    value={invoiceDetails.dueDate}
                    onChange={handleInvoiceChange}
                    className="input-field"
                    placeholder="Due Date"
                  />
                </div>
              </div>
              <div className="InvoiceDetails">
                <div className="InvoiceDetailsText">Issued Date</div>
                <div className="input-container">
                  <input
                    type="date"
                    name="issuedDate"
                    className="input-field"
                    value={invoiceDetails.issuedDate}
                    onChange={handleInvoiceChange}
                    placeholder="Issued Date"
                  />
                </div>
              </div>
              <div className="InvoiceDetails">
                <div className="InvoiceDetailsText">Invoice Status</div>
                <div className="input-container">
                  <select
                    id="status"
                    name="status"
                    className="input-field"
                    value={invoiceDetails.status}
                    onChange={handleInvoiceChange}
                  >
                    <option value="Unpaid">Unpaid</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
              </div>
              {invoiceDetails.status === "Paid" && (
                <div className="InvoiceDetails">
                  <div className="InvoiceDetailsText">Payment Method</div>
                  <div className="input-container">
                    <label htmlFor="paymentMethod">Payment Method</label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      className="input-field"
                      value={invoiceDetails.paymentMethod}
                      onChange={handleInvoiceChange}
                    >
                      <option value="">Select Payment Method</option>
                      <option value="Cash">Cash</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="billed-to">
            <div className="billed-to2">Billed to</div>
            <div className="info2">
              <div className="InvoiceDetails">
                <div className="InvoiceDetailsText">Client Name</div>
                <div className="input-container">
                  <input
                    type="text"
                    name="clientName"
                    className="input-field"
                    value={clientDetails.clientName}
                    onChange={handleClientChange}
                    placeholder="Client Name"
                  />
                </div>
              </div>
              <div className="InvoiceDetails">
                <div className="InvoiceDetailsText">Client Email</div>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    value={clientDetails.email}
                    className="input-field"
                    onChange={handleClientChange}
                    placeholder="Client Email"
                  />
                </div>
              </div>
              <div className="InvoiceDetails">
                <div className="InvoiceDetailsText">Client Address</div>
                <div className="input-container">
                  <input
                    type="text"
                    name="address"
                    value={clientDetails.address}
                    className="input-field"
                    onChange={handleClientChange}
                    placeholder="Client Address"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-details">
          <div className="item-details2">Item Details</div>
          <div className="TextDetails">Details item with more info</div>
        </div>
        <OrderTable />
      </div>
    </div>
  );
};

export default CreateInvoice;

import { OrderTable } from "../../components/Table/Table";
import "./create-invoice.css";
import { useState } from "react";

const CreateInvoice = () => {
  const users = JSON.parse(localStorage.getItem("users") || "[]") || [];
  const user =
    users.length > 0
      ? users[0]
      : { name: "", email: "", phone: "", address: "" };

  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNumber: "",
    issuedDate: "",
    dueDate: "",
  });

  const [clientDetails, setClientDetails] = useState({
    clientName: "",
    email: "",
    address: "",
  });

  const handleInvoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
              <div className="InvoiceDate">
                <div className="InvoiceDateText">Invoice Number</div>
                <div className="InputDate">
                  <input
                    type="text"
                    name="invoiceNumber"
                    value={invoiceDetails.invoiceNumber}
                    onChange={handleInvoiceChange}
                    className="inputText"
                    placeholder="Invoice Number"
                  />
                </div>
              </div>
              <div className="InvoiceDate">
                <div className="InvoiceDateText">Due Date</div>
                <div className="InputDate">
                  <input
                    type="date"
                    name="dueDate"
                    value={invoiceDetails.dueDate}
                    onChange={handleInvoiceChange}
                    className="inputText"
                    placeholder="Due Date"
                  />
                </div>
              </div>
              <div className="InvoiceDate">
                <div className="InvoiceDateText">Issued Date</div>
                <div className="InputDate">
                  <input
                    type="date"
                    name="issuedDate"
                    className="inputText"
                    value={invoiceDetails.issuedDate}
                    onChange={handleInvoiceChange}
                    placeholder="Issued Date"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="billed-to">
            <div className="billed-to2">Billed to</div>
            <div className="info2">
              <div className="InvoiceDate">
                <div className="InvoiceDateText">Client Name</div>
                <div className="InputDate">
                  <input
                    type="text"
                    name="clientName"
                    className="inputText"
                    value={clientDetails.clientName}
                    onChange={handleClientChange}
                    placeholder="Client Name"
                  />
                </div>
              </div>
              <div className="InvoiceDate">
                <div className="InvoiceDateText">Client Email</div>
                <div className="InputDate">
                  <input
                    type="email"
                    name="email"
                    value={clientDetails.email}
                    className="inputText"
                    onChange={handleClientChange}
                    placeholder="Client Email"
                  />
                </div>
              </div>
              <div className="InvoiceDate">
                <div className="InvoiceDateText">Client Address</div>
                <div className="InputDate">
                  <input
                    type="text"
                    name="address"
                    value={clientDetails.address}
                    className="inputText"
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

import CustomButton from "../../components/customButton";
import PreviewInvoice from "../../components/previewInvoice";
import OrderTable from "../../components/Table";
import {IClient, IInvoice, TableRow } from "../../types";
import "./create-invoice.css";
import { useRef, useState } from "react";
import preview from "../../assets/Eye.png";
import download from "../../assets/Download.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const CreateInvoice = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const client: IClient = {
    name: "Osama Ghneem",
    email: "Osama_Ghneem@gmail.com",
    phone: "059959595",
    address: "Bethlehem",
  };

  const invoice: IInvoice = {
    InvoiceId: "INV-1739317809044-108",
    dueDate: "10/9/2024",
    issueDate: "12/2/2025",
    status: true,
    paymentMethod: "Cash",
  };

  const listItems: TableRow[]= [{
    name: "Macbook pro 24",
    price: 3000,
    quantity: 1
  },{
    name: "Macbook pro 24",
    price: 3000,
    quantity: 2
  }];

  const handleInvoiceChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInvoiceDetails({ ...invoiceDetails, [e.target.name]: e.target.value });
  };

  const handleClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientDetails({ ...clientDetails, [e.target.name]: e.target.value });
  };

  const handlePreview = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDownload = async () => {
    if (!previewRef.current) {
      console.error("Preview ref is not attached to any element.");
      return;
    }

    const element = previewRef.current;
    const canvas = await html2canvas(element, { scale: 5 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
    pdf.save("invoice.pdf");
  };
  return (
    <div className="wrapper">
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
      <div>
        <div
          ref={previewRef}
          style={{
            position: "absolute",
            left: "-9999px",
          }}
        >
          <PreviewInvoice
            user={user}
            client={client}
            invoice={invoice}
            pageType="A4"
            list={listItems}
          />
        </div>

        <PreviewInvoice
          user={user}
          client={client}
          invoice={invoice}
          pageType="A6"
          list={listItems}
        />

        <div className="setting">
          <CustomButton icon={preview} text="Preview" onClick={handlePreview} />
          <CustomButton
            icon={download}
            text="Download"
            onClick={handleDownload}
          />
        </div>
      </div>
      {isOpen && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content">
          <PreviewInvoice
            user={user}
            client={client}
            invoice={invoice}
            pageType="A4"
            list={listItems}
          />
        </div>
      </div>
    )}
    </div>
  );
};

export default CreateInvoice;

import { IPreview } from "../../types";
import "./previewInvoice.css";

const PreviewInvoice = (props: IPreview) => {
  const { user, client,invoice,pageType} = props;
  const style = {
    width: pageType === "A4" ? "210mm" : "105mm",
    height: pageType === "A4" ? "297mm" : "148.5mm",}

  return (
    <div className="paper" style={style}>
      <div className="title">INVOICE</div>
      <div className="user">
        {user.name} | {user.address} | {user.email} | {user.phone}
      </div>
      <div className="_container">
      <div className="client">
        Bill to:
        <div className="label">Name: {client.name}</div>
        <div className="label">phone: {client.phone}</div>
        <div className="label">Email: {client.email}</div>
        <div className="label">Address: {client.address}</div>
      </div>
      <div className="block">
      <div className="box">
      <div className="invoice">
        <div className="invoiceLabel">Invoice No.</div>
        <div className="invoiceCard">{invoice.InvoiceId}</div>
      </div>
      <div className="invoice">
        <div className="invoiceLabel">Invoice Date</div>
        <div className="invoiceCard">{invoice.issueDate}</div>
      </div>
      <div className="invoice">
        <div className="invoiceLabel">Due Date</div>
        <div className="invoiceCard">{invoice.dueDate}</div>
      </div>
      </div>
      <div className="status">
        Status : {invoice.status?`paid by ${invoice.paymentMethod}`:'unpaid'} 
      </div>
      </div>
      </div>
      <div className="break"></div>
    </div>
  );
};

export default PreviewInvoice;

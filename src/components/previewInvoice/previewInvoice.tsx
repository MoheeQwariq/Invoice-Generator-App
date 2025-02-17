import { IPreview } from "../../types";
import "./previewInvoice.css";

const PreviewInvoice = (props: IPreview) => {
  const { user, client, invoice, pageType, list } = props;
  const style = {
    width: pageType === "A4" ? "210mm" : "105mm",
    height: pageType === "A4" ? "297mm" : "148.5mm",
  };

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
              <div className="invoiceCard">{invoice.invoiceId}</div>
            </div>
            <div className="invoice">
              <div className="invoiceLabel">Issue Date</div>
              <div className="invoiceCard">{invoice.issueDate}</div>
            </div>
            <div className="invoice">
              <div className="invoiceLabel">Due Date</div>
              <div className="invoiceCard">{invoice.dueDate}</div>
            </div>
          </div>
          <div className="status">
            Status :{" "}
            {invoice.status ? `paid by ${invoice.paymentMethod}` : "unpaid"}
          </div>
        </div>
      </div>
      <div className="break"></div>
      <div className="tableContainer">
        <table className="itemsTable">
          <thead className="head">
            <tr>
              <th>ITEM</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
          <br />
          <tfoot>
            <tr>
              <td colSpan={4} className="result"></td>
            </tr>
            <br />

            <tr>
              <td colSpan={2}></td>
              <td>
                <strong>Subtotal</strong>
              </td>
              <td>${invoice.subTotal}</td>
            </tr>
            <tr>
              <td colSpan={2}></td>
              <td>
                <strong>Tax ({invoice.tax}%)</strong>
              </td>
              <td>$ {(invoice.subTotal * (invoice.tax / 100)).toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan={2}></td>
              <td>
                <strong>Discount ({invoice.discount}%)</strong>
              </td>
              <td>
                $ {(invoice.subTotal * (invoice.discount / 100)).toFixed(2)}
              </td>
            </tr>
            <tr className="finalTotal">
              <td colSpan={2}></td>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>
                  $
                  {Number(
                    invoice.subTotal * (1 + invoice.tax / 100) -
                      invoice.subTotal * (invoice.discount / 100)
                  ).toFixed(2)}
                </strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default PreviewInvoice;

import { useState } from "react";
import "./part2.component.css";
import user from "../../assets/user.png";
import verify from "../../assets/verify.png";
import preview from "../../assets/Eye.png";
import download from "../../assets/Download.png";

const MainPart2: React.FC = () => {
  const [invoiceDate, setInvoiceDate] = useState("2022-04-14");
  const [dueDate, setDueDate] = useState("2022-04-20");

  return (
    <div className="MainPart2">
      <div className="client-detailsAll">
        <h3 className="client-detailsText">Client Details</h3>
        <div className="UserDetails">
          <img className="image" src={user} alt="user" />
          <div className="UserName">
            <div className="UserNameText1">Sajib Rahman</div>
            <div className="UserNameText2">rahmansajib@uihut.com</div>
          </div>
        </div>
        <div className="line"></div>
        <div className="companyDetails">
          <div className="CompanyName">
            <div className="CompanyName1">UIHUT Agency LTD</div>
            <img className="ImageVerify" src={verify} alt="verify" />
          </div>
          <div className="CompanyName2">3461 Camel Back Road Tulsa, USA</div>
        </div>

        <button className="add-customer">Add Customer</button>
      </div>

      <div className="basicInfo">
        <div className="basicInfoText">Basic Info</div>
        <div className="MainBasicInfo">
          <div className="InputsBasicInfo">
            <div className="InvoiceDate">
              <div className="InvoiceDateText">Invoice Date</div>
              <div className="InputDate">
                <input
                  type="date"
                  className="inputText"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </div>
            </div>
            <div className="InvoiceDate">
              <div className="InvoiceDateText">Due Date</div>
              <div className="InputDate">
                <input
                  type="date"
                  className="inputText"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="InvoiceButtons">
              <button className="SendInvoice">Send Invoice</button>
            <div className="OtherButton">
              <button className="previewDiv">
                <img className="eyeImage" src={preview} alt="preview" />
                <div className="previewText">Preview</div>
              </button>
              <button className="previewDiv">
                <img className="downloadImage" src={download} alt="download" />
                <div className="downloadText">Download</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPart2;

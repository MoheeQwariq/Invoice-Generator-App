import MainPart2 from "../../components/SectionTwoCreateInvoice/part2.component";
import { OrderTable } from "../../components/Table/Table";
import "./create-invoice.css";

const CreateInvoice = () => {
  return (
    <div className="main">
      <div className="MainPart1">
        <div className="General-Info ">
          <div className="G1">
            <div className="maglo">PayInvo </div>
            <div className="sales-maglo-com">sales@maglo.com </div>
            <div />
          </div>
          <div className="G2">
            <div className="textG2">1333 Grey Fox Farm Road</div>
            <div className="textG2">Houston, TX 77060 </div>
            <div className="textG2">Bloomfield Hills, Michigan(MI), 48301</div>
          </div>
        </div>
        <div className="card-theme-off ">
          <div className="invoice-number">
            <div className="invoice-number2">Invoice Number </div>
            <div className="info">
              <div className="Text2">MAG 2541420 </div>
              <div className="Text2">Issued Date: 10 Apr 2022 </div>
              <div className="Text2">Due Date: 20 Apr 2022 </div>
            </div>
          </div>
          <div className="billed-to">
            <div className="billed-to2">Billed to </div>
            <div className="info2">
              <div className="Text2">Sajib Rahman </div>
              <div className="Text2">3471 Rainy Day Drive </div>
              <div className="Text2">Needham, MA 02192 </div>
            </div>
          </div>
        </div>
        <div className="item-details">
          <div className="item-details2">Item Details </div>
          <div className="TextDetails">Details item with more info</div>
        </div>
        <OrderTable/>
      </div>
      <MainPart2 />
    </div>
  );
};

export default CreateInvoice;

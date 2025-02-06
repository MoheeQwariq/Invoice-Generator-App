import React, { useState } from "react";
import "./Table.css";

interface TableRow {
  name: string;
  price: number;
  quantity: number;
}

export const OrderTable: React.FC = () => {
  const [data, setData] = useState<TableRow[]>([
    { name: "Iphone 13 Pro Max", price: 244, quantity: 1 },
    { name: "Netflix Subscription", price: 420, quantity: 1 },
  ]);
  const [tax, setTax] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");
  const [isTaxInputVisible, setIsTaxInputVisible] = useState(false);
  const [isDiscountInputVisible, setIsDiscountInputVisible] = useState(false);

  const handleChange = (index: number, field: keyof TableRow, value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: field === "name" ? value : Number(value) };
    setData(newData);
  };

  const addRow = () => {
    setData([...data, { name: "", price: 0, quantity: 1 }]);
  };

  const calculateSubTotal = () => {
    return data.reduce((sum, row) => sum + row.price * row.quantity, 0);
  };

  const calculateTotal = () => {
    let total = calculateSubTotal();
    
    if (tax) {
      if (tax.includes('%')) {
        total += (total * parseFloat(tax.replace('%', ''))) / 100;
      } else {
        total += parseFloat(tax);
      }
    }

    if (discount) {
      if (discount.includes('%')) {
        total -= (total * parseFloat(discount.replace('%', ''))) / 100;
      } else {
        total -= parseFloat(discount);
      }
    }

    return total;
  };

  return (
    <div className="order-table-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>ITEM</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  className="InputName"
                  value={row.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="InputData"
                  value={row.quantity}
                  onChange={(e) => handleChange(index, "quantity", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="InputData"
                  value={row.price}
                  onChange={(e) => handleChange(index, "price", e.target.value)}
                />
              </td>
              <td>${(row.price * row.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="AddItemTotal">
        <button className="add-itemButton" onClick={addRow}>Add Item</button>
        <div className="subtotalDiv">
          <div className="infoDiv">
            <div className="subTotalDiv">
              <div className="TextG">Subtotal </div>
              <div className="priceText">${calculateSubTotal().toFixed(2)}</div>
            </div>
            
            <div className="subTotalDiv">
              <div className="TextG">Discount </div>
              {isDiscountInputVisible ? (
                <input
                  type="text"
                  className="InputData"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  onBlur={() => setIsDiscountInputVisible(false)}
                  autoFocus
                  placeholder="Enter discount (e.g., 10% or 5)"
                />
              ) : (
                <div className="addButton" onClick={() => setIsDiscountInputVisible(true)}>Add</div>
              )}
            </div>

            <div className="subTotalDiv">
              <div className="TextG">Tax </div>
              {isTaxInputVisible ? (
                <input
                  type="text"
                  className="InputData"
                  value={tax}
                  onChange={(e) => setTax(e.target.value)}
                  onBlur={() => setIsTaxInputVisible(false)}
                  autoFocus
                  placeholder="Enter tax (e.g., 10% or 5)"
                />
              ) : (
                <div className="addButton" onClick={() => setIsTaxInputVisible(true)}>Add</div>
              )}
            </div>

            <div className="line-15"></div>
          </div>
          <div className="subTotalDiv">
            <div className="totalText">Total </div>
            <div className="priceText">${calculateTotal().toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

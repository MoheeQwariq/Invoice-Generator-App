import React from "react";
import "./table.css";
import { IOrderTable } from "../../types";
import { MdDelete } from "react-icons/md";

const OrderTable: React.FC<IOrderTable> = ({
  items,
  onItemChange,
  onRemoveItem,
  onAddItem,
}) => {
  return (
    <div className="order-table-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>ITEM</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  className="InputName"
                  value={row.name}
                  onChange={(e) => onItemChange(index, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="InputData"
                  value={row.quantity}
                  onChange={(e) =>
                    onItemChange(index, "quantity", Number(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  className="InputData"
                  value={row.price}
                  onChange={(e) =>
                    onItemChange(index, "price", Number(e.target.value))
                  }
                />
              </td>
              <td>${(row.price * row.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="deleteButton"
                  onClick={() => onRemoveItem(index)}
                >
                  <MdDelete className="iconDelete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="TableAction">
        <button className="AddItemButton" onClick={onAddItem}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default OrderTable;

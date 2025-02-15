import React from "react";
import "./filterModal.css";
import { FilterModalProps } from "../../types";

const FilterModal: React.FC<FilterModalProps> = ({
  filterType,
  setFilterType,
  filterValue,
  setFilterValue,
  filterStatus,
  setFilterStatus,
  applyFilter,
  closeFilter,
}) => {
  return (
    <div className="filter-modal">
      <div className="filter-card">
        <h3>Apply Filters</h3>
        <div className="filter-options">
          <label>Filter By:</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">Select Filter Type</option>
            <option value="Client Name">Client Name</option>
            <option value="Invoice Number">Invoice Number</option>
            <option value="Date">Date</option>
            <option value="Status">Status</option>
          </select>
        </div>
        {filterType === "Status" && (
          <div className="filter-checkboxes">
            <label>
              <input
                type="checkbox"
                checked={filterStatus.paid}
                onChange={() =>
                  setFilterStatus((prev) => ({ ...prev, paid: !prev.paid }))
                }
              />{" "}
              Paid
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterStatus.unpaid}
                onChange={() =>
                  setFilterStatus((prev) => ({ ...prev, unpaid: !prev.unpaid }))
                }
              />{" "}
              UnPaid
            </label>
          </div>
        )}
        {filterType === "Date" && (
          <div className="filter-input">
            <label>Select Date:</label>
            <input
              type="date"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            />
          </div>
        )}
        {filterType !== "Status" && filterType !== "Date" && filterType && (
          <div className="filter-input">
            <label>Enter {filterType}:</label>
            <input
              type="text"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              placeholder={`Enter ${filterType}`}
            />
          </div>
        )}
        <div className="filter-actions">
          <button onClick={applyFilter}>Apply</button>
          <button onClick={closeFilter}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

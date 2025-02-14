import React from 'react';
import './filterModal.css';

interface FilterModalProps {
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  applyFilter: () => void;
  closeFilter: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  filterType, setFilterType, filterValue, setFilterValue, applyFilter, closeFilter
}) => {
  return (
    <div className="filter-modal">
      <div className="filter-card">
        <h3>Apply Filters</h3>
        <div className="filter-options">
          <label>Filter By:</label>
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value=''>Select Filter Type</option>
            <option value='Client Name'>Client Name</option>
            <option value='Invoice Number'>Invoice Number</option>
            <option value='Date'>Date</option>
            <option value='Status'>Status</option>
          </select>
        </div>
        {filterType && (
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

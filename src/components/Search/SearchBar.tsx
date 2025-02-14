import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';
interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <div className="search-bar">
      <FaSearch className="icon" />
      <input
        type="text"
        placeholder="Search invoices"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          onSearch();
        }}
      />
    </div>
  );
};

export default SearchBar;

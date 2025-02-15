import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchBar.css';
interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  search: (query: string) => void;  
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, search }) => {
  return (
    <div className="search-bar">
      <FaSearch className="icon" />
      <input
        type="text"
        placeholder="Search invoices"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          search(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;

//Searchbar works well (uses javascritpt concept to parseinput character and match with stored tasks)

import React from 'react';
import '../styles/SearchBar.css';

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
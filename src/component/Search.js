import React from "react";

const Search = ({ search, searchProduct }) => {
  
  return (
    <>
      <div>
        <h3 className="font-medium mb-2">Search</h3>
        <input
          type="text"
          placeholder="search product"
          value={search}
          onChange={searchProduct}
          className="p-2 border-b border-black w-full focus:outline-none"
        />
      </div>
    </>
  );
};

export default Search;

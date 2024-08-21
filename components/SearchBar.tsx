"use client";
import { SearchManufacturer } from "./";
import { useState } from "react";

const SearchBar = () => {
  const [manufecturer, setManufecturer] = useState("");
  const handleSubmit = () => {};
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
        //   manufacturers={manufecturer}
        //   setManufacturers={() => {}}
        />
      </div>
    </form>
  );
};

export default SearchBar;

import React from "react";
import { Link } from "react-router-dom"
import "./SearchLocation.css";

const Search = ({ setSearch, updatePageNumber }) => {

  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for Locations"
        className="searchInputLocation"
        type="text"
      />
      <Link to="/CreateLocation" className="btn searchBtnLocation">New Location</Link>
    </form> 
  );
};

export default Search;

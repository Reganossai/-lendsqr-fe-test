import React, { useState, useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Search = () => {




  return (
    <div className="searh-div">
      <input
        type="text"
        placeholder="Search for anything"
       
      />
      <button><FontAwesomeIcon icon={faSearch} /></button>
    
    </div>
  );
};

export default Search;

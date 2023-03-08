import React from 'react';
import SearchLensIcon from '../../../assets/svg/SearchLensIcon';

function SearchBox() {
  return (
    <div className="row justify-content-center">
    <div className=" d-flex justify-content-center align-items-center border p-2 rounded-3 col-10 col-md-6 commerce-nav-active">
      <span>
        <SearchLensIcon />
      </span>{" "}
      <input type="search" name="" id="" className="w-100 border-0 px-2" style={{    background: "inherit", }}/>
    </div>
  </div>
  );
}

export default SearchBox;

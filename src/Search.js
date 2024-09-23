import React, { useState,useEffect } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch=(e)=>{
    setSearchText(e.target.value);
    alert(searchText);
  }
//   prothombar search e click korle kisu display hoina seitar jonne effect hook nebo
useEffect(()=>{
props.onSearch(searchText)
},[searchText]);
  return (
    <div class='text-center'>
      <input class='text-center'type="text" placeholder="search country" value={searchText}
      onChange={handleSearch}
      />
    </div>
  );
};

export default Search;

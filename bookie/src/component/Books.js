import React, { useState } from 'react';
import Searchbar from './Searchbar'

function Books() {
  const [searchValue, setSearchValue] = useState("");
  const [books,setBooks] = useState([]);
  const handleSearch = (event)=> {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  return (
    <div >
      <Searchbar handleSearch = {handleSearch}></Searchbar>
      
    </div>
  );
}

export default Books;

import React, { useState } from 'react';
import Searchbar from './Searchbar';
import getBookData from '../api/googleBooks';
import Booklist from './Booklist'

function Books() {
  const [searchValue, setSearchValue] = useState("");
  const [books,setBooks] = useState([]);

  const handleSubmit = async (event) =>{
    event.preventDefault();
    await getBookData(searchValue,setBooks)
  }
  const handleSearch = (event)=> {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  return (
    <div >
      <Searchbar handleSearch = {handleSearch} handleSubmit = {handleSubmit}></Searchbar>
      <Booklist books = {books}></Booklist>
      
    </div>
  );
}

export default Books;

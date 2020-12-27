import React, { useState } from 'react';
import Searchbar from './Searchbar';
import getBookData from '../api/googleBooks';
import Booklist from './Booklist'
import { useForm } from "react-hook-form";


function Books() {
  const [searchValue, setSearchValue] = useState("");
  const [books,setBooks] = useState([]);
  const [sort,setSort] = useState("");
  let sortedBooks = [];
  

  const handleSubmit = async (event) =>{
    event.preventDefault();
    await getBookData(searchValue,setBooks)
  }
  const handleSearch = (event)=> {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  const handleSort = (event)=> {
    console.log(event.target.value);
    setSort(event.target.value);
    if(event.target.value == "Newest")
    {
       sortedBooks = books.sort((a,b)=>{
        return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))

        })
    }
    else if(event.target.value == "Oldest")
    {
        sortedBooks = books.sort((a,b)=>{
        return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))

        })

    }
    else if(event.target.value == "Ascending")
    {
      sortedBooks = books.sort((a,b) =>{
        return  a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      })

    }
    else if(event.target.value == "Descending")
    {
      sortedBooks = books.sort((a,b) =>{
        return  a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      })

      sortedBooks = sortedBooks.reverse();

    }
    setBooks(sortedBooks);
  }
  

  
  return (
    <div >
      <Searchbar handleSearch = {handleSearch} handleSubmit = {handleSubmit} handleSort = {handleSort} sort = {sort}></Searchbar>
      <Booklist books = {books}></Booklist>
      
    </div>
  );
}

export default Books;

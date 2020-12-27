import React from 'react';
import Bookcard from './Bookcard'


function Booklist(props) {
  return (
    <div className = "container">
        <div className = "row">
            <div className = "col s12">
                {props.books.map((book, index)=>{
                    console.log(book);
                    return(
                    <div  className = "col s3 m3">
                        <Bookcard
                            key = {index}
                            image = {book.volumeInfo.imageLinks.thumbnail}
                            title = {book.volumeInfo.title}
                            author = {book.volumeInfo.authors}
                            published = {book.volumeInfo.publishedDate}
                           
                        ></Bookcard>
                    </div>);
                })}
            </div>
        </div>
      
    </div>
  );
}

export default Booklist;
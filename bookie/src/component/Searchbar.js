import React from 'react';
import { Button } from 'semantic-ui-react';
import "./Searchbar.css";




function Searchbar(props) {
  return (
    <div className = "container">
      <div className = "row">     
        <section className = "col  s6 offset-s4">
          <form action = "" onSubmit = {props.handleSubmit}>
          <div className="col s6 ">
            <input placeholder = "Search for Book" type = "text" onChange = {props.handleSearch}></input>
          </div>  
          <div className="col s3 ">
            <Button inverted color='black' type = "submit">submit</Button>
          </div>
          
          <div className="col s3 pull-s1">
            <select color = "black"  className="browser-default dropdown select-css" defaultValue = "Sort" onChange = {props.handleSort}>
              <option disabled value = "Sort">Sort</option>
              <option value = "Newest">Newest</option>
              <option value = "Oldest">Oldest</option>
              <option value = "Ascending">A-Z</option>
              <option value = "Descending">Z-A</option>
            </select>
          </div> 
          
          </form>
        </section>
      </div>
    </div>
  );
}

export default Searchbar;

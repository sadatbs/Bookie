import React from 'react';

function Searchbar(props) {
  return (
    <div className = "container">
      <div className = "row">
        <section className = "col s6 offset-s4">
          <form action = "">
            <input placeholder = "Search for Book" type = "text" onChange = {props.handleSearch}></input>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Searchbar;

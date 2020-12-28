import React from 'react';
import Home from './component/Home';
import BookDetails from './component/BookDetails';
import { BrowserRouter, Link, Route  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Route path = "/" exact = {true} component ={Home}/>
        <Route path = "/bookDetails/:title" exact = {true} component = {BookDetails}/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

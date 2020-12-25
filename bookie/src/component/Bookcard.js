import React from 'react';


function Bookcard(props) {
   
  return (
    
  
  <div className="col s8 m4">
    <div className="card">
      <div className="card-image">
        <img src={props.image} />
      </div>
      <span className="card-title" style= {{color:"green"}}>{props.title}</span>
      <br></br>
      <span className="card-title" style= {{color:"blue"}}>{props.author}</span>
      <br></br>
      <span className="card-title" style= {{color:"darkgreen"}}>{props.published}</span>
      <div className="card-content">
        
      </div>
    </div>
  </div>


           
  );
}

export default Bookcard;
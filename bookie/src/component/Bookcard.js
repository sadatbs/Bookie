import React from 'react';


function Bookcard(props) {
   
  return (
    
  
 
    <div className="card medium">
      <div className="card-image">
        <img src={props.image} />
      </div>
      <span className="card-title" style= {{color:"green"}}>Title:{props.title}</span>
      <br></br>
      <span className="card-title" style= {{color:"blue"}}>Author:{props.author}</span>
      <br></br>
      <span className="card-title" style= {{color:"darkgreen"}}>Published:{props.published}</span>
      <div className="card-content">
        
      </div>
    </div>


           
  );
}

export default Bookcard;
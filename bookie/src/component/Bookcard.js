import React from 'react';
import { Link } from "react-router-dom";


function Bookcard(props) {
   
  return (
    
  
 
    <div className="card medium">
      <div className="card-image">
        <img src={props.image} />
      </div>
      <span className="card-content " style= {{color:"green"}}>Title:{props.title}</span>
      <br></br>
      <span className="card-content " style= {{color:"blue"}}>Author:{props.author}</span>
      <br></br>
      <span className="card-content" style= {{color:"darkgreen"}}>Published:{props.published}</span>
      <div className="card-content">
      <div class="card-action">
          <Link to={{pathname: "/bookDetails/" + props.title, title:props.title, author:props.author, published:props.published, image:props.image, description:props.description, props :props.props }}>See Details</Link>
                </div>
        
      </div>
    </div>


           
  );
}

export default Bookcard;
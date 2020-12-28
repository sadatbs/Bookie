import React from 'react';
import {Link} from "react-router-dom";


const BookDetails = (props) => {
   return( <div>
    <div class="row">
      <div class="col s12 m7">
        <div class="card large">
            
              <img
                src={props.location.image}
                alt=""
                style={{ width: "300", height: "600" }}
              />
            <div></div>
            <span class="card-title">{props.location.title}</span>
            <div></div>
            <span class="card-title">{props.location.author}</span>
            <div></div>
            <span class="card-title">{props.location.published}</span>

          <div class="card-content">
            <p>{props.location.description}</p>
          </div>
          <div class="card-action">
            <Link to={{pathname: "/" , books:props.location.props}}>Go to search page!</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
   )

}

export default BookDetails;
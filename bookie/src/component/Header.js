import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Header = ()=>{
    return(
<div >
    <nav style = {{height : 90}}>
        <div className="nav-wrapper black lighten-1 "  >
        <header>
                <h1 className = "brand-logo center" style = {{color:"lightgreen" }}><FontAwesomeIcon icon = {faBook}/>Bookie</h1>
        </header>
        </div>
     </nav>
</div>
    )
}
export default Header;

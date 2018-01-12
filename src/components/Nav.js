import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (  
        <div>
             <Link className="noDecor" to={props.linky}><h4>{props.tagz}</h4></Link>
        </div>)
}
 
export default Nav
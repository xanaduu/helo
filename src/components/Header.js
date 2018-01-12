import React from 'react'
import Nav from './Nav';
import './Home.css'




const Header = (props) => {
    return (
        <div>
            <div className="nav">
            <div>Helo</div>
            <Nav tagz="Home" linky="/home"/>
            <Nav tagz="search" linky="/search"/>
            <div>Dashboard</div>
            <div>Logout</div>
            </div>
        </div>
    )
}
 

export default Header;
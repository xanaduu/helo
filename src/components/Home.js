import React, { Component } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import AccountInfo from './AccountInfo'



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <AccountInfo/>
                <Link to="/profile"><button className="button">Edit Profile</button></Link>
                <Link to="/"><button className="button">LoginPage</button></Link>
            </div>
        )
    }
}



export default Home

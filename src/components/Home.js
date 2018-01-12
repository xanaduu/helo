import React, { Component } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'


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
                <Link to="/profile"><button className="button">Edit Profile</button></Link>
            </div>
        )
    }
}



export default Home

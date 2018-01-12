import React, { Component } from 'react'
import Header from './Header'
import Form from './Form'



class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }



    render() {
        return (
            <div>
                <Header/>
                <div>
                <Form/>
                </div>
            </div>
        )
    }
}


export default Profile

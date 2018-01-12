import React, { Component } from 'react'
import Header from './Header'
import Form from './Form'
import AccountInfo from './AccountInfo'



class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }



    render() {
        return (
            <div>
                <Header/>
                <div>
                <AccountInfo/>
                <Form/>
                </div>
            </div>
        )
    }
}


export default Profile

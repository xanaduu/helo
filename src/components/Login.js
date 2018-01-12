import React, { Component } from 'react'
import Button from './Button'
import './Home.css'
import logo from '../assests/logo.png'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="gradient">
                <div className="box">
                    <div className="boxyBox">
                    <image src={logo} alt="logo"/>
                    <h1>Helo</h1>
                    <Button>Login / Register</Button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login

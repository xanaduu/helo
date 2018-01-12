import React, { Component } from 'react'
import './Home.css'
import logo from '../assests/logo.png'
import Auth0Lock from 'auth0-lock';
import axios from 'axios';
import { login } from '../ducks/reducer';
import { connect } from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props)
        this.lock = null;
        this.login = this.login.bind(this);
  }
  componentDidMount() {
    this.lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);
    console.log('this.lock', this.lock);
    this.lock.on('authenticated', authResult => {
      this.lock.getUserInfo(authResult.accessToken, (error, user) => {
        axios.post('http://localhost:3003/login', { userId: user.sub }).then(response => {
          this.props.login(response.data.user);
          this.props.history.push('/home');
        })
      })
    })
  }

  login() {
    this.lock.show();
  }

    render() {
        return (
            <div className="gradient">
                <div className="box">
                    <div className="boxyBox">
                    <img src={logo} alt="logo"/>
                    <h1>Helo</h1>
                    <button onClick={this.login} className="button">Login / Register</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = {
    login: login,
  };
  
  export default connect(null, mapDispatchToProps)(Login);

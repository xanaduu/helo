import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { login } from '../ducks/reducer';

class AccountInfo extends Component {

    componentDidMount() {
      axios.get('http://localhost:3003/user-data').then(response => {
        if (response.data.user) {
          this.props.login(response.data.user);
        }
      });
    }
  
    render() {
      const { user } = this.props;
      return (
        <div>
          {user && <div>
            <div><strong>{user.name}</strong></div>
          </div>}
          {!user && <p>You must login! <Link to="/">Log in</Link></p>}
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
      user: state.user
    };
  };
  
  const mapDispatchToProps = {
    login: login,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
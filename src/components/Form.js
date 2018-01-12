import React, { Component } from 'react'
import axios from 'axios'


class Form extends Component {
    constructor() {
        super()
        this.state = {
            first: '',
            last: '',
        }
      this.updateProfile = this.updateProfile.bind(this)
      this.handleFirstName = this.handleFirstName.bind(this)
      this.handleLastName = this.handleLastName.bind(this)
    }
    updateProfile(){
        console.log('button working?')
        axios.post('http://localhost:3003/api/form/update', {
            first: this.state.first, 
            last: this.state.last, 
        })
         .then(res => {
            
        }).catch(err => console.error(err))
        }
    
    handleFirstName ( value ){
        console.log(value)
        this.setState({ first: value})
    }
    handleLastName( value ){
        console.log(value)
        this.setState({ last: value})
    }
  

    

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.updateProfile}>
                        <div className="layout">
                        <button className="button" onSubmit={this.updateProfile} type="submit">Update</button>
                            <button className="button" type="reset">Cancel</button>
                        </div>
                        <div className="layout">
                        <p>First Name</p>
                        <input 
                            className="inputs" 
                            type="text" 
                            value={this.state.value}
                            onChange={ (e) => this.handleFirstName(e.target.value)}/>
                            <p>Last Name</p>
                        <input 
                            className="inputs" 
                            type="text" 
                            value={this.state.value}
                            onChange={ (e) => this.handleLastName(e.target.value)}/>
                            </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default Form

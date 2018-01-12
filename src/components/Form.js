import React, { Component } from 'react'
import axios from 'axios'


class Form extends Component {
    constructor() {
        super()
        this.state = {
            first: '',
            last: '',
            data: []
        }
      this.updateProfile = this.updateProfile.bind(this)
      this.handleFirstName = this.handleFirstName.bind(this)
      this.handleLastName = this.handleLastName.bind(this)
    }

    componentDidMount() {
        return axios.get('http://localhost:3003/api/profile').then(res => {
            console.log(res.data)
            this.setState ({
                data: res.data
            })
        })
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
                        <div className="leftAlign">
                    {this.state.data.map((e) => {
                        return(
                            <div className="testing" key={e.id}>
                                <div>
                                    {e.first}
                                </div>
                                <div>
                                    {e.last}
                                </div>
                            </div>
                            )
                        })}
                    </div>
                        <button style={sizing} className="button" onSubmit={this.updateProfile} type="submit">Update</button>
                        <button style={sizing} className="button" type="reset">Cancel</button>
                        </div>
                        <div className="layout">
                        <p>First Name</p>
                            <input 
                                className="inputs" 
                                type="text" 
                                value={this.state.value}
                                onChange={ (e) => this.handleFirstName(e.target.value)}
                                placeholder={this.state.first}/>
                        <p>Last Name</p>
                            <input 
                                className="inputs" 
                                type="text" 
                                value={this.state.value}
                                onChange={ (e) => this.handleLastName(e.target.value)}
                                placeholder={this.state.last}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const sizing = {
    fontSize: '12pt'
}

export default Form

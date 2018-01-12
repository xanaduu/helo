import React, { Component } from 'react'
import './Home.css'
import axios from 'axios'


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            results: []
        }
    }

    search(e){
        e.preventDefault()
        const {searchTerm}=this.state
        
        axios.get(`http://localhost:3003/api/search/?q=${searchTerm}`).then(response=>{
            console.log(response)
                this.setState({
                    results: response.data,
                })
        }).catch(console.log)
    }

    handleSearch(value){
        console.log(value)
        this.setState({
            searchTerm: value
        })
    }


    render() {
        return (
            <div>
               <select>
                    <option value="FirstName">FirstName</option>
                    <option value="LastName">LastName</option>
                </select>
                <input onChange={(e) => {this.handleSearch(e.target.value)}}/>
                <button onClick={(e)=> {this.search(e)}}>Search</button>
                <button>Reset</button>
                <div>
                {this.state.results.map((friend) => {
                        return(
                            <div key={friend.id}>
                                <div>
                                    {this.state.results}
                                    {friend.name}
                                </div>
                            </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}



export default Search

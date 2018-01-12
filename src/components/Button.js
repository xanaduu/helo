import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Button.css'


class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Link to="/home"><button className={this.props.css} >{this.props.children}</button></Link>
            </div>
        )
    }
}



export default Button

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Login extends Component {
    render() {
        return (
            <div>
                <p>login</p>
                <Link to="/home">去主页</Link>
            </div>
        )
    }
}

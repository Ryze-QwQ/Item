import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <p>home</p>
                <a href={`/login`}>去登录</a>
            </div>
        )
    }
}
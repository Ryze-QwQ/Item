import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import teamwork from '@/assets/teamwork2.jpg';
import { Input, Button } from 'antd';
import './login.scss';

export class Login extends Component {
    className = "login";

    render() {
        return (
            <div className={this.className}>
                <div className={this.className + '-form'}>
                    <img src={teamwork} alt="teamwork" className={this.className + '-form-pic'} />
                    <div className={this.className + '-form-input'}>
                        <p>LOGIN</p>
                        <Input type="text" />
                        <Input type="password" />
                        <Link to="/home"><Button type="primary">login</Button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

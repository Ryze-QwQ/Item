import React, { Component } from 'react';
import './fix.scss';

export default class Fix extends Component {
    className = 'fix';
    render() {
        return (
            <div className={this.className + ' icon'}>
                <div className={this.className + '-circular'}></div>
            </div>
        )
    }
}

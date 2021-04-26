import React, { Component } from 'react';
import './feature.scss';

export default class Feature extends Component {
    className = 'feature';
    render() {
        return (
            <div className={this.className}>
                <div className={this.className + '-circular'}></div>
            </div>
        )
    }
}

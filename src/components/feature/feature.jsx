import React, { Component } from 'react';
import './feature.scss';

export default class Feature extends Component {
    className = 'feature';

    render() {
        return (
            <div className={this.className + ' icon'}>
                <div className={this.className + '-x'}></div>
                <div className={this.className + '-y'}></div>
            </div>
        )
    }
}

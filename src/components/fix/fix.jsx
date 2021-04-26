import React, { Component } from 'react';
import './fix.scss';

export default class Fix extends Component {
    className = 'fix';

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className={this.className}>
                <div className={this.className + '-x'}></div>
                <div className={this.className + '-y'}></div>
            </div>
        )
    }
}

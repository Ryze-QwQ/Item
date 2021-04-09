import React, { Component } from 'react'
import { observer } from 'mobx-react';
import Draggable from 'react-draggable';
import './dashboard.scss';

@observer
class Dashboard extends Component {
    className = "dashboard";

    render() {
        return (
            <div className={this.className}>
                <div className={this.className + '-lane'}>
                    <p>待处理</p>
                    <div className={this.className + '-container'}>
                        <Draggable>
                            <div className={this.className + '-item'}></div>
                        </Draggable>
                        <Draggable>
                            <div className={this.className + '-item'}></div>
                        </Draggable>
                        <Draggable>
                            <div className={this.className + '-item'}></div>
                        </Draggable>
                        <Draggable>
                            <div className={this.className + '-item'}></div>
                        </Draggable>
                    </div>
                </div>
                <div className={this.className + '-lane'}>
                    <p>进行中</p>
                    <div className={this.className + '-item'}></div>
                </div>
                <div className={this.className + '-lane'}>
                    <p>阻塞中</p>
                    <div className={this.className + '-item'}></div>
                </div>
                <div className={this.className + '-lane'}>
                    <p>已完成</p>
                </div>
            </div>
        )
    }
}

export default Dashboard;

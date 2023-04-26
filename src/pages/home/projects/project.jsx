import React, { Component } from 'react';
import { Collapse } from 'antd';
import ProjectStore from './project.store';
import { observer } from 'mobx-react';
import './project.scss';
import { Fix, Feature, Grade } from '@/components';

@observer
class Project extends Component {
    className = "project";

    constructor(props) {
        super(props);
        this.store = new ProjectStore();
    }
    renderItemStatus = (status) => {
        const statusTextArr = ['', '待处理', '进行中', '阻塞中', '已完成'];
        const statusBackColor = ['', 'pending', 'processing', 'blocking', 'finished'];
        return (
            <div className={this.className + '-status ' + statusBackColor[status]}>
                {statusTextArr[status]}
            </div>
        )
    }
    renderItemHeader = (item) => {
        return (
            <div className={this.className + '-item'}>
                <span className={this.className + '-item-name'}>{item.name}</span>
                <span>开发负责人: </span>
                <span className={this.className + '-item-owner'}>{item.featureOwner}</span>
                <span>描述: </span>
                <span>{item.description}</span>
            </div>
        )
    }

    render() {
        const { data } = this.store;
        const { inProcessItems, finishItems } = data;
        return (
            <div className={this.className}>
                <div>
                    <h3>进行中</h3>
                    <Collapse>
                        {
                            inProcessItems.map(item => {
                                return (
                                    <Collapse.Panel header={this.renderItemHeader(item)} key={item.id}>
                                        {item.tasks.map(task => {
                                            return (
                                                <div key={task.id} className={this.className + '-task'}>
                                                    {
                                                        task.type === 1 ? <Feature /> : <Fix />
                                                    }
                                                    <span className={this.className + '-task-title'}> {task.title}</span>
                                                    <Grade level={task.level} style={{ marginRight: '8px' }} />
                                                    <span>{this.renderItemStatus(task.status)}</span>
                                                    {/* {
                                                        task.status !== 1 ? <span>{task.startTime}</span> : []
                                                    } */}
                                                </div>
                                            )
                                        })}
                                    </Collapse.Panel>
                                )
                            })
                        }
                    </Collapse>
                </div>
                <div>
                    <h3>已完成</h3>
                    <Collapse>
                        {
                            finishItems.map(item => {
                                return (
                                    <Collapse.Panel header={item.name} key={item.id}>
                                        {item.tasks.map(task => {
                                            return (
                                                <div key={task.id} className={this.className + '-task'}>
                                                    {
                                                        task.type === 1 ? <Feature /> : <Fix />
                                                    }
                                                    <span className={this.className + '-task-title'}> {task.title}</span>
                                                    <Grade level={task.level} style={{ marginRight: '8px' }} />
                                                    <span>{this.renderItemStatus(task.status)}</span>
                                                    {/* {
                                                        task.status !== 1 ? <span>{task.startTime}</span> : []
                                                    } */}
                                                </div>
                                            )
                                        })}
                                    </Collapse.Panel>
                                )
                            })
                        }
                    </Collapse>
                </div>
            </div >
        )
    }
}

export default Project;

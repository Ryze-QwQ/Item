import React, { Component } from 'react'
import { observer } from 'mobx-react';
import Draggable from 'react-draggable';
import './dashboard.scss';
import { DashboardStore } from './dashboard.store';
import head from '@/assets/head.jpg';
import { CloseOutlined, PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons/lib';
import { Modal, Input, Select, InputNumber } from 'antd';
import { Fix, Feature, Grade } from '@/components';

@observer
class Dashboard extends Component {
    className = "dashboard";

    constructor(props) {
        super(props);
        this.store = new DashboardStore();
        this.state = {
            isPending: false,
            isInProcess: false,
            isBlocked: false,
            isdragging: false,
            addTaskModalVisible: false
        }
    }
    handlePendingStart = () => {
        this.setState({
            isPending: true,
            isdragging: true
        })
    }
    handlePendingStop = (item) => {
        return (block) => {
            const clientX = window.innerWidth;
            const blockX = (clientX - 160 - 16 * 2 - 12 * 2 - 8 * 8 - 4 * 8) / 4;
            const leftBordX = block.clientX - block.offsetX;
            if (leftBordX > (160 + 16 + 12 + (8 * 2 + blockX) * 1 - blockX / 10) && leftBordX < (160 + 16 + 12 + (8 * 2 + blockX) * 2 - blockX / 10 * 6)) {
                this.store.appendInProcess(item);
                this.store.removePendingItem(item.id);
            } else if (leftBordX > (160 + 16 + 12 + (8 * 2 + blockX) * 3 - blockX / 10)) {
                this.store.appendFinished(item);
                this.store.removePendingItem(item.id);
            }
            this.setState({
                isPending: false,
                isdragging: false
            })
        }
    }
    handleInProcessStart = () => {
        this.setState({
            isInProcess: true,
            isdragging: true
        })
    }
    handleInProcessStop = (item) => {
        return (block) => {
            const clientX = window.innerWidth;
            const blockX = (clientX - 160 - 16 * 2 - 12 * 2 - 8 * 8 - 4 * 8) / 4;
            const leftBordX = block.clientX - block.offsetX;
            if (leftBordX > (160 + 16 + 12 + (8 * 2 + blockX) * 2 - blockX / 10) && leftBordX < (160 + 16 + 12 + (8 * 2 + blockX) * 3 - blockX / 10 * 6)) {
                this.store.appendInBlocked(item);
                this.store.removeInProcess(item.id);
            } else if (leftBordX > (160 + 16 + 12 + (8 * 2 + blockX) * 3 - blockX / 10)) {
                this.store.appendFinished(item);
                this.store.removeInProcess(item.id);
            }
            this.setState({
                isInProcess: false,
                isdragging: false
            })
        }
    }
    handleInBlockedStart = () => {
        this.setState({
            isBlocked: true,
            isdragging: true
        })
    }
    handleInBlockedStop = (item) => {
        return (block) => {
            const clientX = window.innerWidth;
            const blockX = (clientX - 160 - 16 * 2 - 12 * 2 - 8 * 8 - 4 * 8) / 4;
            const leftBordX = block.clientX - block.offsetX;
            if (leftBordX > (160 + 16 + 12 + (8 * 2 + blockX) * 1 - blockX / 10) && leftBordX < (160 + 16 + 12 + (8 * 2 + blockX) * 2 - blockX / 10 * 6)) {
                this.store.appendInProcess(item);
                this.store.removeBlocked(item.id);
            } else if (leftBordX > (160 + 16 + 12 + (8 * 2 + blockX) * 3 - blockX / 10)) {
                this.store.appendFinished(item);
                this.store.removeBlocked(item.id);
            }
            this.setState({
                isBlocked: false,
                isdragging: false
            })
        }
    }
    handleDeleteTask = () => {
        Modal.confirm({
            icon: <ExclamationCircleOutlined />,
            content: <p>确定删除任务xxx吗？</p>,
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    handleAddTask = () => {
        this.setState({
            addTaskModalVisible: true
        })
    }
    handleAddTaskOk = () => {
        this.setState({
            addTaskModalVisible: false
        })
        this.store.createTask()
    }
    handleAddTaskCancel = () => {
        this.setState({
            addTaskModalVisible: false
        })
        this.store.clearFormData();
    }
    handleOpenDetail = () => {
        alert("双击了")
    }

    render() {
        const { state } = this.store;
        const { isPending, isInProcess, isBlocked, isdragging, addTaskModalVisible } = this.state;
        const { pendingTask, inProcessTask, blockedTask, finishedTask, allProjects, allUserName, formData } = state;
        return (
            <div className={this.className}>
                <div className={this.className + '-lane'}>
                    <p>待处理</p>
                    <div className={`${this.className}-container ${isdragging ? ' dragging' : ''}`}>
                        {
                            pendingTask.map((item) => {
                                return (
                                    <div onDoubleClick={this.handleOpenDetail} key={item.key}>
                                        <Draggable
                                            handle=".dragger"
                                            position={{ x: 0, y: 0 }}
                                            onStart={this.handlePendingStart}
                                            onStop={this.handlePendingStop(item)}
                                        >
                                            <div className={this.className + '-item dragger'}>
                                                <div className={this.className + '-item-icon'}>
                                                    {
                                                        item.type === 1 ? <Feature /> : <Fix />
                                                    }
                                                    <Grade level={item.level} />
                                                </div>
                                                <div className={this.className + '-item-otherInfo'}>
                                                    <div className={this.className + '-item-title'}>
                                                        <span className={this.className + '-item-title-text'}>{item.title}</span>
                                                        <CloseOutlined className={this.className + '-item-close'} onClick={this.handleDeleteTask} />
                                                    </div>
                                                    <div className={this.className + '-item-briefInfo'}>
                                                        <span className={this.className + '-item-briefInfo-name'}>xxx项目2.0.0</span>
                                                        <img src={head} alt="头像" className={this.className + '-item-briefInfo-headImg'} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Draggable>
                                    </div>
                                )
                            })
                        }
                        <div className={this.className + '-addTask'} onClick={this.handleAddTask}>
                            <PlusOutlined className={this.className + '-addTask-icon'} />
                        </div>
                    </div>
                </div>
                <div className={`${this.className}-lane ${isPending || isBlocked ? 'canBeAppend' : null}`}>
                    <p>进行中</p>
                    <div className={`${this.className}-container ${isdragging ? ' dragging' : ''}`}>
                        {
                            inProcessTask.map(item => {
                                return (
                                    <Draggable
                                        key={item.key}
                                        position={{ x: 0, y: 0 }}
                                        onStart={this.handleInProcessStart}
                                        onStop={this.handleInProcessStop(item)}
                                    >
                                        <div className={this.className + '-item'}>
                                            <div className={this.className + '-item-icon'}>
                                                {
                                                    item.type === 1 ? <Feature /> : <Fix />
                                                }
                                                <Grade level={item.level} />
                                            </div>
                                            <div className={this.className + '-item-otherInfo'}>
                                                <div className={this.className + '-item-title'}>
                                                    <span className={this.className + '-item-title-text'}>{item.title}</span>
                                                    <CloseOutlined className={this.className + '-item-close'} onClick={this.handleDeleteTask} />
                                                </div>
                                                <div className={this.className + '-item-briefInfo'}>
                                                    <span className={this.className + '-item-briefInfo-name'}>xxx项目2.0.0</span>
                                                    <img src={head} alt="头像" className={this.className + '-item-briefInfo-headImg'} />
                                                </div>
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={`${this.className}-lane ${isInProcess ? 'canBeAppend' : null}`}>
                    <p>阻塞中</p>
                    <div className={`${this.className}-container ${isdragging ? ' dragging' : ''}`}>
                        {
                            blockedTask.map(item => {
                                return (
                                    <Draggable
                                        key={item.key}
                                        position={{ x: 0, y: 0 }}
                                        onStart={this.handleInBlockedStart}
                                        onStop={this.handleInBlockedStop(item)}
                                    >
                                        <div className={this.className + '-item'}>
                                            <div className={this.className + '-item-icon'}>
                                                {
                                                    item.type === 1 ? <Feature /> : <Fix />
                                                }
                                                <Grade level={item.level} />
                                            </div>
                                            <div className={this.className + '-item-otherInfo'}>
                                                <div className={this.className + '-item-title'}>
                                                    <span className={this.className + '-item-title-text'}>{item.title}</span>
                                                    <CloseOutlined className={this.className + '-item-close'} onClick={this.handleDeleteTask} />
                                                </div>
                                                <div className={this.className + '-item-briefInfo'}>
                                                    <span className={this.className + '-item-briefInfo-name'}>xxx项目2.0.0</span>
                                                    <img src={head} alt="头像" className={this.className + '-item-briefInfo-headImg'} />
                                                </div>
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={`${this.className}-lane ${isPending || isInProcess || isBlocked ? 'canBeAppend' : null}`}>
                    <p>已完成</p>
                    <div className={this.className + '-container'}>
                        {
                            finishedTask.map(item => {
                                return (
                                    <Draggable
                                        key={item.key}
                                        position={{ x: 0, y: 0 }}
                                        handle=".handle"
                                    >
                                        <div className={this.className + '-item'}>
                                            <div className={this.className + '-item-icon'}>
                                                {
                                                    item.type === 1 ? <Feature /> : <Fix />
                                                }
                                                <Grade level={item.level} />
                                            </div>
                                            <div className={this.className + '-item-otherInfo'}>
                                                <div className={this.className + '-item-title'}>
                                                    <span className={this.className + '-item-title-text'}>{item.title}</span>
                                                    <CloseOutlined className={this.className + '-item-close'} onClick={this.handleDeleteTask} />
                                                </div>
                                                <div className={this.className + '-item-briefInfo'}>
                                                    <span className={this.className + '-item-briefInfo-name'}>xxx项目2.0.0</span>
                                                    <img src={head} alt="头像" className={this.className + '-item-briefInfo-headImg'} />
                                                </div>
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            })
                        }
                    </div>
                </div>
                <Modal title="创建任务" visible={addTaskModalVisible} onOk={this.handleAddTaskOk} onCancel={this.handleAddTaskCancel} >
                    <div className={this.className + '-form'}>
                        <div className={this.className + '-form-item'}>
                            <span className={this.className + '-form-key'}>任务名*</span>
                            <Input style={{ width: 200 }} allowClear={true} maxLength={12} value={formData.title} onChange={(e) => this.store.handleInputChange(e, 'title')} />
                        </div>
                        <div className={this.className + '-form-item'}>
                            <span className={this.className + '-form-key'}>所属项目*</span>
                            <Select defaultValue="请选择" style={{ width: 200 }} onSelect={this.store.handleChange('projectId')}>
                                {
                                    allProjects.map(item => {
                                        return (
                                            <Select.Option value={item.projectId} key={item.id}>
                                                {item.name}
                                            </Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </div>
                        <div className={this.className + '-form-item'}>
                            <span className={this.className + '-form-key'}>任务类型*</span>
                            <Select defaultValue="请选择" style={{ width: 200 }} onSelect={this.store.handleChange('type')}>
                                <Select.Option value={1}>
                                    <div className={this.className + '-form-option'}>
                                        <Feature />
                                        <span>业务开发</span>
                                    </div>
                                </Select.Option>
                                <Select.Option value={2} >
                                    <div className={this.className + '-form-option'}>
                                        <Fix />
                                        <span>Bug处理</span>
                                    </div>
                                </Select.Option>
                            </Select>
                        </div>
                        <div className={this.className + '-form-item'}>
                            <span className={this.className + '-form-key'}>优先级*</span>
                            <Select defaultValue="请选择" style={{ width: 200 }} onSelect={this.store.handleChange('level')}>
                                <Select.Option value={1}>
                                    <div className={this.className + '-form-option'}>
                                        <Grade level={1} />
                                        <span>紧急</span>
                                    </div>
                                </Select.Option>
                                <Select.Option value={2}>
                                    <div className={this.className + '-form-option'}>
                                        <Grade level={2} />
                                        <span>重要</span>
                                    </div>
                                </Select.Option>
                                <Select.Option value={3}>
                                    <div className={this.className + '-form-option'}>
                                        <Grade level={3} />
                                        <span>常规</span>
                                    </div>
                                </Select.Option>
                            </Select>
                        </div>
                        <div className={this.className + '-form-item'}>
                            <span className={this.className + '-form-key'}>经办人</span>
                            <Select defaultValue="请选择" style={{ width: 200 }} onSelect={this.store.handleChange('owner')}>
                                {
                                    allUserName.map(item => {
                                        return (
                                            <Select.Option value={item.username} key={item.id} >
                                                <div className={this.className + '-form-option'}>
                                                    <img src={item.photo} alt="" className={this.className + '-form-headImg'} />
                                                    <span>{item.username}</span>
                                                </div>
                                            </Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </div>
                        <div className={this.className + '-form-item'}>
                            <span className={this.className + '-form-key'}>计划使用时长</span>
                            <InputNumber style={{ width: 100, marginRight: '8px' }} defaultValue={3} onChange={this.store.handleChange('spendDay')} />
                            <span>天</span>
                        </div>
                        <div className={this.className + '-form-item'}>
                            <span className={this.className + '-form-key'}>描述</span>
                            <Input.TextArea placeholder="任务简述" maxLength={255} />
                        </div>
                    </div>
                </Modal>
            </div >
        )
    }
}

export default Dashboard;

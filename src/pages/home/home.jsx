import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Menu } from 'antd';
import {
    ContainerOutlined,
    DownOutlined,
    BellOutlined,
    SettingOutlined,
    PoweroffOutlined
} from '@ant-design/icons/lib';
import { HomeStore } from './home.store';
import './home.scss';
import head from '../../assets/head.jpg';

@observer
class Home extends Component {
    className = 'home';

    constructor() {
        super();
        this.store = new HomeStore();
    }

    render() {
        return (
            <div className={this.className}>
                <div className={this.className + '-leftMenu'} >
                    <div className={this.className + '-leftMenu-head'}>
                        <img src={head} alt="头像" className={this.className + '-leftMenu-head-img'} />
                        <div className={this.className + '-leftMenu-head-info'} >
                            <div className={this.className + '-leftMenu-head-name'}>Admin</div>
                            <DownOutlined className={this.className + '-leftMenu-head-icon'} />
                        </div>
                    </div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="vertical"
                        theme="dark"
                        inlineCollapsed={false}
                    >
                        <Menu.Item key="1" icon={<ContainerOutlined />}>
                            任务清单
                        </Menu.Item>
                        <Menu.Item key="2" icon={<ContainerOutlined />}>
                            团队任务
                         </Menu.Item>
                        <Menu.Item key="3" icon={<ContainerOutlined />}>
                            数据统计
                         </Menu.Item>
                        <Menu.Item key="4" icon={<ContainerOutlined />}>
                            个人中心
                        </Menu.Item>
                    </Menu>
                </div>
                <div className={this.className + '-topBar'}>
                    <div className={this.className + '-topBar-title'}>
                        我的任务
                    </div>
                    <div className={this.className + '-topBar-operation'}>
                        <BellOutlined className={this.className + '-topBar-icon'} />
                        <SettingOutlined className={this.className + '-topBar-icon'} />
                        <PoweroffOutlined className={this.className + '-topBar-icon'} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
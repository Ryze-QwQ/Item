import React, { Component } from 'react'
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ContainerOutlined,
} from '@ant-design/icons/lib';

export class Sidebar extends Component {

    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div>
                {/* <p>home</p>
                <a href={`/login`}>去登录</a> */}
                <div>
                    <Button type="primary" onClick={this.toggleCollapsed}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="vertical"
                        theme="light"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1" icon={<ContainerOutlined />}>
                            任务清单
                        </Menu.Item>
                        <Menu.Item key="2" icon={<ContainerOutlined />}>
                            团队任务
                         </Menu.Item>
                        <Menu.Item key="3" icon={<ContainerOutlined />}>
                            个人中心
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        )
    }
}

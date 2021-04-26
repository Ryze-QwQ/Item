import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Menu } from 'antd';
import {
    ContainerOutlined,
    BellOutlined,
    SettingOutlined,
    PoweroffOutlined
} from '@ant-design/icons/lib';
import { HomeStore } from './home.store';
import './home.scss';
import logo from '@/assets/logo.svg';
import { Route, Link, HashRouter as Router, Switch } from 'react-router-dom';
import { routes } from './home.route';

@observer
class Home extends Component {
    className = 'home';

    constructor(props) {
        super(props);
        this.store = new HomeStore();
    }
    handleSelectNav = (item) => {
        this.store.getCurrentTitle(item.key);
    }
    render() {
        const { navTitles, state } = this.store;
        const { currentTitle } = state;
        return (
            <div className={this.className}>
                <div className={this.className + '-leftMenu'} >
                    <div className={this.className + '-leftMenu-head'}>
                        <img src={logo} alt="logo" className={this.className + '-leftMenu-head-img'} />
                        <div className={this.className + '-leftMenu-head-name'}>Team Work</div>
                    </div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="vertical"
                        theme="dark"
                        onClick={this.handleSelectNav}
                    >
                        <Menu.Item key={navTitles[0]} icon={<ContainerOutlined />}>
                            <Link to="/home">{navTitles[0]}</Link>
                        </Menu.Item>
                        <Menu.Item key={navTitles[1]} icon={<ContainerOutlined />}>
                            <Link to="/home/dashboard">{navTitles[1]}</Link>
                        </Menu.Item>
                        <Menu.Item key={navTitles[2]} icon={<ContainerOutlined />}>
                            <Link to="/home/project">{navTitles[2]}</Link>
                        </Menu.Item>
                        <Menu.Item key={navTitles[3]} icon={<ContainerOutlined />}>
                            <Link to="/home/total">{navTitles[3]}</Link>
                        </Menu.Item>
                        <Menu.Item key={navTitles[4]} icon={<ContainerOutlined />}>
                            <Link to="/home/person">{navTitles[4]}</Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className={this.className + '-rightPart'} >
                    <div className={this.className + '-topBar'}>
                        <div className={this.className + '-topBar-title'}>
                            {currentTitle}
                        </div>
                        <div className={this.className + '-topBar-operation'}>
                            <BellOutlined className={this.className + '-topBar-icon'} />
                            <SettingOutlined className={this.className + '-topBar-icon'} />
                            <Link to="/" ><PoweroffOutlined className={this.className + '-topBar-icon'} /></Link>
                        </div>
                    </div>
                    <div className={this.className + '-content'}>
                        <Router>
                            <Switch>
                                {
                                    routes.map(router => {
                                        return <Route
                                            key={router.path}
                                            path={router.path}
                                            component={router.component}
                                            exact={router.exact}
                                        />
                                    })
                                }
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
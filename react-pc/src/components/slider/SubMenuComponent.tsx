import React, { Fragment, useState, useEffect } from 'react';
import './SubMenuComponent.scss';
import { RouterList } from '../../router';
import { Menu } from 'antd';
import { UserOutlined, PieChartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

const { SubMenu } = Menu;

export default function SubMenuComponent(props: any) {

    const [linkName, setLinkName] = useState(window.location.pathname);

    useEffect(() => {
        setLinkName(window.location.pathname)
    }, []);

    const defaultChildren = (item: any) => {
        return (
            <SubMenu
                key={item.name}
                title={
                    <span>
                        <UserOutlined />
                        {item.name}
                    </span>
                }
            >
                {item.children.map((item: any, index: number) => (
                    defaultMenu(item)
                ))}
            </SubMenu>
        )
    }
    const defaultMenu = (item: any) => {
        return (
            // className={window.location.pathname === item.link? 'ant-menu-item-selected' : ''}
            <Menu.Item key={'/' + item.link}>
                <NavLink to={'/' + item.link} key={item.link}>
                    <PieChartOutlined />
                    <span>{item.name}</span>
                </NavLink>
            </Menu.Item>
        )
    }
    return (
        <Fragment>
            <Scrollbars>
                <div style={{ minHeight: '0px' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[linkName]}
                        defaultOpenKeys={[linkName.split('/')[1]]}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {RouterList.linkArr.map((item, index) => (
                            item && item.children && item.children.length ?
                                defaultChildren(item) :
                                defaultMenu(item)
                        ))}
                    </Menu>
                </div>
            </Scrollbars>
        </Fragment>
    )
}
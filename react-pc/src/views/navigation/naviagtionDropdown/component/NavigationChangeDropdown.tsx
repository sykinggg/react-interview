import React from 'react';
import { Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

export function NavigationChangeDropdown() {

    const menu = () => {
        return (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        )
    }

    return (
        <Card id="components-dropdown-demo-base" title="点击触发">
            <Dropdown overlay={menu} trigger={['click']}>
                <a href=" " className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Click me <DownOutlined />
                </a>
            </Dropdown>
        </Card>
    )
}
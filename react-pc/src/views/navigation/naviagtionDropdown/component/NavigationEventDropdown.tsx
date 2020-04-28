import React from "react";
import { Card, Dropdown, Menu, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ClickParam } from "antd/lib/menu";

export function NavigationEventDropdown() {
    const onClick = (key: ClickParam) => {
        message.info(`Click on item ${key}`);
    }
    const menu = () => {
        return (
            <Menu onClick={onClick}>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd memu item</Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        )
    }
    return (
        <Card id="components-dropdown-demo-event" title="触发事件">
            <Dropdown overlay={menu}>
                <a href=' ' className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Hover me, Click menu item <DownOutlined />
                </a>
            </Dropdown>
        </Card>
    )
}
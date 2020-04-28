import React from "react";
import { Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

export function NavigationDisabledDropdown() {

    const menu = () => {
        return (
            <Menu>
                <Menu.Item key="0">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        1st menu item
                    </a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        2nd menu item
                    </a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" disabled>
                    3rd menu item（disabled）
                </Menu.Item>
            </Menu>
        )
    }

    return (
        <Card id="components-dropdown-demo-disabled" title="移入触发">
            <Dropdown overlay={menu}>
                <a href=' ' className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Hover me <DownOutlined />
                </a>
            </Dropdown>
        </Card>
    )
}
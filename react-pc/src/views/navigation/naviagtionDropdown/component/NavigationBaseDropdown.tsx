import React from "react";
import { Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

export function NavigationBaseDropdown() {

    const menu = () => {
        return (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        1st menu item
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        2nd menu item
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        3rd menu item
                    </a>
                </Menu.Item>
            </Menu>
        )
    }

    return (
        <Card id="components-dropdown-demo-base" title="下拉框 基本用法">
            <Dropdown overlay={menu}>
                <a href={' '} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Hover me <DownOutlined />
                </a>
            </Dropdown>
        </Card>
    )
}
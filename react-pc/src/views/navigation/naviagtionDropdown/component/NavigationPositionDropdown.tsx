import React from "react";
import { Card, Dropdown, Button, Menu } from "antd";

export function NavigationPositionDropdown() {

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
        <Card id="components-dropdown-demo-position" title="弹出位置">
            <Dropdown overlay={menu} placement="bottomLeft">
                <Button>bottomLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomCenter">
                <Button>bottomCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomRight">
                <Button>bottomRight</Button>
            </Dropdown>
            <br />
            <Dropdown overlay={menu} placement="topLeft">
                <Button>topLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topCenter">
                <Button>topCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topRight">
                <Button>topRight</Button>
            </Dropdown>
        </Card>
    )
}
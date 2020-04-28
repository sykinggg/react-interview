import React from "react";
import { Card, Dropdown, Menu } from "antd";

export function NavigationRightDropdown() {

    const menu = (
        <Menu>
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd menu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    )
    return (
        <Card id="components-dropdown-demo-disabled" title="右键触发">
            <Dropdown overlay={menu} trigger={['contextMenu']}>
                <div
                    className="site-dropdown-context-menu"
                    style={{
                        textAlign: 'center',
                        height: 200,
                        lineHeight: '200px',
                    }}
                >
                    Right Click on here
                </div>
            </Dropdown>
        </Card>
    )
}
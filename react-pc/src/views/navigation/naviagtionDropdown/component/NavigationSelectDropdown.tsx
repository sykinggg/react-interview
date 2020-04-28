import React from "react";
import { Card, Dropdown, Button, Menu, message } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

export function NavigationSelectDropdown() {

    function handleButtonClick(e: any) {
        message.info('click on left button');
        console.log('click left button', e);
    }

    function handleMenuClick(e: any) {
        message.info('click on menu item');
        console.log('click', e);
    }
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                <UserOutlined />
                1st menu item
            </Menu.Item>
            <Menu.Item key="2">
                <UserOutlined />
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3">
                <UserOutlined />
                3rd item
            </Menu.Item>
        </Menu>
    )
    return (
        <Card id="components-dropdown-demo-select" title="带下拉框的按钮">
            <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                Dropdown
                </Dropdown.Button>
            <Dropdown.Button overlay={menu} icon={<UserOutlined />}>
                Dropdown
                </Dropdown.Button>
            <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
                Dropdown
                </Dropdown.Button>
            {/* <Dropdown.Button
                overlay={menu}
                buttonsRender={([leftButton, rightButton]) => [
                    <Tooltip title="tooltip" key="leftButton">
                        {leftButton}
                    </Tooltip>,
                    rightButton,
                ]}
            >
                With Tooltip
            </Dropdown.Button> */}
            <Dropdown overlay={menu}>
                <Button>
                    Button <DownOutlined />
                </Button>
            </Dropdown>
        </Card>
    )
}
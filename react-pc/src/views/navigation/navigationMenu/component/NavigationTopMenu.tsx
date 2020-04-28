import React, { useState } from "react";
import { Card, Menu } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";

export function NavigationTopMenu() {

    const [current, setCurrent] = useState<string>('mail');

    function handleClick(e: { key: React.SetStateAction<string>; }) {
        setCurrent(e.key);
    }

    return (
        <Card id="components-menu-demo-top" title="顶部导航">
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail">
                    <MailOutlined />
                    Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled>
                    <AppstoreOutlined />
                    Navigation Two
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <SettingOutlined />
                            Navigation Three - Submenu
                        </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>
        </Card>
    )
}
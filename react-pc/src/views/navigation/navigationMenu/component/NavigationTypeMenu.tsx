import React, { useState } from "react";
import { Card, Switch, Menu } from "antd";
import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { MenuMode } from "antd/lib/menu";
import { MenuTheme } from "antd/lib/menu/MenuContext";

const { SubMenu } = Menu;

export function NavigationTypeMenu() {

    const [mode, setMode] = useState<MenuMode>('inline');

    const [theme, setTheme] = useState<MenuTheme>('light');

    function changeMode(value: any) {
        setMode(value ? 'vertical' : 'inline')
    }

    function changeTheme(value: any) {
        setTheme(value ? 'dark' : 'light')
    }

    return (
        <Card id="components-menu-demo-type" title="菜单类型">
            <div>
                <Switch onChange={changeMode} /> Change Mode
                <span className="ant-divider" style={{ margin: '0 1em' }} />
                <Switch onChange={changeTheme} /> Change Style
                <br />
                <br />
                <Menu
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={mode}
                    theme={theme}
                >
                    <Menu.Item key="1">
                        <MailOutlined />
                        Navigation One
                    </Menu.Item>
                    <Menu.Item key="2">
                        <CalendarOutlined />
                        Navigation Two
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <AppstoreOutlined />
                                <span>Navigation Three</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                        <SubMenu key="sub1-2" title="Submenu">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <SettingOutlined />
                                <span>Navigation Four</span>
                            </span>
                        }
                    >
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </Card>
    )
}
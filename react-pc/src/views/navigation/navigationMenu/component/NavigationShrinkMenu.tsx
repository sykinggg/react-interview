import React, { useState } from "react";
import { Card, Button, Menu } from "antd";
import { PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined, AppstoreOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;

export function NavigationShrinkMenu() {

    const [collapsed, setCollapsed] = useState<boolean>(false);

    function toggleCollapsed() {
        setCollapsed(!collapsed);
    }

    return (
        <Card id="components-menu-demo-shrink" title="菜单伸缩">
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                >
                    <Menu.Item key="1">
                        <PieChartOutlined />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <ContainerOutlined />
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <MailOutlined />
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <AppstoreOutlined />
                                <span>Navigation Two</span>
                            </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        </Card>
    )
}
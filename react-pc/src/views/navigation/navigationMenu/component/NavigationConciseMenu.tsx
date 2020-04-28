import React, { useState } from "react";
import { Card, Menu } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export function NavigationConciseMenu() {

    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    const [openKeys, setOpenKeys] = useState<string[]>(['sub1']);

    function onOpenChange(itemKey: any[]) {
        const latestOpenKey: string = itemKey.find((key: string) => openKeys.indexOf(key) === -1);

        if (rootSubmenuKeys.indexOf(latestOpenKey) + 1) {
            setOpenKeys(itemKey);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    return (
        <Card id="components-menu-demo-concise" title="简洁菜单">
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: 256 }}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <MailOutlined />
                            <span>Navigation One</span>
                        </span>
                    }
                >
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
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
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={
                        <span>
                            <SettingOutlined />
                            <span>Navigation Three</span>
                        </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        </Card>
    )
}

import React from 'react';
import { Card, Breadcrumb, Menu } from 'antd';

export function NavigationSelectBradcrumb() {

    const menu = () => {
        return (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        General
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        Layout
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        Navigation
                    </a>
                </Menu.Item>
            </Menu>
        )
    }

    return (
        <Card id="components-bradcrumb-demo-select" title="带下拉菜单的面包屑">
            <Breadcrumb>
                <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="http://www.alipay.com/">Component</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item overlay={menu}>
                    <a href="http://www.alipay.com/">General</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Button</Breadcrumb.Item>
            </Breadcrumb>,
        </Card>
    )
}
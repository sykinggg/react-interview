import React from 'react';
import { Card, Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

export function NavigationIconBradcrumb() {
    return (
        <Card id="components-bradcrumb-demo-icon" title="带有图标的">
            <Breadcrumb>
                <Breadcrumb.Item href="home">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="user">
                    <UserOutlined />
                    <span>Application List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
        </Card>
    )
}

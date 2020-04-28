import React, { useState } from 'react';
import { Card, Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export function LayoutCustomChangeStructure() {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    }
    return (
        <Card id="components-layoutStructure-demo-customChange" title="自定义触发器">
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <UserOutlined />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <VideoCameraOutlined />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <UploadOutlined />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Card>
    )
}

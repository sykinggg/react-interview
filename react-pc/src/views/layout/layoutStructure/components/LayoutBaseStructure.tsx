import React from 'react';
import { Card, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export function LayoutBaseStructure() {
    return (
        <Card id="components-layoutStructure-demo-base" title="基本结构">
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>

            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>

            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>

            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </Card>
    )
}

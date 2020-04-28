import React from 'react';
import { Card, Typography } from 'antd';
const { Title } = Typography;

export function TypographyTitleDemo(props: any) {
    return (
        <Card id="components-typography-demo-title" title="标题组件">
            <Title>h1. Ant Design</Title>
            <Title level={2}>h2. Ant Design</Title>
            <Title level={3}>h3. Ant Design</Title>
            <Title level={4}>h4. Ant Design</Title>
        </Card>
    )
}

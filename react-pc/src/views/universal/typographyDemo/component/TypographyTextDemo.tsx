import React from 'react';
import { Card, Typography } from 'antd';
const { Text } = Typography;

export function TypographyTextDemo(props: any) {
    return(
        <Card id="components-typography-demo-text" title="文本组件">
            <Text>Ant Design</Text>
            <br />
            <Text type="secondary">Ant Design</Text>
            <br />
            <Text type="warning">Ant Design</Text>
            <br />
            <Text type="danger">Ant Design</Text>
            <br />
            <Text disabled>Ant Design</Text>
            <br />
            <Text mark>Ant Design</Text>
            <br />
            <Text code>Ant Design</Text>
            <br />
            <Text underline>Ant Design</Text>
            <br />
            <Text delete>Ant Design</Text>
            <br />
            <Text strong>Ant Design</Text>
        </Card>
    )
}

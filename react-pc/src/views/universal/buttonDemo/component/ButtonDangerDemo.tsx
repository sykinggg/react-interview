import React from 'react';
import { Card, Button } from 'antd';

export function ButtonDangerDemo(props: any) {
    return (
        <Card id="components-button-demo-danger" title="警告按钮">
            <Button type="primary" danger>
                Primary
            </Button>
            <Button danger>Default</Button>
            <Button type="dashed" danger>
                link
            </Button>
            <Button type="link" danger>
                link
            </Button>
        </Card>
    )
}

import React from 'react';
import { Card, Button } from 'antd';

export function ButtonGhostDemo(props: any) {
    return (
        <Card id="components-button-demo-ghost" title="幽灵按钮">
            <Button type="primary" ghost>
                Primary
            </Button>
            <Button ghost>Default</Button>
            <Button type="dashed" ghost>
                link
            </Button>
            <Button type="link" ghost>
                link
            </Button>
        </Card>
    )
}

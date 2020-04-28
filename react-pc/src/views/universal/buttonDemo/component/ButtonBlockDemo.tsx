import React from 'react';
import { Card, Button } from 'antd';

export function ButtonBlockDemo(props: any) {
    return (
        <Card id="components-button-demo-block" title="Block 按钮">
            <Button type="primary" block>
                Primary
            </Button>
            <Button block>Default</Button>
            <Button type="dashed" block>
                Dashed
            </Button>
            <Button type="link" block>
                Link
            </Button>
        </Card>
    )
}

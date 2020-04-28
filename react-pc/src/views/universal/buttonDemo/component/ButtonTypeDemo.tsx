import React from 'react';
import { Card, Button } from 'antd';

export function ButtonTypeDemo(props: any) {
    return (
        <Card id="components-button-demo-type" title='按钮类型'>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="link">Link</Button>
        </Card>
    )
}

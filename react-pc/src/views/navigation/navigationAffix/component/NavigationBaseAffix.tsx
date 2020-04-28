import React, { useState } from 'react';
import { Card, Affix, Button } from 'antd';

export function NavigationBaseAffix() {
    const [top, setTop] = useState(10);
    const [bottom, setBottom] = useState(10);
    return (
        <Card id="components-affix-demo-base" title="图钉 基本用法">
            <Affix offsetTop={top}>
                <Button type="primary" onClick={() => setTop(top + 10)}>
                    Affix top
                </Button>
            </Affix>
            <br />
            <Affix offsetBottom={bottom}>
                <Button type="primary" onClick={() => setBottom(bottom + 10)}>
                    Affix bottom
                </Button>
            </Affix>
        </Card>
    )
}

import React from 'react';
import { Card, Affix, Button } from 'antd';

export function NavigationFixedAffix() {
    return (
        <Card id="components-affix-demo-fixed" title="固定状态改变的回调">
            <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
                <Button>120px to affix top</Button>
            </Affix>
        </Card>
    )
}
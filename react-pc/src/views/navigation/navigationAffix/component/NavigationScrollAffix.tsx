import React, { useState } from 'react';
import { Affix, Button, Card } from 'antd';

export function NavigationScrollAffix() {
    const [container] = useState(null);
    // const inputEl = useRef(null);
    return (
        <Card id="components-affix-demo-scroll" title="滚动容器">
            {/* <div className="scrollable-container" ref={inputEl}></div> */}
            <div className="scrollable-container">
                <div className="background">
                    <Affix target={() => container}>
                        <Button type="primary">Fixed at the top of container</Button>
                    </Affix>
                </div>
            </div>
        </Card>
    )
}

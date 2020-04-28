import React from 'react';
import { Card, Button } from 'antd';

export function ButtonEnableDemo(props: any) {
    return (
        <Card id="components-button-demo-enable" title="可用状态">
            <Button type="primary">Primary</Button>
            <Button type="primary" disabled>
                Primary(disabled)
            </Button>
            <br />
            <Button>Default</Button>
            <Button disabled>Default(disabled)</Button>
            <br />
            <Button type="dashed">Dashed</Button>
            <Button type="dashed" disabled>
                Dashed(disabled)
            </Button>
            <br />
            <Button type="link">Link</Button>
            <Button type="link" disabled>
                Link(disabled)
            </Button>
            <br />
            <Button type="link" danger>
                Danger Link
            </Button>
            <Button type="link" danger disabled>
                Danger Link(disabled)
            </Button>
            <br />
            <Button danger>Danger Default</Button>
            <Button danger disabled>
                Danger Default(disabled)
            </Button>
            <div className="site-button-ghost-wrapper">
                <Button ghost>Ghost</Button>
                <Button ghost disabled>
                    Ghost(disabled)
                </Button>
            </div>
        </Card>
    )
}

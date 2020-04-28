import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

export function ButtonLoadingDemo(props: any) {
    const [loading, setloading] = useState<boolean>(false);
    const [iconLoading, setIconLoading] = useState<boolean>(false);

    const enterLoading = () => {
        setloading(true);
    }

    const enterIconLoading = () => {
        setIconLoading(true);
    }

    return (
        <Card id="components-button-demo-enable" title="加载中">
            <Button type="primary" loading>
                Loading
            </Button>
            <Button type="primary" size="small" loading>
                Loading
            </Button>
            <br />
            <Button type="primary" loading={loading} onClick={enterLoading}>
                Click me!
            </Button>
            <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={iconLoading}
                onClick={enterIconLoading}
            >
                Click me!
            </Button>
        </Card>
    )
}

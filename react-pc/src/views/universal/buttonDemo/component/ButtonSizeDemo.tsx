import React, { useState } from 'react';
import { Card, Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { RadioChangeEvent } from 'antd/lib/radio';

export function ButtonSizeDemo(props: any) {
    const [size, setSize] = useState<"small" | "large" | undefined>('large');

    const handleSizeChange = (e: RadioChangeEvent) => {
        setSize(e.target.value);
    }

    return (
        <Card id="components-button-demo-size" title="按钮尺寸">
            <Radio.Group value={size} onChange={handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <Button type="primary" size={size}>
                Primary
            </Button>
            <Button size={size}>Default</Button>
            <Button type="dashed" size={size}>
                Dashed
            </Button>
            <br />
            <Button type="link" size={size}>
                Link
            </Button>
            <br />
            <Button type="primary" icon={<DownloadOutlined />} size={size} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />} size={size}>
                Download
            </Button>
        </Card>
    )
}

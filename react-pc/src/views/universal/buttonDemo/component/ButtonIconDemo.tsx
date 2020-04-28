import React from 'react';
import { Card, Tooltip, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export function ButtonIconDemo(props: any) {
    return (
        <Card id="components-button-demo-icon" title="图标按钮">
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="primary" shape="circle">
                A
            </Button>
            <Button type="primary" icon={<SearchOutlined />}>
                Search
            </Button>
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <br />
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Tooltip title="search">
                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />}>
                Search
            </Button>
        </Card>
    )
}

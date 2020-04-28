import React from 'react';
import { Card, Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ClickParam } from 'antd/lib/menu';

export function ButtonComplexDemo(props: any) {

    const handleMenuClick = (e: ClickParam) => {
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">1st item</Menu.Item>
            <Menu.Item key="2">2nd item</Menu.Item>
            <Menu.Item key="3">3rd item</Menu.Item>
        </Menu>
    )

    return (
        <Card id="components-button-demo-complex" title="多个按钮组合">
            <Card.Meta description="按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到 Dropdown.Button 中组合使用" />
            <Button type="primary">primary</Button>
            <Button>secondary</Button>
            <Dropdown overlay={menu}>
                <Button>
                    Actions <DownOutlined />
                </Button>
            </Dropdown>
        </Card>
    )
}

import React from 'react'
import { Card, Breadcrumb } from 'antd'

export function NavigationSeparatorBradcrumb() {
    return (
        <Card id="components-bradcrumb-demo-separator" title="自定义分隔符">
            <Breadcrumb separator=">">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>,
        </Card>
    )
}
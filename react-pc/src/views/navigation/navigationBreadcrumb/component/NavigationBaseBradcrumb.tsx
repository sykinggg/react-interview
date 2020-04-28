import React from 'react';
import { Card, Breadcrumb } from 'antd';

export function NavigationBaseBradcrumb() {
    return (
        <Card id="components-bradcrumb-demo-base" title="面包屑 基本用法">
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="Center">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="List">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        </Card>
    )
}

import React from 'react';
import { Card, Row, Col } from 'antd';

export function LayoutResponsiveGrid() {
    return (
        <Card id="components-grid-demo-responsive" title="响应式布局(类bootstrap)">
            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                    Col
                </Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                    Col
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                    Col
                </Col>
            </Row>
        </Card>
    )
}

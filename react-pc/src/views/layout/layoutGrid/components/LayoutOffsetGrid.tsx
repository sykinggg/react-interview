import React from 'react';
import { Card, Row, Col } from 'antd';

export function LayoutOffsetGrid() {
    return (
        <Card id="components-grid-demo-offset" title="列偏移">
            <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>
                    col-8
                </Col>
            </Row>
            <Row>
                <Col span={6} offset={6}>
                    col-6 col-offset-6
                </Col>
                <Col span={6} offset={6}>
                    col-6 col-offset-6
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    col-12 col-offset-6
                </Col>
            </Row>
        </Card>
    )
}

import React from 'react';
import { Card, Row, Col } from 'antd';

export function LayoutAttrResponsiveGrid() {
    return (
        <Card id="components-grid-demo-attrResponsive" title="其他属性响应式布局">
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    Col
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    Col
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    Col
                </Col>
            </Row>
        </Card>
    )
}

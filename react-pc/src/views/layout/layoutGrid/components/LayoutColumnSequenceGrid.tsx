import React from 'react';
import { Card, Row, Col } from 'antd';

export function LayoutColumnSequenceGrid() {
    return (
        <Card id="components-grid-demo-columnSequence" title="栅格排序">
            <Row>
                <Col span={18} push={6}>
                    col-18 col-push-6
                </Col>
                <Col span={6} pull={18}>
                    col-6 col-pull-18
                </Col>
            </Row>
        </Card>
    )
}

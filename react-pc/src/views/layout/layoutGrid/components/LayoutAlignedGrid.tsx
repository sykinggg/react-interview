import React from 'react';
import { Card, Divider, Row, Col } from 'antd';

export function LayoutAlignedGrid() {
    const DemoBox = (props: { value: any; children: React.ReactNode; }) => <p className={`height-${props.value}`}>{props.children}</p>;
    return (
        <Card id="components-grid-demo-aligned" title="对齐">
            <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                Align Top
            </Divider>
            <Row justify="center" align="top">
                <Col span={4}>
                    <DemoBox value={100}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={50}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={120}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={80}>col-4</DemoBox>
                </Col>
            </Row>

            <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                Align Middle
            </Divider>
            <Row justify="space-around" align="middle">
                <Col span={4}>
                    <DemoBox value={100}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={50}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={120}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={80}>col-4</DemoBox>
                </Col>
            </Row>

            <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                Align Bottom
            </Divider>
            <Row justify="space-between" align="bottom">
                <Col span={4}>
                    <DemoBox value={100}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={50}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={120}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={80}>col-4</DemoBox>
                </Col>
            </Row>
        </Card>
    )
}

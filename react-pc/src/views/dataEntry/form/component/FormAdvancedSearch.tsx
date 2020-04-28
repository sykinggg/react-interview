import React, { useState } from "react";
import { Card, Form, Row, Col, Button, Input } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

export function FormAdvancedSearch() {

    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();

    const getFields = () => {
        const count = expand ? 10 : 6;
        const children = [];
        for (let i = 0; i < count; i++) {
            children.push(
                <Col span={8} key={i}>
                    <Form.Item
                        name={`field-${i}`}
                        label={`Field ${i}`}
                        rules={[
                            {
                                required: true,
                                message: 'Input something!',
                            },
                        ]}
                    >
                        <Input placeholder="placeholder" />
                    </Form.Item>
                </Col>,
            );
        }
        return children;
    };

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Card id="components-form-demo-advancedSearch" title="表单 高级搜索">
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
            >
                <Row gutter={24}>{getFields()}</Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            Search
                        </Button>
                        <Button
                            style={{ margin: '0 8px' }}
                            onClick={() => {
                                form.resetFields();
                            }}
                        >
                            Clear
                    </Button>
                        <a
                            style={{ fontSize: 12 }}
                            onClick={() => {
                                setExpand(!expand);
                            }}
                            href=' '
                        >
                            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
                    </a>
                    </Col>
                </Row>
            </Form>
            <div className="search-result-list">Search Result List</div>
        </Card>
    )
}
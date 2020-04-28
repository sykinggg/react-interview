import React from "react";
import { Card, Form, Input, InputNumber, Button } from "antd";

export function FormNested() {

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    };

    const validateMessages = {
        // eslint-disable-next-line
        required: '${name} is required!',
        types: {
            // eslint-disable-next-line
            email: '${name} is not validate email!',
            // eslint-disable-next-line
            number: '${name} is not a validate number!',
        },
        number: {
            // eslint-disable-next-line
            range: '${name} must be between ${min} and ${max}',
        },
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Card id="components-form-demo-nested" title="表单 嵌套">
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['email']} label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name={['website']} label="Website">
                    <Input />
                </Form.Item>
                <Form.Item name={['introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
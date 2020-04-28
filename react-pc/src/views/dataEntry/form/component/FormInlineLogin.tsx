import React, { useState, useEffect } from "react";
import { Card, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export function FormInlineLogin() {

    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values: any) => {
        console.log('Finish:', values);
    };
    return (
        <Card id="components-form-demo-inlineLogin" title="表单 内联登录">
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item shouldUpdate={true}>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={
                                Boolean(!form.isFieldsTouched(true) ||
                                    form.getFieldsError().filter(({ errors }) => errors.length).length)
                            }
                        >
                            Log in
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </Card>
    )
}
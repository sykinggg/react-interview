import React, { useRef } from "react";
import { Card, Form, Input, Select, Button } from "antd";

const { Option } = Select;

export function FormRef() {

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };
    const tailLayout = {
        wrapperCol: { offset: 4, span: 20 },
    };

    const formRef: any = useRef();

    const onGenderChange = (value: string) => {
        formRef.current.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        formRef.current.resetFields();
    };

    const onFill = () => {
        formRef.current.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };

    return (
        <Card id="components-form-demo-ref" title="表单 ref调用">
            <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish}>
                <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) => {
                        return getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null;
                    }}
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                    <Button type="link" htmlType="button" onClick={onFill}>
                        Fill form
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
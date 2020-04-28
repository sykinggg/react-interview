import React, { useState, useEffect } from "react";
import { Card, Form, Input, Checkbox, Button } from "antd";

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

export function FormValidateDynamic() {

    const [form] = Form.useForm();
    const [checkNick, setCheckNick] = useState(false);

    useEffect(() => {
        form.validateFields(['nickname']);
    }, [checkNick, form]);

    const onCheckboxChange = (e: { target: { checked: React.SetStateAction<boolean>; }; }) => {
        setCheckNick(e.target.checked);
    };

    const onCheck = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Card id="components-form-demo-validateDynamic" title="表单 动态校验规则">
            <Form form={form} name="dynamic_rule">
                <Form.Item
                    {...formItemLayout}
                    name="username"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name',
                        },
                    ]}
                >
                    <Input placeholder="Please input your name" />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="nickname"
                    label="Nickname"
                    rules={[
                        {
                            required: checkNick,
                            message: 'Please input your nickname',
                        },
                    ]}
                >
                    <Input placeholder="Please input your nickname" />
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Checkbox checked={checkNick} onChange={onCheckboxChange}>
                        Nickname is required
                    </Checkbox>
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Button type="primary" onClick={onCheck}>
                        Check
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
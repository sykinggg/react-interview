import React, { useState } from "react";
import { Card, Form, Input } from "antd";

export function FormOutsideData() {

    const [fields, setFields] = useState<any>([{ name: ['username'], value: 'Ant Design' }]);

    const CustomizedForm = (props: any) => {
        const { onChange, fields } = props;
        return (
            <Form
                name="global_state"
                layout="inline"
                fields={fields}
                onFieldsChange={(changedFields, allFields) => {
                    onChange(allFields);
                }}
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true, message: 'Username is required!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        );
    };

    return (
        <Card id="components-form-demo-outsideData" title="表单 数据外部存储">
            <CustomizedForm
                fields={fields}
                onChange={(newFields: any) => {
                    setFields(newFields);
                }}
            />
            <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
        </Card>
    )
}
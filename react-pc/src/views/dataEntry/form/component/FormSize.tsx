import React, { useState } from "react";
import { Card, Form, Radio, Input, Select, TreeSelect, Cascader, DatePicker, InputNumber, Switch, Button } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";

export function FormSize() {

    const [componentSize, setComponentSize] = useState<SizeType>('small');

    const onFormLayoutChange = (e: any) => {
        setComponentSize(e.size);
    }

    return (
        <Card id="components-form-demo-size" title="表单 尺寸">
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="middle">Middle</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Input">
                    <Input />
                </Form.Item>
                <Form.Item label="Select">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="TreeSelect">
                    <TreeSelect
                        treeData={[
                            { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Cascader">
                    <Cascader
                        options={[
                            {
                                value: 'zhejiang',
                                label: 'Zhejiang',
                                children: [
                                    {
                                        value: 'hangzhou',
                                        label: 'Hangzhou',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="InputNumber">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Switch">
                    <Switch />
                </Form.Item>
                <Form.Item label="Button">
                    <Button>Button</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
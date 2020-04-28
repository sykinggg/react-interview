import React, { useState } from "react";
import { Card, Form, Button, Input, Select } from "antd";
import { SelectValue } from "antd/lib/select";

const { Option } = Select;

export function FormCustom() {

    const onFinish = (values: any) => {
        console.log('Received values from form: ', values);
    };

    const checkPrice = (rule: any, value: { number: number; }) => {
        if (value.number > 0) {
            return Promise.resolve();
        }
        return Promise.reject('Price must be greater than zero!');
    };

    return (
        <Card id="components-form-demo-custom" title="表单 自定义组件">
            <Form
                name="customized_form_controls"
                layout="inline"
                onFinish={onFinish}
                initialValues={{
                    price: {
                        number: 0,
                        currency: 'rmb',
                    },
                }}
            >
                <Form.Item name="price" label="Price" rules={[{ validator: checkPrice }]}>
                    <PriceInput />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

const PriceInput = (props: any) => {
    const { value = {}, onChange } = props;
    const [number, setNumber] = useState<number>(0);
    const [currency, setCurrency] = useState<any>('rmb');

    const triggerChange = (changedValue: { number?: number; currency?: any; }) => {
        if (onChange) {
            onChange({ number, currency, ...value, ...changedValue });
        }
    };

    const onNumberChange = (e: { target: { value: any; }; }) => {
        const newNumber = parseInt(e.target.value || 0, 10);
        if (Number.isNaN(number)) {
            return;
        }
        if (!('number' in value)) {
            setNumber(newNumber);
        }
        triggerChange({ number: newNumber });
    };

    const onCurrencyChange = (newCurrency: SelectValue) => {
        if (!('currency' in value)) {
            setCurrency(newCurrency);
        }
        triggerChange({ currency: newCurrency });
    };

    return (
        <span>
            <Input
                type="text"
                value={value.number || number}
                onChange={onNumberChange}
                style={{ width: 100 }}
            />
            <Select
                value={value.currency || currency}
                style={{ width: 80, margin: '0 8px' }}
                onChange={onCurrencyChange}
            >
                <Option value="rmb">RMB</Option>
                <Option value="dollar">Dollar</Option>
            </Select>
        </span>
    );
};

import React, { useState } from "react";
import { Card, Form, InputNumber } from "antd";

const formItemLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 12 },
};

export function FormValidateCustom() {

    function validatePrimeNumber(number: number) {
        if (number === 11) {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
        return {
            validateStatus: 'error',
            errorMsg: 'The prime between 8 and 12 is 11!',
        };
    }

    const [number, setNumber] = useState<any>({
        value: 11,
    });

    const tips =
        'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';

    const onNumberChange = (value: any) => {
        setNumber({
            ...validatePrimeNumber(value),
            value,
        });
    };

    return (
        <Card id="components-form-demo-validateCustom" title="表单 自定义校验">
            <Form>
                <Form.Item
                    {...formItemLayout}
                    label="Prime between 8 & 12"
                    validateStatus={number.validateStatus}
                    help={number.errorMsg || tips}
                >
                    <InputNumber min={8} max={12} value={number.value} onChange={onNumberChange} />
                </Form.Item>
            </Form>
        </Card>
    )
}
import React, { useState } from "react";
import { Card, AutoComplete } from "antd";

const { Option } = AutoComplete;

export function AutoCompleteCustom() {

    const [result, setResult] = useState<string[]>([]);

    function handleSearch(value: string) {
        let res: string[] = [];
        if (!value || value.indexOf('@') >= 0) {
            res = [];
        } else {
            res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        setResult(res);
    }

    const children = result.map((email: string) => (
        <Option key={email} value={email}>
            {email}
        </Option>
    ));

    return (
        <Card id="components-autoComplete-demo-custom" title="自定义使用">
            <AutoComplete style={{ width: 200 }} onSearch={handleSearch} placeholder="input here">
                {children}
            </AutoComplete>
        </Card>
    )
}
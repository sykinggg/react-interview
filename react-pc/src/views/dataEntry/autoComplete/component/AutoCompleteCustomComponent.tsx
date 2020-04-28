import React, { useState } from "react";
import { Card, AutoComplete, Input } from "antd";

const { TextArea } = Input;

export function AutoCompleteCustomComponent() {

    const [options, setOptions] = useState<{ value: string }[]>([]);

    const handleSearch = (value: string) => {
        setOptions(
            !value ? [] : [{ value }, { value: value + value }, { value: value + value + value }],
        );
    }

    const handleKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
        console.log('handleKeyPress', ev);
    }

    const onSelect = (value: string) => {
        console.log('Select', value);
    }

    return (
        <Card id="components-autoComplete-demo-customComponent" title="自定义嵌套组件">
            <AutoComplete
                options={options}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={handleSearch}
            >
                <TextArea
                    placeholder="input here"
                    className="custom"
                    style={{ height: 50 }}
                    onKeyPress={handleKeyPress}
                />
            </AutoComplete>
        </Card>
    )
}
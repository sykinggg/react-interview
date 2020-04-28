import React, { useState } from "react";
import { Fragment } from "react";
import { Card, AutoComplete } from "antd";

export function AutoCompleteBase() {

    const [value, setValue] = useState<string>('');
    const [options, setOptions] = useState<{ value: string }[]>([]);

    function mockVal(str: string, repeat: number = 1) {
        return {
            value: str.repeat(repeat),
        };
    };

    function onSearch(searchText: string) {
        setOptions(!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)])
    }

    function onSelect(data: string) {
        console.log('onSelect', data);
    }

    function onChange(data: string) {
        setValue(data);
    }

    return (
        <Fragment>
            <Card id="components-autoComplete-demo-base" title="基本使用">
                <div>
                    <AutoComplete
                        options={options}
                        style={{ width: 200 }}
                        onSelect={onSelect}
                        onSearch={onSearch}
                        placeholder="input here"
                    />
                    <br />
                    <br />
                    <AutoComplete
                        value={value}
                        options={options}
                        style={{ width: 200 }}
                        onSelect={onSelect}
                        onSearch={onSearch}
                        onChange={onChange}
                        placeholder="control mode"
                    />
                </div>
            </Card>
        </Fragment>
    )
}
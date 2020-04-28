import React from "react";
import { Card, AutoComplete } from "antd";

export function AutoCompleteToUpperCase() {

    const options = [
        { value: 'Burns Bay Road' },
        { value: 'Downing Street' },
        { value: 'Wall Street' },
    ];

    return (
        <Card id="components-autoComplete-demo-toUpperCase" title="不区分大小写">
            <AutoComplete
                style={{ width: 200 }}
                options={options}
                placeholder="try to type `b`"
                filterOption={(inputValue, option) => {
                    return (
                        Boolean(option && option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1)
                    );
                }
                }
            />
        </Card>
    )
}
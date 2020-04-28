import React from "react";
import { Card, Checkbox } from "antd";

export function CheckboxGroup() {

    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
    ];
    const optionsWithDisabled = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange', disabled: false },
    ];

    const onChange = (checkedValues: any) => {
        console.log('checked = ', checkedValues);
    }

    return (
        <Card id="components-checkbox-demo-group" title="checkbox 组">
            <div>
                <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
                <br />
                <br />
                <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
                <br />
                <br />
                <Checkbox.Group
                    options={optionsWithDisabled}
                    disabled
                    defaultValue={['Apple']}
                    onChange={onChange}
                />
            </div>
        </Card>
    )
}
import React, { useState } from "react";
import { Card, Checkbox, Button } from "antd";

export function CheckboxLinkage() {

    const [checked, setChecked] = useState<boolean>(true);
    const [disabled, setDisabled] = useState<boolean>(false);

    const toggleChecked = () => {
        setChecked(!checked);
    }

    const toggleDisable = () => {
        setDisabled(!disabled);
    }

    const onChange = (e: any) => {
        console.log('checked = ', e.target.checked);

        setChecked(e.target.checkbox);
    }

    const label = (
        `${checked ? 'Checked' : 'Unchecked'}-${
        disabled ? 'Disabled' : 'Enabled'
        }`
    )

    return (
        <Card id="components-checkbox-demo-linkage" title="级联">
            <div>
                <p style={{ marginBottom: '20px' }}>
                    <Checkbox
                        checked={checked}
                        disabled={disabled}
                        onChange={onChange}
                    >
                        {label}
                    </Checkbox>
                </p>
                <p>
                    <Button type="primary" size="small" onClick={toggleChecked}>
                        {!checked ? 'Check' : 'Uncheck'}
                    </Button>
                    <Button
                        style={{ margin: '0 10px' }}
                        type="primary"
                        size="small"
                        onClick={toggleDisable}
                    >
                        {!disabled ? 'Disable' : 'Enable'}
                    </Button>
                </p>
            </div>
        </Card>
    )
}
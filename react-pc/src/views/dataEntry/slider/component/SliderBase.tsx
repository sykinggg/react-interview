import React, { Fragment, useState } from "react";
import { Card, Slider, Switch } from "antd";

export function SliderBase() {

    const [disabled, setDisabled] = useState<boolean>(false);

    const handleDisabledChange = (e: React.SetStateAction<boolean>) => {
        setDisabled(e);
    }

    return (
        <Fragment>
            <Card id="components-slider-demo-base" title="滑动条 基本使用">
                <Slider defaultValue={30} disabled={disabled} />
                <Slider range defaultValue={[20, 50]} disabled={disabled} />
                Disabled: <Switch size="small" checked={disabled} onChange={handleDisabledChange} />
            </Card>
        </Fragment>
    )
}
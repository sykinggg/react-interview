import React, { Fragment, useState } from "react";
import { Card, Row, Slider, Col, InputNumber } from "antd";

export function SliderInput() {

    const [inputValue, setInputValue] = useState<any>(1);

    const onChange = (value: any) => {
        setInputValue(value);
    }

    return (
        <Fragment>
            <Card id="components-slider-demo-input" title="滑动条 输入框联动">
                <Row>
                    <Col span={12}>
                        <Slider
                            min={1}
                            max={20}
                            onChange={onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={1}
                            max={20}
                            style={{ margin: '0 16px' }}
                            value={inputValue}
                            onChange={onChange}
                        />
                    </Col>
                </Row>
            </Card>
        </Fragment>
    )
}
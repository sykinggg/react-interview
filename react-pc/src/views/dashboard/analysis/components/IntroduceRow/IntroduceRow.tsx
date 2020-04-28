import React, { Fragment, useState, useEffect } from 'react';
import './IntroduceRow.scss';
import { Row, Col } from 'antd';
import ChartCard from '../chartCard/ChartCard';

const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: { marginBottom: 24 },
};

export default function IntroduceRow(props: any) {
    const [cardArr, setCardArr] = useState<any>([{}]);

    useEffect(() => {
        setTimeout(() => {
            setCardArr([{}, {}, {}, {}]);
        }, 3000);
    }, []);

    return (
        <Fragment>
            <Row gutter={24}>
                {cardArr.map((item: any, index: number) => (
                    <Col {...topColResponsiveProps} key={index}>
                        <ChartCard {...item} />
                    </Col>
                ))}
            </Row>
        </Fragment>
    )
}

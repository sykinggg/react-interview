import React, { Fragment } from 'react';
import { Typography } from 'antd';

export default function WaterFallComponent(props: any) {
    const { title, imgArr } = props;

    const imgElement = (item: string) => {
        return (
            <img src={item} alt='baseImage' key={item} />
        )
    }

    return (
        <Fragment>
            <Typography>
                <Typography.Title>{title}</Typography.Title>
                {imgArr.map((item: string) => imgElement(item))}
            </Typography>
        </Fragment>
    )
}
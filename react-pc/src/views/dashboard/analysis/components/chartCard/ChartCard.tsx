import React, { Fragment } from 'react';
import { Card, Avatar } from 'antd';
import './ChartCard.scss';
const { Meta } = Card;

export interface IChartCard {
    imgUrl?: string;
    avatar?: string;
    title?: string;
    description?: string;
}

export default function ChartCard(props: IChartCard) {
    const {imgUrl, avatar, title, description} = props;
    return (
        <Fragment>
            <Card
                cover={
                    <img
                        alt="example"
                        src={imgUrl || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
                    />
                }
                // actions={[
                //     <Icon type="setting" key="setting" />,
                //     <Icon type="edit" key="edit" />,
                //     <Icon type="ellipsis" key="ellipsis" />,
                // ]}
            >
                <Meta
                    avatar={<Avatar src={avatar || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />}
                    title={title || 'Card title'}
                    description={description || 'This is the description'}
                />
            </Card>,
        </Fragment>
    )
}

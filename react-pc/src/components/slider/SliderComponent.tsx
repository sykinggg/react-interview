import React, { Fragment } from 'react';
import { Layout } from 'antd';
import './SliderComponent.scss';
import SubMenuComponent from './SubMenuComponent';

const { Sider } = Layout;

export default function SliderComponent(props: any) {
    return (
        <Fragment>
            <Sider width={200} style={{ background: '#fff' }}>
                <SubMenuComponent />
            </Sider>
        </Fragment>
    )
}

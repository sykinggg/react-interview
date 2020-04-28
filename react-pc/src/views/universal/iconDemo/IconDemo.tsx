import React from 'react';
import './IconDemo.scss';
import { Card } from 'antd';
import { MessageOutlined, createFromIconfontCN } from '@ant-design/icons';

export default function IconDemo(props: any) {

    const MyIcon = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // 在 iconfont.cn 上生成
    });

    return (
        <Card id="components-icon-demo" title="icon">
            <MessageOutlined style={{ fontSize: '36px', color: '#08c' }} />;
            <MyIcon type="icon-example" style={{fontSize: '36px'}}/>
        </Card>
    )
}

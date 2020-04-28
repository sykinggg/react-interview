import React, { useState } from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

export function TypographyInteractionDemo(props: any) {
    const [str, setstr] = useState('This is an editable text.');
    const onChangeFun = (str: any) => {
        setstr(str);
    }
    return(
        <Card id="components-typography-demo-interaction" title="可交互">
            <Paragraph editable={{ onChange: onChangeFun }}>{str}</Paragraph>
            <Paragraph copyable>This is a copyable text.</Paragraph>
            <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
        </Card>
    )
}

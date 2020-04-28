import React from 'react';
import { Typography, Card } from 'antd';
const { Paragraph } = Typography;

export function TypographyEllipsisDemo(props: any) {
    return(
        <Card id="components-typography-demo-ellipsis" title="省略">
            <Paragraph ellipsis>
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                a design language for background applications, is refined by Ant UED Team. Ant Design, a
                design language for background applications, is refined by Ant UED Team. Ant Design, a design
                language for background applications, is refined by Ant UED Team. Ant Design, a design
                language for background applications, is refined by Ant UED Team.
            </Paragraph>

            <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                a design language for background applications, is refined by Ant UED Team. Ant Design, a
                design language for background applications, is refined by Ant UED Team. Ant Design, a design
                language for background applications, is refined by Ant UED Team. Ant Design, a design
                language for background applications, is refined by Ant UED Team.
            </Paragraph>
        </Card>
    )
}

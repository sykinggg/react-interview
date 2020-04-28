import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function DocsListKey() {
    return (
        <Card id="doc-core-description-listKey" title="列表 & Key">
            <Typography>
                <Title>列表 & Key</Title>
                <Text></Text>

                <Paragraph>
                    列表
                    <ul>
                        <li>
                            <span>列表渲染——动态生成并列权限的组件</span>
                        </li>
                        <li>
                            <span>key——区别同一次动态渲染出的并列权限组件（更新识别标识）</span>
                        </li>
                        <li>
                            <span>key使用场景——在循环组件的最外层使用用来标记当前循环体作为更新识别标识</span>
                        </li>
                        <li>
                            <span>key唯一性——在当前循环中唯一即可</span>
                        </li>
                        <li>
                            <span>当使用map进行循环渲染时需要将动态数组使用state进行管理否则会有返回值警告</span>
                        </li>
                    </ul>
                </Paragraph>

                <Divider />
            </Typography>
        </Card>
    )
}

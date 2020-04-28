import React from 'react';
import { Card, Typography, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;

export function DocsCondition() {
    return (
        <Card id="doc-core-description-condition" title="条件渲染">
            <Typography>
                <Title>条件渲染</Title>
                <Text></Text>

                <Paragraph>
                    条件与上层数据流以及本层状态流的关系
                    <ul>
                        <li>
                            <span>条件控制渲染组件内部的结构变化</span>
                        </li>
                        <li>
                            <span>如果说数据流是单向的，state则是组件内部的状态流，则条件是控制数据与状态的模式</span>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    条件内部细节
                    <ul>
                        <li>
                            <span>&& 短值运算符从左到右进行左侧判断，如果为true则执行右边的代码（二元运算）</span>
                        </li>
                        <li>
                            <span>condition ? true : false 三目运算 当对于&&增加错误的处理</span>
                        </li>
                        <li>
                            <span>|| 短值运算符从左到右进行执行补充， 如果左侧为false则补充执行右侧， 如果左侧为true则不会补充执行右侧</span>
                        </li>
                    </ul>
                </Paragraph>

                <Divider />
            </Typography>
        </Card>
    )
}
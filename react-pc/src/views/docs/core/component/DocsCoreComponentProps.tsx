import React from 'react';
import { Typography, Card, Divider } from 'antd';

const {Title, Paragraph, Text} = Typography;

export function DocsCoreComponentProps() {
    return (
        <Card id="doc-core-description-componentProps" title="组件 & Props">
            <Typography>
                <Title>组件</Title>
                <Text></Text>

                <Paragraph>
                    表达
                    <ul>
                        <li>
                            <span>函数组件</span>
                        </li>
                        <li>
                            <span>class 组件</span>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    渲染
                    <ul>
                        <li>
                            <span>函数调用</span>
                        </li>
                        <li>
                            <span>dom元素</span>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    结构
                    <ul>
                        <li>
                            <span>对于元素的定义表明结构的最小单元是dom,上限则是功能增加代码复用性</span>
                        </li>
                        <li>
                            <span>先将基础元素组成功能的基础组件</span>
                        </li>
                        <li>
                            <span>可以将多个元素（组件）根据功能的差异进行组合</span>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    props
                    <ul>
                        <li>
                            <span>props 的只读性确保了单项数据流的一致性</span>
                        </li>
                        <li>
                            <span>props 的只读性也确保了数据的正确性</span>
                        </li>
                    </ul>
                </Paragraph>

                <Divider />
            </Typography>
        </Card>
    )
}

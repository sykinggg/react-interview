import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function DocsStateComponentOptimization() {
    return (
        <Card id="doc-core-description-stateComponentOptimization" title="组件中的基础状态提升">
            <Typography>
                <Title>状态提升(radux 的需求雏形)</Title>
                <Text></Text>

                <Paragraph>
                    <ul>
                        <li>
                            <span>问题：多组件中的state反映相同的变化数据</span>
                        </li>
                        <li>
                            <span>解决方案：将子组件中的相同数据额子变化帧抽离到父组件中使子组件在这一变化帧的角度变为非受控组件</span>
                        </li>
                        <li>
                            <span>原则：单一功能变化只有一个变化帧进行监听并通过props进行组件之间的分发，如果对变化帧进行更新则使用公共事件进行统一更新</span>
                        </li>
                        <li>
                            <span>暴露出的问题：需要一个覆盖多组件的父组件来维持相同变化点的数据更新，dom发生冗余而且增加代码的耦合性</span>
                        </li>
                    </ul>
                </Paragraph>

                <Divider />
            </Typography>
        </Card>
    )
}

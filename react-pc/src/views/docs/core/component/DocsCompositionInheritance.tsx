import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function DocsCompositionInheritance() {
    return (
        <Card id="doc-core-description-compositionInherirance" title="组合&继承">
            <Typography>
                <Title>组合&继承</Title>
                <Text></Text>

                <Paragraph>
                    继承
                    <ul>
                        <li>
                            <span>诞生：多组件有相同的功能会产生继承并进行相应的扩展（在概念上说得通）</span>
                        </li>
                        <li>
                            <span>问题：但是这种继承是有问题的在于父类的权限定义如果并未完全继承而又有新的功能点则会使得继承发生冗余</span>
                        </li>
                    </ul>
                </Paragraph>
                
                <Paragraph>
                    组合
                    <ul>
                        <li>
                            <span>诞生：前端的功能性共同点比较少，如果使用继承会产生冗余</span>
                        </li>
                        <li>
                            <span>解决方案：直接只用需要继承的组件并抽离特殊变化点作为新组件然后组合使用</span>
                        </li>
                        <li>
                            <span>延伸问题：即使组合使用也依然无法避免非兄弟组件中的state公共数据流的优雅控制，并且产生问题不易排查，相当于水流中产生漩涡而漩涡中又会有嵌套的影响容易凉凉</span>
                        </li>
                        <li>
                            <span>延伸问题：react 中的 flux radux vue 中的 vuex angular token serveice</span>
                        </li>
                    </ul>
                </Paragraph>

                <Divider />
            </Typography>
        </Card>
    )
}

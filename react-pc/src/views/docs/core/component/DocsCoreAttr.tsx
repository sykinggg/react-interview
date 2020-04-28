import React from 'react';
import { Card, Typography, Divider } from 'antd';

const {Title, Paragraph, Text} = Typography;

export function DocsCoreAttr() {
    return (
        <Card id="doc-core-description-attr" title="元素渲染">
            <Typography>
                <Title>元素</Title>
                {/* <Paragraph>
                    
                <Text strong>
                        uniform the user interface specs for internal background projects, lower the unnecessary
                        cost of design differences and implementation and liberate the resources of design and
                        front-end development
                </Text>.
                </Paragraph>
                <Title level={2}>Guidelines and Resources</Title>
                <Paragraph>
                    We supply a series of design principles, practical patterns and high quality design resources
                (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
                    prototypes beautifully and efficiently.
                </Paragraph> */}
                <Text></Text>

                <Paragraph>
                    由功能区分
                    <ul>
                        <li>
                            <span>React 应用的最小块</span>
                        </li>
                        <li>
                            <span>实现元素的基础就是dom（vnode）</span>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    由状态区分
                    <ul>
                        <li>
                            <span>页面UI当前帧的状态表达</span>
                        </li>
                        <li>
                            <span>元素在当前帧是不可变的</span>
                        </li>
                        <li>
                            <span>在时间或是事件的触发下会改变元素表达（状态变化）</span>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    由框架区分
                    <ul>
                        <li>
                            <span>分辨是否是页面UI下一帧需要改变更新的</span>
                        </li>
                    </ul>
                </Paragraph>

                <Divider />
            </Typography>
        </Card>
    )
}

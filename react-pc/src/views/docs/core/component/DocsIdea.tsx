import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function DocsIdea() {
    return (
        <Card id="doc-core-description-idea" title="react 思路">
            <Typography>
                <Title>前端 思路</Title>
                <Text></Text>

                <Paragraph>
                    UI
                    <ul>
                        <li>
                            <span>UI组件诞生：从设计图中进行组件UI功能中的拆分与抽离</span>
                        </li>
                        <li>
                            <span>将UI操作上的变化点抽离为组件</span>
                        </li>
                        <li>
                            <span>将组件中变化帧以及变化方法封装为State进行统一管理</span>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    数据流
                    <ul>
                        <li>
                            <span>将相同数据变化封装成唯一的变化帧进行监听并驱动dom进行同步</span>
                        </li>
                        <li>
                            <span>将UI操作相同的数据变化帧的方法进行抽离以便统一管理（添加反响数据流——实现dom操作和state变化帧的双向驱动）</span>
                        </li>
                        <li>
                            <span>补充组件中的props</span>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    潜藏的问题——数据流引发的问题
                    <ul>
                        <li>
                            <span>数据流组件不够抽象以至于会影响整体UI组件的设计和抽离</span>
                        </li>
                        <li>
                            <span>相当于功能性的复杂数据流会影响已经完善的UI组件使得整体代码不易拓展</span>
                        </li>
                    </ul>
                </Paragraph>

                <Divider />
            </Typography>
        </Card>
    )
}

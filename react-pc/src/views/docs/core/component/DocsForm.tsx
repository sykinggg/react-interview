import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function DocsForm() {
    return(
        <Card id="doc-core-description-form" title="表单">
            <Typography>
                <Title>表单</Title>
                <Text></Text>

                <Paragraph>
                    <ul>
                        <li>
                            <span>表单的根本因素在于数据的双向绑定</span>
                        </li>
                        <li>
                            <span>也就是用户在dom中输入相应的数据——此时应同步到js中在React中也就是同步到state中进行追踪和记录</span>
                        </li>
                        <li>
                            <span>当表单与后端发生交互则会js获取数据在React中也就是将异步获取的数据也放在state中进行追踪和记录然后同步到页面上</span>
                        </li>
                        <li>
                            <span>单向数据流的双向数据绑定则需要分辨根本意义上的驱动事件</span>
                            <ul>
                                <li>
                                    <span>当组件中的UI帧发生变化框架会追踪变化点进行更新从而同步dom</span>
                                </li>
                                <li>
                                    <span>当组件中的dom输入发生变化会使用相应的change事件尽可能的异步setState改变页面state</span>
                                </li>
                                <li>
                                    <span>相当于将angular 1.x 中的值检测机制的细节化 也更符合js的事件驱动的意义</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>动态值的写入</span>
                            <code>
                                <br/>
                                handleInputChange(event) ｛<br/>
                                    const target = event.target;<br/>
                                    const value = target.type === 'checkbox' ? target.checked : target.value;<br/>
                                    const name = target.name;<br/>
                                <br/>
                                    this.setState(｛<br/>
                                        [name]: value<br/>
                                    ｝);<br/>
                                ｝<br/>
                            </code>
                            <span>注意: 动态key值的写入</span>
                        </li>
                    </ul>
                </Paragraph>

                <Divider />
            </Typography>
        </Card>
    )
}

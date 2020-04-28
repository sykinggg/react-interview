import { Card, Divider, Typography } from 'antd';
import React from 'react';

const { Title, Paragraph, Text } = Typography;

export function DocsEvent() {
    return (
        <Card id="doc-core-description-event" title="事件处理">
            <Typography>
                <Title>事件处理</Title>
                <Text></Text>

                <Paragraph>
                    React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同
                    <ul>
                        <li>
                            <span>React 事件的命名采用小驼峰式（camelCase），而不是纯小写</span>
                        </li>
                        <li>
                            <span>使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串</span>
                        </li>
                        <li>
                            <code>
                                <br/>
                                function handleClick(e: any) ｛<br/>
                                    e.preventDefault()<br/>
                                ｝<br/>
                            </code>
                        </li>
                        <li>
                            <span>绑定</span>
                            <code>
                                <br/>
                                // 为了在回调中使用 `this`，这个绑定是必不可少的<br/>
                                this.handleClick = this.handleClick.bind(this);<br/>
                            </code>
                            <code>
                                <br />
                                // 第一种 class fields 语法<br />
                                // 此语法确保 `handleClick` 内的 `this` 已被绑定。<br />
                                // 注意: 这是 *实验性* 语法。<br />
                                handleClick = ｛() => console.log('this is:', this);｝<br />
                            </code>
                            <code>
                                <br/>
                                // 第二种 调用时箭头函数绑定<br/>
                                onClick= ｛(e) => this.handleClick(e)｝<br/>
                                // 第三种 Function.prototype.bind<br/>
                                onClick=｛this.deleteRow.bind(this, id)｝<br/>
                            </code>
                        </li>
                    </ul>
                </Paragraph>

                <Divider />
            </Typography>
        </Card>
    )
}

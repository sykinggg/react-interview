import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function DocsStateLife() {
    return (
        <Card id="doc-core-description-stateLife" title="State & 生命周期">
            <Typography>
                <Title>state</Title>
                <Text></Text>

                <Paragraph>
                    <ul>
                        <li>
                            <span>state: 组件中变化帧的追溯管理</span>
                        </li>
                        <li>
                            <span>state中的每一个属性相当于一个子变化帧，当其发生变化则调用框架标记需要更新的元素（算法标记）并进行更新</span>
                        </li>
                        <li>
                            <span>生命周期：对于组件变化过程的详细描述换言之就是对组件的精细化操作</span>
                        </li>
                        <li>
                            <span>当每一个state中的子变化帧变化时会异步监听（变化帧的集中管理——合并）所有自变化帧的变化进而追踪所有更新元素（算法标记）进行更新</span>
                        </li>
                    </ul>
                </Paragraph>

                <Title>将函数组件转换成 class 组件</Title>

                <Paragraph>
                    <ul>
                        <li>
                            <span>创建一个同名的 ES6 class，并且继承于 React.Component</span>
                        </li>
                        <li>
                            <span>添加一个空的 render() 方法</span>
                        </li>
                        <li>
                            <span>将函数体移动到 render() 方法之中</span>
                        </li>
                        <li>
                            <span>在 render() 方法中使用 this.props 替换 props</span>
                        </li>
                        <li>
                            <span>删除剩余的空函数声明</span>
                        </li>
                    </ul>
                </Paragraph>

                <Title>生命周期方法</Title>

                <Paragraph>
                    <ul>
                        <li>
                            <span>componentDidMount() 组件已经被渲染到 DOM 中后运行</span>
                        </li>
                        <li>
                            <span>componentWillUnmount() 组件从 DOM 中被移除前运行</span>
                        </li>
                    </ul>
                </Paragraph>

                

                <Divider />
            </Typography>
        </Card>
    )
}

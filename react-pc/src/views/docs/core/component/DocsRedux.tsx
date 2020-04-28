import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function DocsRedux() {
    return (
        <Card id="doc-core-description-redux" title="redux">
            <Typography>
                <Title>redux</Title>
                <Text></Text>

                <Paragraph>
                    <span>组成</span>
                    <ul>
                        <li>
                            <span>Store: 存储应用 state 以及用于触发 state 更新的 dispatch 方法等，整个应用仅有单一的 Store </span>
                            <ul>
                                <span>Store 中提供了几个 API</span>
                                <li>
                                    <span>store.getState(): 获取当前 state</span>
                                </li>
                                <li>
                                    <span>store.dispatch(action): 用于 View 发出 Action</span>
                                </li>
                                <li>
                                    <span>store.subscribe(listener): 设置监听函数，一旦 state 变化则执行该函数（若把视图更新函数作为 listener 传入，则可触发视图自动渲染）</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Action: 同 Flux ，Action 是用于更新 state 的消息对象，由 View 发出</span>
                            <ul>
                                <li>
                                    <span>有专门生成 Action 的 Action Creator</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Reducer: 是一个用于改变 state 的纯函数</span>
                            <p>对于相同的参数返回相同的返回结果，不修改参数，不依赖外部变量</p>
                            <span>通过应用状态与 Action 推导出新的 state : (previousState, action) => newState。Reducer 返回一个新的 state </span>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    <span>特点</span>
                    <ul>
                        <li>
                            <span>单向数据流</span>
                            <ul>
                                <li>
                                    <span>View 发出 Action (store.dispatch(action))，Store 调用 Reducer 计算出新的 state</span>
                                </li>
                                <li>
                                    <span>若 state 产生变化，则调用监听函数重新渲染 View （store.subscribe(render)）</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>单一数据源，只有一个 Store</span>
                        </li>
                        <li>
                            <span>state 是只读的，每次状态更新之后只能返回一个新的 state</span>
                        </li>
                        <li>
                            <span>没有 Dispatcher </span>
                            <p>Store 中集成了 dispatch 方法，store.dispatch() 是 View 发出 Action 的唯一途径</p>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    <span>Middleware——Redux 中应用于异步数据流</span>
                    <ul>
                        <li>
                            <span>Redux 的 Middleware 是对 store.dispatch() 进行了封装之后的方法</span>
                        </li>
                        <li>
                            <span>可以使 dispatch 传递 action 以外的函数或者 promise</span>
                        </li>
                        <li>
                            <span>通过 applyMiddleware 方法应用中间件</span>
                        </li>
                        <li>
                            <span>middleware 链中的最后一个 middleware 开始 dispatch action 时，这个 action 必须是一个普通对象</span>
                        </li>
                    </ul>
                </Paragraph>

                <Divider />
            </Typography>
        </Card>
    )
}

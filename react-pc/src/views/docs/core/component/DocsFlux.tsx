import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function DocsFlux() {
    return (
        <Card id="doc-core-description-flux" title="flux 解决方案">
            <Typography>
                <Title>flux 解决方案</Title>
                <Text>基本原理：抽离相同数据state并进行统一管理</Text>

                <Paragraph>
                    flux
                    <ul>
                        <li>
                            <span>组成</span>
                            <ul>
                                <li>
                                    <span>View： 视图层</span>
                                </li>
                                <li>
                                    <span>Action（动作）：视图层发出的消息（比如mouseClick）</span>
                                </li>
                                <li>
                                    <span>Dispatcher（派发器）：用来接收Actions、执行回调函数</span>
                                </li>
                                <li>
                                    <span>Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面</span>
                                </li>
                                <li>
                                    <span>相当于使用store 一起管理 action (子变化帧操作) 以及 store中的属性 （子变化帧记录）</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>总执行流程</span>
                            <ul>
                                <li>
                                    <span>单向数据流的执行流程</span>
                                    <ul>
                                        <li>
                                            <span>store => state</span>
                                            <p>组件内部 的数据流 props 和 store 均为上层数据并触发 state数据同步</p>
                                        </li>
                                        <li>
                                            <span>state => view(update)</span>
                                            <p>当框架检测到当前组件内的数据流发生改变则更新相应dom</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>逆向事件流的执行过程</span>
                                    <ul>
                                        <li>
                                            <span>view (action)=> dispatcher</span>
                                            <p>页面触发回调函数传入相应的action 并触发dispather 进行寻找子变化帧方法并执行</p>
                                        </li>
                                        <li>
                                            <span>dispatcher => store</span>
                                            <p>将触发的action操作后的数据更新到全局管理的 store 中</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>优点</span>
                            <ul>
                                <li>
                                    <span>完全的抽象化 真正解决 react 复杂功能耦合性的问题</span>
                                </li>
                                <li>
                                    <span>完全抽象化使得每一块组件相互独立，换句话说一个项目可以同时存在多个store</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>redux 的诞生 （flux的细节具体化）</span>
                            <ul>
                                <li>
                                    <span>flux 的 store可以有多个存在，但是没有联系</span>
                                    <p>因此，在redux 采用的操作</p>
                                    <ul>
                                        <li>
                                            <span>将各个 store 整合成一个完整的 store, 可以根据这个 store 推导出应用完整的 state</span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>flux 的 store中 同时 控制属性（变化帧标识）以及 方法（变化帧更新逻辑）</span>
                                    <p>因此，在redux 采用的操作</p>
                                    <ul>
                                        <li>
                                            <span>首先，将flux store中的方法进行分离 产生reducer </span>
                                        </li>
                                        <li>
                                            <span>其次，分离store中的属性为新的store 分离reducer 并使用combineReducers 可以进行拼接</span>
                                        </li>
                                        <li>
                                            <span>小型store 和对应的reducer 相对于其他独立 而由redux相互关联共同维护一个应用完整的 UI状态帧（state）</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Paragraph>

                <Divider />
            </Typography>
        </Card>
    )
}

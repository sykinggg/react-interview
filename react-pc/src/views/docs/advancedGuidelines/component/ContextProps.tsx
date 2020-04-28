import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

export function ContextProps() {
    return (
      <Card id="doc-advancedGuidelines-contextProps" title="Context（简略的传值）">
          <Typography>
              <Title></Title>
              <Text></Text>

                <Paragraph>
                    使用场景
                    <ul>
                        <li>
                            <span>Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据</span>
                        </li>
                        <li>
                            <span>栗子：</span>
                            <p>通过一个 “theme” 属性手动调整一个按钮组件的样式</p>
                            <ul>
                                <li>
                                    <span>原始代码</span>
                                    <div>
                                        <code>
                                            class App extends React.Component ｛<br />
                                            &nbsp;&nbsp;render() ｛<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;return &lt;Toolbar theme="dark" />;<br />
                                            &nbsp;&nbsp;｝<br />
                                            ｝<br />
                                            <br />
                                            function Toolbar(props) ｛<br />
                                            // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。<br />
                                            // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，<br />
                                            // 因为必须将这个值层层传递所有组件。<br />
                                            &nbsp;&nbsp;return (<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div><br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ThemedButton theme=｛props.theme｝ /><br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div><br />
                                            &nbsp;&nbsp;);<br />
                                            ｝<br />
                                            <br />
                                            class ThemedButton extends React.Component ｛<br />
                                            &nbsp;&nbsp;render() ｛<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;return &lt;Button theme=｛this.props.theme｝ />;<br />
                                            &nbsp;&nbsp;｝<br />
                                            ｝<br />
                                        </code>
                                    </div>
                                </li>
                                <li>
                                    <span>优化后的代码</span>
                                    <div>
                                        <code>
                                        // Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。<br/>
                                        // 为当前的 theme 创建一个 context（“light”为默认值）。<br/>
                                        const ThemeContext = React.createContext('light');<br/>
                                        <br/>
                                        class App extends React.Component ｛<br/>
                                        &nbsp;&nbsp;render() ｛<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;// 使用一个 Provider 来将当前的 theme 传递给以下的组件树。<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;// 无论多深，任何组件都能读取这个值。<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;// 在这个例子中，我们将 “dark” 作为当前的值传递下去。<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;return (<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;ThemeContext.Provider value="dark"><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Toolbar /><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ThemeContext.Provider><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
                                        &nbsp;&nbsp;}<br/>
                                        }<br/>
                                        <br/>
                                        // 中间的组件再也不必指明往下传递 theme 了。<br/>
                                        function Toolbar(props) ｛<br/>
                                        &nbsp;&nbsp;return (<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ThemedButton /><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div><br/>
                                        &nbsp;&nbsp;);<br/>
                                        }<br/>
                                        <br/>
                                        class ThemedButton extends React.Component ｛<br/>
                                        &nbsp;&nbsp;// 指定 contextType 读取当前的 theme context。<br/>
                                        &nbsp;&nbsp;// React 会往上找到最近的 theme Provider，然后使用它的值。<br/>
                                        &nbsp;&nbsp;// 在这个例子中，当前的 theme 值为 “dark”。<br/>
                                        &nbsp;&nbsp;static contextType = ThemeContext;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;render() ｛<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &lt;Button theme=｛this.context} />;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                                        }<br/>
                                        </code>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>关键点：</span>
                            <p>Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据</p>
                            <ul>
                                <li>
                                    <span>也就是使用组件的形式想下进行数据广播类似于在大型组件内部形成一个公共的数据传播</span>
                                </li>
                                <li>
                                    <span>并且在Context中存在方法以逆数据流的形式直接改动大型组件内部的公共数据</span>
                                </li>
                                <li>
                                    <span>于此产生的更新会更加冗余</span>
                                </li>
                                <li>
                                    <span>比较类似于flux的形式但是是依附于组件的内部公共数据的变化帧</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>api</span>
                            <ul>
                                <li>
                                    <span>React.createContext——创建一个 Context 对象</span>
                                    <div>
                                        <code>
                                        &nbsp;&nbsp;const MyContext = React.createContext(defaultValue);
                                        </code>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值</span>
                                        </li>
                                        <li>
                                            <span>只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效</span>
                                        </li>
                                        <li>
                                            <span>注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效</span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Context.Provider——组件订阅 context 的变化</span>
                                    <div>
                                        <code>
                                        &nbsp;&lt;MyContext.Provider value=｛/* 某个值 */}>
                                        </code>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>使用的组件可以订阅context的变化</span>
                                        </li>
                                        <li>
                                            <span>类似于function的值的作用域，内层的值会覆盖外层的值</span>
                                        </li>
                                        <li>
                                            <span>在provider的值发生变化，内部的消费组件会重新渲染</span>
                                            <p>注意：这种渲染不会被组件内部的shouldComponentUpdate 函数影响</p>
                                            <strong>所以这种更新机制并不会产生相应的生命周期控制函数</strong>
                                            <p>算法也相对diff算法改为Object.is算法</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Class.contextType——挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象</span>
                                    <p>使用 this.context 来消费最近 Context 上的那个值</p>
                                    <strong>可在class中的所有函数中使用该订阅的值</strong>
                                </li>
                                <li>
                                    <span>Context.Consumer———dom的组件订阅形式</span>
                                    <div>
                                        <code>
                                        &lt;MyContext.Consumer><br/>
                                            ｛value => /* 基于 context 值进行渲染*/}<br/>
                                        &lt;/MyContext.Consumer><br/>
                                        </code>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>React 组件也可以订阅到 context 变更。在函数式组件中完成订阅 contex</span>
                                        </li>
                                        <li>
                                            <span>这需要函数作为子元素（function as a child）这种写法</span>
                                        </li>
                                        <li>
                                            <span>这个函数接收当前的 context 值，返回一个 React 节点</span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Context.displayName——确定 context 要显示的内容</span>
                                    <div>
                                        <code>
                                        const MyContext = React.createContext(/* some value */);<br/>
                                        MyContext.displayName = 'MyDisplayName';<br/>
                                        <br/>
                                        &lt;MyContext.Provider> // "MyDisplayName.Provider" 在 DevTools 中<br/>
                                        &lt;MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中<br/>
                                        </code>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>context 对象接受一个名为 displayName 的 property，类型为字符串</span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>动态 Context——将context中增加属性用以封装变化量</span>
                                    <ul>
                                        <li>
                                            <span>类似于function值的作用域——传值方式类似于props属性绑定</span>
                                        </li>
                                        <li>
                                            <span>嵌套组件中的值的绑定类似于</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>

                </Paragraph>
                    
              <Divider />
          </Typography>
      </Card>
    )
}

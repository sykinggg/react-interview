import { Card, Divider, Typography } from 'antd';
import React from 'react';

const { Title, Paragraph, Text } = Typography;

export function CodeSplitting() {
    return(
        <Card id="doc-advancedGuidelines-codeSplitting" title="代码分割">
            <Typography>
                <Title>代码分割</Title>
                <Text></Text>

                <Paragraph>
                    打包
                    <ul>
                        <li>
                            <span> Webpack，Rollup 或 Browserify 最终会生成一个bundle，在页面上引入则会全部引用该应用</span>
                        </li>
                        <li>
                            <span>打包的类似比较</span>
                            <li>
                                <span>打包前</span>
                                <div>
                                    <code>
                                        // app.js<br/>
                                        import ｛ add ｝ from './math.js';<br/>
                                        console.log(add(16, 26)); // 42<br/>
                                        <br/>
                                        // math.js<br/>
                                        export function add(a, b) ｛<br/>
                                        &nbsp;&nbsp;return a + b;<br/>
                                        ｝<br/>
                                    </code>
                                </div>
                            </li>
                            <li>
                                <span>打包后</span>
                                <code>
                                <br/>
                                function add(a, b) ｛<br/>
                                &nbsp;&nbsp;return a + b;<br/>
                                ｝<br/>
                                <br/>
                                console.log(add(16, 26)); // 42<br/>
                                </code>
                            </li>
                        </li>
                        <li>
                            引申出的问题在于一个包内的代码如果过于冗余则会使打出的包很大所以需要另一个解决方案也就是代码分割
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    import()
                    <ul>
                        <li>
                            <span>使用之前</span>
                            <code>
                                <br/>
                                import ｛ add ｝ from './math';<br/>
                                <br/>
                                console.log(add(16, 26));<br/>
                            </code>
                        </li>
                        <li>
                            <span>使用之后</span>
                            <div>
                                <code>
                                import("./math").then(math => ｛<br/>
                                &nbsp;&nbsp;console.log(math.add(16, 26));<br/>
                                ｝);<br/>
                                </code>
                            </div>
                        </li>
                        <li>
                            <span>当 Webpack 解析到该语法时，会自动进行代码分割</span>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    React.lazy
                    <ul>
                        <li>
                            <span>使用方案：</span>
                            <ul>
                                <li>
                                    <span>React.lazy 函数能让你像渲染常规组件一样处理动态引入组件</span>
                                </li>
                                <li>
                                    <span>React.lazy 和 Suspense 技术还不支持服务端渲染</span>
                                </li>
                                <li>
                                    <span>服务端渲染=>Loadable Components</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>代码：</span>
                            <ul>
                                <li>
                                    <span>使用之前</span>
                                    <code>
                                        <br/>
                                        import OtherComponent from './OtherComponent';<br/>
                                    </code>
                                </li>
                                <li>
                                    <span>使用之后</span>
                                    <code>
                                        <br/>
                                        const OtherComponent = React.lazy(() => import('./OtherComponent'));<br/>
                                    </code>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>使用方案</span>
                            <ul>
                                <li>
                                    <span>React.lazy 接受一个函数，这个函数需要动态调用 import()</span>
                                </li>
                                <li>
                                    <span>它必须返回一个 Promise，该 Promise 需要 resolve 一个 defalut export 的 React 组件</span>
                                </li>
                                <li>
                                    <span>然后应在 Suspense 组件中渲染 lazy 组件，如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）</span>
                                </li>
                                <li>
                                    <code>
                                    const OtherComponent = React.lazy(() => import('./OtherComponent'));<br/>
                                    <br/>
                                    function MyComponent() ｛<br/>
                                    &nbsp;&nbsp;return (<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Suspense fallback=｛&lt;div>Loading...&lt;/div>｝><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OtherComponent /><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Suspense><br/>
                                    &nbsp;&nbsp;);<br/>
                                    ｝<br/>
                                    </code>
                                </li>
                                <li>
                                    <span>fallback 属性接受任何在组件加载过程中展示的 React 元素</span>
                                </li>
                                <li>
                                    <span>可以将 Suspense 组件置于懒加载组件之上的任何位置</span>
                                </li>
                                <li>
                                    <span>可以用一个 Suspense 组件包裹多个懒加载组件</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    异常捕获边界（Error boundaries）
                    <ul>
                        <li>
                            <span>如果模块加载失败（如网络问题），它会触发一个错误。可以通过异常捕获边界（Error boundaries）技术来处理</span>
                        </li>
                        <li>
                            <span>当使用异常捕获边界这不会产生因组件的问题而出现整个组件树的崩塌类似于 try catch</span>
                        </li>
                        <li>
                            <span>注意如果为组件中使用则因为</span>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    基于路由的代码分割
                    <ul>
                        <li>
                            <span>使用React Router这种单页面路由管理第三方插件，搭配React.lazy来实现路由异步加载用以减少首屏加载时间</span>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    命名导出（Named Exports）
                    <ul>
                        <li>
                            <span>React.lazy 目前只支持默认导出（default exports）</span>
                        </li>
                        <li>
                            <code>
                            // ManyComponents.js<br/>
                            export const MyComponent = /* ... */;<br/>
                            export const MyUnusedComponent = /* ... */;<br/>
                            <br/>
                            // MyComponent.js<br/>
                            export ｛MyComponent as default｝ from "./ManyComponents.js";<br/>
                            <br/>
                            // MyApp.js<br/>
                            import React, ｛lazy｝ from 'react';<br/>
                            const MyComponent = lazy(() => import("./MyComponent.js"));<br/>
                            </code>
                        </li>
                    </ul>
                </Paragraph>

                <Divider />
            </Typography>
        </Card>
    )
}

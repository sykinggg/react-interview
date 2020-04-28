import React, { Fragment } from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import AsyncComponent from '../asyncComponent/AsyncComponent';
import undefinedComponent from '../404';
const { Content } = Layout;

export default function Container(props: any) {
    const { RouterList } = props;
    console.log(RouterList.linkArr);
    return (
        <Fragment>
            <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <Switch>
                    <Route path="/" render={() => <AsyncComponent LoadAsyncComponent={RouterList.linkArr[0].component} />} exact />
                    {RouterList.linkArr.map((item: any, i: number) => {
                        console.log(item.link);
                        if (item.synchronize) {
                            return (
                                <Route key={item.link} path={'/' + item.link} component={item.component} />
                            )
                        } else {
                            return (
                                < Route key={item.link} path={'/' + item.link} render={(props) => <AsyncComponent {...props} LoadAsyncComponent={item.component} />} />
                            )
                        }
                    })}
                    <Route component={undefinedComponent} />
                </Switch>
            </Content>
        </Fragment>
    )
}

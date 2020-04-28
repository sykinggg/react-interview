import React, { useState, Fragment, useEffect, useRef } from 'react';
import {
    ConfigProvider,
    Layout,
} from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './App.scss';
import HeaderComponent from './components/header/HeaderComponent';
import BreadcrumbComponent from './components/Breadcrumb/BreadcrumbComponent';
import SliderComponent from './components/slider/SliderComponent';
import { BrowserRouter as Router } from "react-router-dom";
import Container from './components/container/Container';
import { RouterList } from './router';
import { Sticky } from './components';
import { Scrollbars } from 'react-custom-scrollbars';

moment.locale('en');

export default function App(props: any) {
    const [locale, setLocale] = useState<any>();
    const inputEl = useRef(null);

    const changeLocale = (e: any) => {
        if (e === 'en') {
            moment.locale('en');
            setLocale(enUS);
        } else {
            moment.locale('zh-cn');
            setLocale(zhCN);
        }
    }

    useEffect(() => {
        if (!locale) {
            setLocale(zhCN);
        }
    }, [locale])

    return (
        <Fragment>
            <ConfigProvider locale={locale}>
                <Router>
                    <Layout>
                        <HeaderComponent langLocale={'zh-cn'} changeLocale={changeLocale} />
                    </Layout>
                    <Layout style={{ padding: '0px 0px 24px' }}>
                        <SliderComponent props={props} />
                        <Scrollbars ref={inputEl}>
                            <Layout style={{ padding: '0 24px 24px' }}>
                                <BreadcrumbComponent />
                                <Container RouterList={RouterList} />
                                <Sticky scrollbars={inputEl} />
                            </Layout>
                        </Scrollbars>
                    </Layout>
                </Router>
            </ConfigProvider>
        </Fragment>
    )
}

// export default class App extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             locale: enUS,
//         };

//         this.changeLocale = this.changeLocale.bind(this);
//     }

//     public changeLocale = (e: any) => {
//         if (e === 'en') {
//             moment.locale('en');
//             this.setState(() => ({ locale: enUS }));
//         } else {
//             moment.locale('zh-cn');
//             this.setState(() => ({ locale: zhCN }));
//         }
//     };

//     public render() {
//         const { locale } = this.state;
//         return (
//             <ConfigProvider locale={locale}>
//                 <Layout>
//                     <HeaderComponent langLocale={'en'} changeLocale={this.changeLocale} />
//                 </Layout>
//                 <Layout style={{ padding: '0 24px 24px' }}>
//                     <BreadcrumbComponent />
//                     <Content
//                         style={{
//                             background: '#fff',
//                             padding: 24,
//                             margin: 0,
//                             minHeight: 280,
//                         }}
//                     >
//                         Content
//                     </Content>
//                 </Layout>
//                 <Radio.Group value={locale} onChange={this.changeLocale}>
//                     <Radio.Button key="en" value={enUS}>
//                         English
//                     </Radio.Button>
//                     <Radio.Button key="cn" value={zhCN}>
//                         中文
//                     </Radio.Button>
//                 </Radio.Group>
//                 <div className="App">
//                     <header className="App-header">
//                         <div className="example">
//                             <Pagination defaultCurrent={1} total={50} showSizeChanger />
//                         </div>
//                         <img src={logo} className="App-logo" alt="logo" />
//                         <a
//                             className="App-link"
//                             href="https://reactjs.org"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             Learn React
//                         </a>
//                         <p>
//                             Edit <code>src/App.tsx</code> and save to reload.
//                         </p>
//                         <Button type="primary">Button</Button>
//                     </header>
//                 </div>
//             </ConfigProvider>
//         );
//     }
// }

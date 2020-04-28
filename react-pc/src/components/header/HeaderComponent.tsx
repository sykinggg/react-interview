import React from 'react';
import { Layout, Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import './HeaderComponent.scss';
const { Header } = Layout;
const { SubMenu } = Menu;



export default function HeaderComponent(props: any) {
    const langChangeLocale = (e: any) => {
        props.changeLocale(e.key);
    }
    const { langLocale } = props;
    return (
        <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[langLocale]}
                style={{ lineHeight: '32px' }}
            >
                <SubMenu className="langSetting"
                    title={
                        <span className="submenu-title-wrapper">
                            <SettingOutlined />
                            多语言选择
                             </span>
                    }
                >
                    <Menu.ItemGroup>
                        <Menu.Item key="en" onClick={langChangeLocale}>English</Menu.Item>
                        <Menu.Item key="cn" onClick={langChangeLocale}>中文</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
        </Header>
    )
}


// export default class HeaderComponent extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);

//         this.langChangeLocale = this.langChangeLocale.bind(this);
//     }

//     public langChangeLocale = (e: any) => {
//         this.props.changeLocale(e.key);
//     };

//     public render() {
//         const { langLocale } = this.props;
//         return (
//             <Header className="header">
//                 <div className="logo" />
//                 <Menu
//                     theme="dark"
//                     mode="horizontal"
//                     defaultSelectedKeys={[langLocale]}
//                     style={{ lineHeight: '32px' }}
//                 >
//                     <SubMenu className="langSetting"
//                         title={
//                             <span className="submenu-title-wrapper">
//                                 <Icon type="setting" />
//                                 多语言选择
//                             </span>
//                         }
//                     >
//                         <Menu.ItemGroup>
//                             <Menu.Item key="en" onClick={this.langChangeLocale}>English</Menu.Item>
//                             <Menu.Item key="cn" onClick={this.langChangeLocale}>中文</Menu.Item>
//                         </Menu.ItemGroup>
//                     </SubMenu>
//                 </Menu>
//             </Header>
//         )
//     }
// }


import { NavigationBaseBradcrumb } from './NavigationBaseBradcrumb';
import { NavigationIconBradcrumb } from './NavigationIconBradcrumb';
import { NavigationSeparatorBradcrumb } from './NavigationSeparatorBradcrumb';
import { NavigationSelectBradcrumb } from './NavigationSelectBradcrumb';

export * from './NavigationBaseBradcrumb';
export * from './NavigationIconBradcrumb';
export * from './NavigationSeparatorBradcrumb';
export * from './NavigationSelectBradcrumb';


export const asyncComponentArr = [
    {
        name: '面包屑 基本用法',
        component: NavigationBaseBradcrumb
    },
    {
        name: '带有图标的',
        component: NavigationIconBradcrumb
    },
    {
        name: '自定义分隔符',
        component: NavigationSeparatorBradcrumb
    },
    {
        name: '带下拉菜单的面包屑',
        component: NavigationSelectBradcrumb
    }
]
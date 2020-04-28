import { NavigationBaseAffix } from './NavigationBaseAffix';
import { NavigationFixedAffix } from './NavigationFixedAffix';
import { NavigationScrollAffix } from './NavigationScrollAffix';

export * from './NavigationBaseAffix';
export * from './NavigationFixedAffix';
export * from './NavigationScrollAffix';

export const asyncComponentArr = [
    {
        name: '图钉 基本用法',
        component: NavigationBaseAffix
    },
    {
        name: '固定状态改变的回调',
        component: NavigationFixedAffix
    },
    {
        name: '滚动容器',
        component: NavigationScrollAffix
    }
]

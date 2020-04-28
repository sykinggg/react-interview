import { NavigationBaseDropdown } from './NavigationBaseDropdown';
import { NavigationPositionDropdown } from './NavigationPositionDropdown';
import { NavigationDisabledDropdown } from './NavigationDisabledDropdown';
import { NavigationChangeDropdown } from './NavigationChangeDropdown';
import { NavigationSelectDropdown } from './NavigationSelectDropdown';
import { NavigationRightDropdown } from './NavigationRightDropdown';

export * from './NavigationBaseDropdown';
export * from './NavigationPositionDropdown';
export * from './NavigationDisabledDropdown';
export * from './NavigationChangeDropdown';
export * from './NavigationEventDropdown';
export * from './NavigationSelectDropdown';
export * from './NavigationRightDropdown';


export const asyncComponentArr = [
    {
        name: '下拉框 基本用法',
        component: NavigationBaseDropdown
    },
    {
        name: '弹出位置',
        component: NavigationPositionDropdown
    },
    {
        name: '移入触发',
        component: NavigationDisabledDropdown
    },
    {
        name: '点击触发',
        component: NavigationChangeDropdown
    },
    {
        name: '带下拉框的按钮',
        component: NavigationSelectDropdown
    },
    {
        name: '右键触发',
        component: NavigationRightDropdown
    }
]
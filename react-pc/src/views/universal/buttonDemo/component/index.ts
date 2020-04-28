import { ButtonTypeDemo } from './ButtonTypeDemo';
import { ButtonSizeDemo } from './ButtonSizeDemo';
import { ButtonLoadingDemo } from './ButtonLoadingDemo';
import { ButtonGhostDemo } from './ButtonGhostDemo';
import { ButtonBlockDemo } from './ButtonBlockDemo';
import { ButtonIconDemo } from './ButtonIconDemo';
import { ButtonEnableDemo } from './ButtonEnableDemo';
import { ButtonComplexDemo } from './ButtonComplexDemo';
import { ButtonDangerDemo } from './ButtonDangerDemo';

export * from './ButtonTypeDemo';
export * from './ButtonIconDemo';
export * from './ButtonSizeDemo';
export * from './ButtonEnableDemo';
export * from './ButtonLoadingDemo';
export * from './ButtonComplexDemo';
export * from './ButtonGhostDemo';
export * from './ButtonDangerDemo';
export * from './ButtonBlockDemo';


export const asyncComponentArr = [
    {
        name: '按钮类型',
        component: ButtonTypeDemo
    },
    {
        name: '按钮尺寸',
        component: ButtonSizeDemo
    },
    {
        name: '加载中',
        component: ButtonLoadingDemo
    },
    {
        name: '幽灵按钮',
        component: ButtonGhostDemo
    },
    {
        name: 'Block 按钮',
        component: ButtonBlockDemo
    },
    {
        name: '图标按钮',
        component: ButtonIconDemo
    },
    {
        name: '可用状态',
        component: ButtonEnableDemo
    },
    {
        name: '多个按钮组合',
        component: ButtonComplexDemo
    },
    {
        name: '警告按钮',
        component: ButtonDangerDemo
    }
]


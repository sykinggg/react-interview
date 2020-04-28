import { CheckboxBase } from './CheckboxBase';
import { CheckboxDisabled } from './CheckboxDisabled';
import { CheckboxLinkage } from './CheckboxLinkage';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxGrid } from './CheckboxGrid';

export * from './CheckboxBase';
export * from './CheckboxDisabled';
export * from './CheckboxLinkage';
export * from './CheckboxGroup';
export * from './CheckboxGrid';

export const asyncComponentArr = [
    {
        name: '多选框 基本使用',
        component: CheckboxBase
    },
    {
        name: '多选框 禁用',
        component: CheckboxDisabled
    },
    {
        name: '多选框 级联',
        component: CheckboxLinkage
    },
    {
        name: '多选框 组',
        component: CheckboxGroup
    },
    {
        name: '多选框 布局',
        component: CheckboxGrid
    },
]

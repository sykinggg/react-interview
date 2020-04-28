import { DocsCoreAttr } from './DocsCoreAttr';
import { DocsCoreComponentProps } from './DocsCoreComponentProps';
import { DocsStateLife } from './DocsStateLife';
import { DocsEvent } from './DocsEvent';
import { DocsCondition } from './DocsCondition';
import { DocsListKey } from './DocsListKey';
import { DocsForm } from './DocsForm';
import { DocsStateComponentOptimization } from './DocsStateComponentOptimization';
import { DocsCompositionInheritance } from './DocsCompositionInheritance';
import { DocsIdea } from './DocsIdea';
import { DocsFlux } from './DocsFlux';
import { DocsRedux } from './DocsRedux';

export * from './DocsCoreAttr';
export * from './DocsCoreComponentProps';
export * from './DocsStateLife';
export * from './DocsEvent';
export * from './DocsListKey';
export * from './DocsCondition';
export * from './DocsForm';
export * from './DocsStateComponentOptimization';
export * from './DocsCompositionInheritance';
export * from './DocsIdea';
export * from './DocsFlux';
export * from './DocsRedux';

export const asyncComponentArr = [
    {
        name: '元素渲染',
        component: DocsCoreAttr
    },
    {
        name: '组件 & Props',
        component: DocsCoreComponentProps
    },
    {
        name: 'State & 生命周期',
        component: DocsStateLife
    },
    {
        name: '事件处理',
        component: DocsEvent
    },
    {
        name: '条件渲染',
        component: DocsCondition
    },
    {
        name: '列表 & Key',
        component: DocsListKey
    },
    {
        name: '表单',
        component: DocsForm
    },
    {
        name: '组件中的基础状态提升',
        component: DocsStateComponentOptimization
    },
    {
        name: '组合&继承',
        component: DocsCompositionInheritance
    },
    {
        name: 'react 思路',
        component: DocsIdea
    },
    {
        name: 'flux 解决方案',
        component: DocsFlux
    },
    {
        name: 'redux',
        component: DocsRedux
    }
]

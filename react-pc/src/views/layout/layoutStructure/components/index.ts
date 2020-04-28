import { LayoutBaseStructure } from './LayoutBaseStructure';
import { LayoutUpMiddleDownStructure } from './LayoutUpMiddleDownStructure';
import { LayoutTopLeftStructure } from './LayoutTopLeftStructure';
import { LayoutTopSideStructure } from './LayoutTopSideStructure';
import { LayoutSideStructure } from './LayoutSideStructure';
import { LayoutCustomChangeStructure } from './LayoutCustomChangeStructure';
import { LayoutResponsiveStructure } from './LayoutResponsiveStructure';

export * from './LayoutBaseStructure';
export * from './LayoutUpMiddleDownStructure';
export * from './LayoutTopLeftStructure';
export * from './LayoutTopSideStructure';
export * from './LayoutSideStructure';
export * from './LayoutCustomChangeStructure';
export * from './LayoutResponsiveStructure';

export const asyncComponentArr = [
    {
        name: '基本结构',
        component: LayoutBaseStructure
    },
    {
        name: '上中下布局',
        component: LayoutUpMiddleDownStructure
    },
    {
        name: '顶部-侧边布局-通栏',
        component: LayoutTopLeftStructure
    },
    {
        name: '顶部-侧边布局',
        component: LayoutTopSideStructure
    },
    {
        name: '侧边布局',
        component: LayoutSideStructure
    },
    {
        name: '自定义触发器',
        component: LayoutCustomChangeStructure
    },
    {
        name: '响应式布局',
        component: LayoutResponsiveStructure
    }
]



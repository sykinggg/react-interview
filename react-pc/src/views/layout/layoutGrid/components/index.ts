import { LayoutBaseGrid } from './LayoutBaseGrid';
import { LayoutBlockGrid } from './layoutBlockGrid';
import { LayoutOffsetGrid } from './LayoutOffsetGrid';
import { LayoutColumnSequenceGrid } from './LayoutColumnSequenceGrid';
import { LayoutTypesettingGrid } from './LayoutTypesettingGrid';
import { LayoutAlignedGrid } from './LayoutAlignedGrid';
import { LayoutRowSequenceGrid } from './LayoutRowSequenceGrid';
import { LayoutFlexGrid } from './LayoutFlexGrid';
import { LayoutResponsiveGrid } from './LayoutResponsiveGrid';
import { LayoutAttrResponsiveGrid } from './LayoutAttrResponsiveGrid';
import { LayoutDesignGrid } from './LayoutDesignGrid';

export * from './LayoutBaseGrid';
export * from './layoutBlockGrid';
export * from './LayoutOffsetGrid';
export * from './LayoutColumnSequenceGrid';
export * from './LayoutTypesettingGrid';
export * from './LayoutAlignedGrid';
export * from './LayoutRowSequenceGrid';
export * from './LayoutFlexGrid';
export * from './LayoutResponsiveGrid';
export * from './LayoutAttrResponsiveGrid';
export * from './LayoutDesignGrid';

export const asyncComponentArr = [
    {
        name: '基础栅格',
        component: LayoutBaseGrid
    },
    {
        name: '区块间隔',
        component: LayoutBlockGrid
    },
    {
        name: '列偏移',
        component: LayoutOffsetGrid
    },
    {
        name: '栅格排序',
        component: LayoutColumnSequenceGrid
    },
    {
        name: '排版',
        component: LayoutTypesettingGrid
    },
    {
        name: '对齐',
        component: LayoutAlignedGrid
    },
    {
        name: '行排序',
        component: LayoutRowSequenceGrid
    },
    {
        name: 'Flex 填充',
        component: LayoutFlexGrid
    },
    {
        name: '响应式布局(类bootstrap)',
        component: LayoutResponsiveGrid
    },
    {
        name: '其他属性响应式布局',
        component: LayoutAttrResponsiveGrid
    },
    {
        name: '栅格配置器',
        component: LayoutDesignGrid
    }
]
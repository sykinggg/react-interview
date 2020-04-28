import { NavigationBasePagination } from './NavigationBasePagination';
import { NavigationMorePagination } from './NavigationMorePagination';
import { NavigationChangePagination } from './NavigationChangePagination';
import { NavigationJumpPagination } from './NavigationJumpPagination';
import { NavigationSmallPagination } from './NavigationSmallPagination';
import { NavigationSimplePagination } from './NavigationSimplePagination';
import { NavigationOnChangePagination } from './NavigationOnChangePagination';
import { NavigationAllPagination } from './NavigationAllPagination';
import { NavigationConfigPagination } from './NavigationConfigPagination';
import { NavigationTextPagination } from './NavigationTextPagination';

export * from './NavigationBasePagination';
export * from './NavigationMorePagination';
export * from './NavigationChangePagination';
export * from './NavigationJumpPagination';
export * from './NavigationSmallPagination';
export * from './NavigationSimplePagination';
export * from './NavigationOnChangePagination';
export * from './NavigationAllPagination';
export * from './NavigationConfigPagination';
export * from './NavigationTextPagination';

export const asyncComponentArr = [
    {
        name: '分页 基本用法',
        component: NavigationBasePagination
    },
    {
        name: '分页...',
        component: NavigationMorePagination
    },
    {
        name: '分页条目数',
        component: NavigationChangePagination
    },
    {
        name: '分页跳转',
        component: NavigationJumpPagination
    },
    {
        name: '分页样式',
        component: NavigationSmallPagination
    },
    {
        name: '简洁分页',
        component: NavigationSimplePagination
    },
    {
        name: '分页受控',
        component: NavigationOnChangePagination
    },
    {
        name: '分页总数展示',
        component: NavigationAllPagination
    },
    {
        name: '配置信息全部展示',
        component: NavigationConfigPagination
    },
    {
        name: '分页自定义文字',
        component: NavigationTextPagination
    },
]

import { NavigationTopMenu } from './NavigationTopMenu';
import { NavigationInlineMenu } from './NavigationInlineMenu';
import { NavigationShrinkMenu } from './NavigationShrinkMenu';
import { NavigationConciseMenu } from './NavigationConciseMenu';
import { NavigationVerticalMenu } from './NavigationVerticalMenu';
import { NavigationThemeMenu } from './NavigationThemeMenu';
import { NavigationTypeMenu } from './NavigationTypeMenu';

export * from './NavigationTopMenu';
export * from './NavigationInlineMenu';
export * from './NavigationShrinkMenu';
export * from './NavigationConciseMenu';
export * from './NavigationVerticalMenu';
export * from './NavigationThemeMenu';
export * from './NavigationTypeMenu';

export const asyncComponentArr = [
    {
        name: '顶部导航',
        component: NavigationTopMenu
    },
    {
        name: '内嵌菜单',
        component: NavigationInlineMenu
    },
    {
        name: '菜单伸缩',
        component: NavigationShrinkMenu
    },
    {
        name: '简洁菜单',
        component: NavigationConciseMenu
    },
    {
        name: '拉伸菜单',
        component: NavigationVerticalMenu
    },
    {
        name: '菜单主题',
        component: NavigationThemeMenu
    },
    {
        name: '菜单类型',
        component: NavigationTypeMenu
    },
]
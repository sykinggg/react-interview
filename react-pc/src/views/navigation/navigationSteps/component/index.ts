import { NavigationBaseSteps } from './NavigationBaseSteps';
import { NavigationSmallSteps } from './NavigationSmallSteps';
import { NavigationIconSteps } from './NavigationIconSteps';
import { NavigationSwitchSteps } from './NavigationSwitchSteps';
import { NavigationVerticalSteps } from './NavigationVerticalSteps';
import { NavigationVerticalSmallSteps } from './NavigationVerticalSmallSteps';
import { NavigationStateSteps } from './NavigationStateSteps';
import { NavigationPointSteps } from './NavigationPointSteps';
import { NavigationPointCustomSteps } from './NavigationPointCustomSteps';
import { NavigationClickSteps } from './NavigationClickSteps';
import { NavigationTabSteps } from './NavigationTabSteps';

export * from './NavigationBaseSteps';
export * from './NavigationSmallSteps';
export * from './NavigationIconSteps';
export * from './NavigationSwitchSteps';
export * from './NavigationVerticalSteps';
export * from './NavigationVerticalSmallSteps';
export * from './NavigationStateSteps';
export * from './NavigationPointSteps';
export * from './NavigationPointCustomSteps';
export * from './NavigationClickSteps';
export * from './NavigationTabSteps';

export const asyncComponentArr = [
    {
        name: '基础使用',
        component: NavigationBaseSteps
    },
    {
        name: '迷你样式',
        component: NavigationSmallSteps
    },
    {
        name: 'icon',
        component: NavigationIconSteps
    },
    {
        name: '切换',
        component: NavigationSwitchSteps
    },
    {
        name: '垂直方向',
        component: NavigationVerticalSteps
    },
    {
        name: '垂直方向迷你样式',
        component: NavigationVerticalSmallSteps
    },
    {
        name: '步骤状态',
        component: NavigationStateSteps
    },
    {
        name: '点状步骤条',
        component: NavigationPointSteps
    },
    {
        name: '自定义点状步骤条',
        component: NavigationPointCustomSteps
    },
    {
        name: '可点击',
        component: NavigationClickSteps
    },
    {
        name: '导航步骤条',
        component: NavigationTabSteps
    },
]

import { lazy } from 'react';

export const RouterList = {
    defaultName: 'Test1',
    linkArr: [
        {
            component: lazy(() => import('../../../views/dashboard/analysis/Analysis')),
            synchronize: false,
            link: 'dashboard/analysis',
            name: 'analysis'
        },
        {
            component: lazy(() => import('../../../views/dashboard/monitor/Monitor')),
            synchronize: false,
            link: 'dashboard/monitor',
            name: 'monitor'
        },
        {
            component: lazy(() => import('../../../views/dashboard/workbench/Workbench')),
            synchronize: false,
            link: 'dashboard/workbench',
            name: 'workbench'
        },
        {
            component: lazy(() => import('../../../views/dashboard/interview/Interview')),
            synchronize: false,
            link: 'dashboard/interview',
            name: 'interview'
        }
    ]
}
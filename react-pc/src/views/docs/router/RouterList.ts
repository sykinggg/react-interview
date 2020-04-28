import { lazy } from 'react';

export const RouterList = {
    defaultName: 'Test1',
    linkArr: [
        {
            component: lazy(() => import('../../../views/docs/core/Core')),
            synchronize: false,
            link: 'docs/core',
            name: 'core'
        },
        {
            component: lazy(() => import('../../../views/docs/advancedGuidelines/AdvancedGuidelines')),
            synchronize: false,
            link: 'docs/advancedGuidelines',
            name: 'advancedGuidelines'
        },
        {
            component: lazy(() => import('../../../views/docs/antdComponent/AntdComponent')),
            synchronize: false,
            link: 'docs/antdComponent',
            name: 'antdComponent'
        }
    ]
}
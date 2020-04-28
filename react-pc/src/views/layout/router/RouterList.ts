import { lazy } from 'react';

export const RouterList = {
    defaultName: 'layout',
    linkArr: [
        {
            component: lazy(() => import('../layoutGrid/LayoutGrid')),
            synchronize: false,
            link: 'layout/grid',
            name: 'grid'
        },
        {
            component: lazy(() => import('../layoutStructure/LayoutStructure')),
            synchronize: false,
            link: 'layout/structure',
            name: 'structure'
        }
    ]
}

import { lazy } from 'react';

export const RouterList = {
    defaultName: 'layout',
    linkArr: [
        {
            component: lazy(() => import('../navigationAffix/NavigationAffix')),
            synchronize: false,
            link: 'navigation/affix',
            name: 'affix'
        },
        {
            component: lazy(() => import('../navigationBreadcrumb/NavigationBreadcrumb')),
            synchronize: false,
            link: 'navigation/breadcrumb',
            name: 'breadcrumb'
        },
        {
            component: lazy(() => import('../naviagtionDropdown/NaviagtionDropdown')),
            synchronize: false,
            link: 'navigation/dropdown',
            name: 'dropdown'
        },
        {
            component: lazy(() => import('../navigationMenu/NavigationMenu')),
            synchronize: false,
            link: 'navigation/menu',
            name: 'menu'
        },
        {
            component: lazy(() => import('../navigationPagination/NavigationPagination')),
            synchronize: false,
            link: 'navigation/pagination',
            name: 'pagination'
        },
        {
            component: lazy(() => import('../navigationSteps/NavigationSteps')),
            synchronize: false,
            link: 'navigation/steps',
            name: 'steps'
        }
    ]
}

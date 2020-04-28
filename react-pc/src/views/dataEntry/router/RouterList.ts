import { lazy } from 'react';

export const RouterList = {
    defaultName: 'dataEntry',
    linkArr: [
        {
            component: lazy(() => import('../autoComplete/AutoComplete')),
            synchronize: false,
            link: 'dataEntry/autoComplete',
            name: 'autoComplete'
        },
        {
            component: lazy(() => import('../checkbox/Checkbox')),
            synchronize: false,
            link: 'dataEntry/checkbox',
            name: 'checkbox'
        },
        {
            component: lazy(() => import('../form/Form')),
            synchronize: false,
            link: 'dataEntry/form',
            name: 'form'
        },
        {
            component: lazy(() => import('../slider/Slider')),
            synchronize: false,
            link: 'dataEntry/slider',
            name: 'slider'
        },
        {
            component: lazy(() => import('../treeSelect/TreeSelect')),
            synchronize: false,
            link: 'dataEntry/treeSelect',
            name: 'treeSelect'
        },
    ]
}

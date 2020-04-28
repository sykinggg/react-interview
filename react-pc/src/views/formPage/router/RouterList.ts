import { lazy } from 'react';

export const RouterList = {
    defaultName: 'routerList',
    linkArr: [
        {
            component: lazy(() => import('../../../views/formPage/basicForm/BasicForm')),
            synchronize: false,
            link: 'formPage/basicForm',
            name: 'basicForm'
        },
    ]
}

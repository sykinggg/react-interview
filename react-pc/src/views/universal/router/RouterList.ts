import { lazy } from 'react';

export const RouterList = {
    defaultName: 'universal',
    linkArr: [
        {
            component: lazy(() => import('../buttonDemo/ButtonDemo')),
            synchronize: false,
            link: 'universal/button',
            name: 'button'
        },
        {
            component: lazy(() => import('../iconDemo/IconDemo')),
            synchronize: false,
            link: 'universal/icon',
            name: 'icon'
        },
        {
            component: lazy(() => import('../typographyDemo/TypographyDemo')),
            synchronize: false,
            link: 'universal/typography',
            name: 'typography'
        }
    ]
}

import { lazy } from 'react';

export const RouterList = {
    defaultName: 'Test1',
    linkArr: [
        {
            component: lazy(() => import('../views/docs/Docs')),
            synchronize: false,
            link: 'docs',
            name: '文档',
            children: [
                {
                    link: 'docs/core',
                    name: '核心'
                },
                {
                    link: 'docs/advancedGuidelines',
                    name: '高阶'
                },
                {
                    link: 'docs/antdComponent',
                    name: '组件汇总'
                }
            ]
        },
        {
            component: lazy(() => import('../views/universal/Universal')),
            synchronize: false,
            link: 'universal',
            name: 'universal',
            children: [
                {
                    link: 'universal/button',
                    name: 'button'
                },
                {
                    link: 'universal/icon',
                    name: 'icon'
                },
                {
                    link: 'universal/typography',
                    name: 'typography 排版'
                }
            ]
        },
        {
            component: lazy(() => import('../views/layout/Layout')),
            synchronize: false,
            link: 'layout',
            name: 'layout',
            children: [
                {
                    link: 'layout/grid',
                    name: 'grid'
                },
                {
                    link: 'layout/structure',
                    name: 'structure'
                }
            ]
        },
        {
            component: lazy(() => import('../views/navigation/Navigation')),
            synchronize: false,
            link: 'navigation',
            name: 'navigation',
            children: [
                {
                    link: 'navigation/affix',
                    name: 'affix'
                },
                {
                    link: 'navigation/breadcrumb',
                    name: 'breadcrumb'
                },
                {
                    link: 'navigation/dropdown',
                    name: 'dropdown'
                },
                {
                    link: 'navigation/menu',
                    name: 'menu'
                },
                {
                    link: 'navigation/pagination',
                    name: 'pagination'
                },
                {
                    link: 'navigation/steps',
                    name: 'steps'
                }
            ]
        },
        {
            component: lazy(() => import('../views/dataEntry/DataEntry')),
            synchronize: false,
            link: 'dataEntry',
            name: 'dataEntry',
            children: [
                {
                    link: 'dataEntry/autoComplete',
                    name: 'autoComplete'
                },
                {
                    link: 'dataEntry/checkbox',
                    name: 'checkbox'
                },
                {
                    link: 'dataEntry/form',
                    name: 'form'
                },
                {
                    link: 'dataEntry/slider',
                    name: 'slider'
                },
                {
                    link: 'dataEntry/treeSelect',
                    name: 'treeSelect'
                }
            ]
        },
        {
            component: lazy(() => import('../views/dashboard/Dashboard')),
            synchronize: false,
            link: 'dashboard',
            name: 'dashboard',
            children: [
                {
                    link: 'dashboard/analysis',
                    name: 'analysis'
                },
                {
                    link: 'dashboard/monitor',
                    name: 'monitor'
                },
                {
                    link: 'dashboard/workbench',
                    name: 'workbench'
                },
                {
                    link: 'dashboard/interview',
                    name: 'interview'
                }
            ]
        },
        {
            component: lazy(() => import('../views/formPage/FormPage')),
            synchronize: false,
            link: 'formPage',
            name: 'formPage',
            children: [
                {
                    link: 'formPage/basicForm',
                    name: 'basicForm'
                }
            ]
        },
        {
            component: lazy(() => import('../views/Test1')),
            synchronize: false,
            link: 'Test1',
            name: 'Test1',
            children: []
        },
        {
            component: lazy(() => import('../views/Test2')),
            synchronize: false,
            link: 'Test2',
            name: 'Test2',
            children: []
        }
    ]
}
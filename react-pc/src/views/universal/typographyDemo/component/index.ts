import { TypographyBaseDemo } from './TypographyBaseDemo';
import { TypographyTitleDemo } from './TypographyTitleDemo';
import { TypographyTextDemo } from './TypographyTextDemo';
import { TypographyInteractionDemo } from './TypographyInteractionDemo';
import { TypographyEllipsisDemo } from './TypographyEllipsisDemo';
import { TypographySuffixDemo } from './TypographySuffixDemo';

export * from './TypographyBaseDemo';
export * from './TypographyTitleDemo';
export * from './TypographyTextDemo';
export * from './TypographyInteractionDemo';
export * from './TypographyEllipsisDemo';
export * from './TypographySuffixDemo';

export const choiceList = [
    'Typography排版'
];

export const asyncComponentArr = [
    {
        name: 'Typography排版',
        component: TypographyBaseDemo
    },
    {
        name: '标题组件',
        component: TypographyTitleDemo
    },
    {
        name: '文本组件',
        component: TypographyTextDemo
    },
    {
        name: '文本交互组件',
        component: TypographyInteractionDemo
    },
    {
        name: '文本省略设置',
        component: TypographyEllipsisDemo
    },
    {
        name: '文本省略操作',
        component: TypographySuffixDemo
    }
]

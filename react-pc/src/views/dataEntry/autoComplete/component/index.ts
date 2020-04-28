import { AutoCompleteBase } from './AutoCompleteBase';
import { AutoCompleteCustom } from './AutoCompleteCustom';
import { AutoCompleteCustomComponent } from './AutoCompleteCustomComponent';
import { AutoCompleteToUpperCase } from './AutoCompleteToUpperCase';
import { AutoCompleteSearch } from './AutoCompleteSearch';

export * from './AutoCompleteBase';
export * from './AutoCompleteCustom';
export * from './AutoCompleteCustomComponent';
export * from './AutoCompleteToUpperCase';
export * from './AutoCompleteSearch';

export const asyncComponentArr = [
    {
        name: '基本使用',
        component: AutoCompleteBase
    },
    {
        name: '自定义使用',
        component: AutoCompleteCustom
    },
    {
        name: '自定义嵌套组件',
        component: AutoCompleteCustomComponent
    },
    {
        name: '不区分大小写',
        component: AutoCompleteToUpperCase
    },
    {
        name: '查询模式',
        component: AutoCompleteSearch
    },
]

import { FormBase } from './FormBase';

import { FormInteraction } from './FormInteraction';

import { FormRef } from './FormRef';

import { FormGrid } from './FormGrid';

import { FormSize } from './FormSize';

import { FormDynamic } from './FormDynamic';

import { FormNested } from './FormNested';

import { FormComplex } from './FormComplex';

import { FormCustom } from './FormCustom';

import { FormOutsideData } from './FormOutsideData';

import { FormLinkage } from './FormLinkage';

import { FormInlineLogin } from './FormInlineLogin';

import { FormLogin } from './FormLogin';

import { FormRegister } from './FormRegister';

import { FormAdvancedSearch } from './FormAdvancedSearch';

import { FormModal } from './FormModal';

import { FormTime } from './FormTime';

import { FormValidateCustom } from './FormValidateCustom';

import { FormValidateCustomRule } from './FormValidateCustomRule';

import { FormValidateDynamic } from './FormValidateDynamic';

import { FormValidateOtherComponent } from './FormValidateOtherComponent';

export * from './FormBase';
export * from './FormInteraction';
export * from './FormRef';
export * from './FormGrid';
export * from './FormSize';
export * from './FormDynamic';
export * from './FormNested';
export * from './FormComplex';
export * from './FormCustom';
export * from './FormOutsideData';
export * from './FormLinkage';
export * from './FormInlineLogin';
export * from './FormLogin';
export * from './FormRegister';
export * from './FormAdvancedSearch';
export * from './FormModal';
export * from './FormTime';
export * from './FormValidateCustom';
export * from './FormValidateCustomRule';
export * from './FormValidateDynamic';
export * from './FormValidateOtherComponent';

export const asyncComponentArr = [
    {name: '表单 基础应用', component: FormBase},
    {name: '表单 交互', component: FormInteraction},
    {name: '表单 ref调用', component: FormRef},
    {name: '表单 布局', component: FormGrid},
    {name: '表单 尺寸', component: FormSize},
    {name: '表单 动态增减', component: FormDynamic},
    {name: '表单 嵌套', component: FormNested},
    {name: '表单 复杂引用', component: FormComplex},
    {name: '表单 自定义组件', component: FormCustom},
    {name: '表单 数据外部存储', component: FormOutsideData},
    {name: '表单 联动', component: FormLinkage},
    {name: '表单 内联登录', component: FormInlineLogin},
    {name: '表单 登录框', component: FormLogin},
    {name: '表单 注册', component: FormRegister},
    {name: '表单 高级搜索', component: FormAdvancedSearch},
    {name: '表单 弹出层', component: FormModal},
    {name: '表单 时间组件', component: FormTime},
    {name: '表单 自定义校验', component: FormValidateCustom},
    {name: '表单 自定义校验规则', component: FormValidateCustomRule},
    {name: '表单 动态校验规则', component: FormValidateDynamic},
    {name: '表单 校验组件demo', component: FormValidateOtherComponent}
]

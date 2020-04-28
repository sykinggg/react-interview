import {asyncComponentArr as naviagtionDropdown} from './naviagtionDropdown/component';
import {asyncComponentArr as navigationAffix} from './navigationAffix/component';
import {asyncComponentArr as navigationBreadcrumb} from './navigationBreadcrumb/component';
import {asyncComponentArr as navigationMenu} from './navigationMenu/component';
import {asyncComponentArr as navigationPagination} from './navigationPagination/component';
import {asyncComponentArr as navigationSteps} from './navigationSteps/component';

export const navigationAntdComponent = naviagtionDropdown.concat(navigationAffix, navigationBreadcrumb, navigationMenu, navigationPagination, navigationSteps);
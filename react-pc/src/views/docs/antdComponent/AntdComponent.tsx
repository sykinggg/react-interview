import React, { Fragment } from "react";
import { ChoiceCheckbox } from "../../../components";

import { layoutAntdComponent } from '../../layout';
import { buttonAntdComponent } from '../../universal';
import { navigationAntdComponent } from '../../navigation';

export default function AntdComponent() {

    const allComponent = layoutAntdComponent.concat(buttonAntdComponent, navigationAntdComponent);

    return (
        <Fragment>
            <ChoiceCheckbox name="antd component 组件汇总" componentArr={allComponent} />
        </Fragment>
    )
}
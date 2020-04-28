import React, { useState, useEffect } from 'react';
import './ChoiceCheckbox.scss';
import { Card, Checkbox } from 'antd';
import AsyncComponent from '../asyncComponent/AsyncComponent';

const CheckboxGroup = Checkbox.Group;

export interface choiceAsyncComponentArr {
    name: string;
    component: any;
}

export interface choiceCheckboxProps {
    name: string;
    componentArr: choiceAsyncComponentArr[];
    choiceList?: string[];
}

export function ChoiceCheckbox(props: choiceCheckboxProps) {

    const { name, componentArr, choiceList } = props;

    const [checkedList, setCheckedList] = useState<any[]>(choiceList || []);
    const [indeterminate, setIndeterminate] = useState<boolean>(Boolean(choiceList));
    const [checkAll, setCheckAll] = useState<boolean>(false);
    const [plainOptions, setPlainOptions] = useState<any[]>([]);
    const [asyncCom, setAsyncCom] = useState<any[]>([]);

    const onChange = (checkedList: any) => {
        setCheckedList(checkedList);
        setIndeterminate(!!checkedList.length && checkedList.length < plainOptions.length);
        setCheckAll(checkedList.length === plainOptions.length);
    }

    const onCheckAllChange = (e: { target: { checked: React.SetStateAction<boolean>; }; }) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    }

    useEffect(() => {
        let optionArr: any[] = [];
        componentArr.forEach(item => {
            optionArr.push(item.name);
        })
        setPlainOptions(optionArr);
    }, [componentArr]);

    useEffect(() => {
        let comArr: any[] = [];
        componentArr.forEach((item: any, i: number) => {
            if (checkedList.indexOf(item.name) + 1) {
                comArr.push(
                    {
                        name: item.name,
                        component: item.component
                    }
                );
            }
        })
        setAsyncCom(comArr);
    }, [checkedList, componentArr])

    return (
        <Card title={name}>
            <div className="site-checkbox-all-wrapper">
                <Checkbox
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                    checked={checkAll}
                >
                    Check all
                    </Checkbox>
            </div>
            <br />
            {
                plainOptions && plainOptions.length
                    ? <CheckboxGroup
                        options={plainOptions}
                        value={checkedList || []}
                        onChange={onChange}
                    />
                    : ''
            }
            {/* {JSON.stringify(checkedList)} */}
            {
                // componentArr.forEach((item: any, i: number) => {
                //     if (checkedList.indexOf(item.name) + 1) {
                //         return (
                //             <AsyncComponent key={item.name} {...props} LoadAsyncComponent={item.component} />
                //         )
                //     }
                // })
                Boolean(asyncCom) && Boolean(asyncCom.length) && asyncCom.map((item: any, i: number) => {
                    return (
                        <AsyncComponent {...props} key={item.name} LoadAsyncComponent={item.component} />
                    )
                })
            }
        </Card >
    )
}

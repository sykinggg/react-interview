import React, { Fragment, useState, useEffect } from 'react';
import './Monitor.scss';
import { getAllPermissionList, httpSetPic, httpGetPic, httpGetMm131BasicClass } from './TestRequest';
import { Button, Select } from 'antd';
import WaterFallComponent from '../../../components/waterFall/WaterFallComponent';

export default function Monitor(props: any) {
    const [typeArr] = useState(['5aav', 'jiandan', 'mmJpg']);
    const [choiceType, setChoiceType] = useState(typeArr[0]);
    const [imgValue, setImgValue] = useState([]);

    useEffect(() => {
        getAllPermissionList().then((res) => {
            console.log(res);
        });
    }, []);

    const setPic = () => {
        httpSetPic(choiceType).then((res) => {
            console.log(res);
        })
    }

    const getPic = () => {
        httpGetPic(choiceType).then((res: any) => {
            console.log(res);
            if (res && res.address && res.address.length) {
                setImgValue(res.address);
            }
        })
    }

    const getMm131BasicClass = () => {
        httpGetMm131BasicClass().then((res: any) => {
            console.log(res);
        })
    }

    const elementOptions = (item: any) => {
        return (
            <Select.Option value={item} key={item}>
                {item}
            </Select.Option>
        )
    };

    return (
        <Fragment>
            <Select defaultValue={typeArr[0]} onChange={setChoiceType} >
                {typeArr.map(item => elementOptions(item))}
            </Select>
            <Button onClick={setPic}>setPic</Button>
            <Button onClick={getPic}>getPic</Button>
            <Button onClick={getMm131BasicClass}>getMm131BasicClass</Button>
            <WaterFallComponent title="瀑布流" imgArr={imgValue} />
        </Fragment>
    )
}

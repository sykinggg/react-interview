import React, { useState, useEffect, useCallback } from 'react';
import { Card, Slider, Row, Col } from 'antd';
import './LayoutDesignGrid.scss';

export interface designItem {
    [key: number]: number;
}

export function LayoutDesignGrid() {

    const [gutterKey, setGutterKey] = useState<number>(1);
    const [vgutterKey, setVgutterKey] = useState<number>(1);
    const [colCountKey, setColCountKey] = useState<number>(2);

    const [gutters, setGutters] = useState<designItem>({});
    const [vgutters, setVgutters] = useState<designItem>({});
    const [colCounts, setColCounts] = useState<designItem>({});

    const [cols, setCols] = useState<any[]>([]);
    const [colCode, setColCode] = useState<string>('');

    const onGutterChange = (gutterKey: any) => {
        setGutterKey(gutterKey);
    }

    const onVGutterChange = (vgutterKey: any) => {
        setVgutterKey(vgutterKey);
    };

    const onColCountChange = (colCountKey: any) => {
        setColCountKey(colCountKey);
    };

    const defaultKey = () => {
        let item: designItem = {};
        [8, 16, 24, 32, 40, 48].forEach((value, i) => {
            item[i] = value;
        });
        setGutters(item);
        item = {};
        [8, 16, 24, 32, 40, 48].forEach((value, i) => {
            item[i] = value;
        });
        setVgutters(item);
        item = {};
        [2, 3, 4, 6, 8, 12].forEach((value, i) => {
            item[i] = value;
        });
        setColCounts(item);
    }

    const defaultElement = useCallback(() => {
        let colsItem = [];
        let colCodeItem = '';
        const colCount = colCounts[colCountKey];
        for (let i = 0; i < colCount; i++) {
            colsItem.push(
                <Col key={i.toString()} span={24 / colCount}>
                    <div>Column</div>
                </Col>,
            );
            colCodeItem += `  <Col span={${24 / colCount}} />\n`;
        }
        setCols(colsItem);
        setColCode(colCodeItem);
    }, [colCounts, colCountKey]);

    useEffect(() => {
        defaultKey();
    }, []);

    // 第一种写法
    useEffect(() => {
        defaultElement();
    }, [defaultElement])

    // 第二种写法
    // useEffect(() => {
    //     let colsItem = [];
    //     let colCodeItem = '';
    //     const colCount = colCounts[colCountKey];
    //     for (let i = 0; i < colCount; i++) {
    //         colsItem.push(
    //             <Col key={i.toString()} span={24 / colCount}>
    //                 <div>Column</div>
    //             </Col>,
    //         );
    //         colCodeItem += `  <Col span={${24 / colCount}} />\n`;
    //     }
    //     setCols(colsItem);
    //     setColCode(colCodeItem);
    // }, [colCounts, colCountKey])
    return (
        <Card id="components-grid-demo-playground" title="栅格配置器">
            <span style={{ marginRight: 6 }}>Horizontal Gutter (px): </span>
            <div style={{ width: '50%' }}>
                <Slider
                    min={0}
                    max={Object.keys(gutters).length - 1}
                    value={gutterKey}
                    onChange={onGutterChange}
                    marks={gutters}
                    step={null}
                />
            </div>
            <span style={{ marginRight: 6 }}>Vertical Gutter (px): </span>
            <div style={{ width: '50%' }}>
                <Slider
                    min={0}
                    max={Object.keys(vgutters).length - 1}
                    value={vgutterKey}
                    onChange={onVGutterChange}
                    marks={vgutters}
                    step={null}
                />
            </div>
            <span style={{ marginRight: 6 }}>Column Count:</span>
            <div style={{ width: '50%', marginBottom: 48 }}>
                <Slider
                    min={0}
                    max={Object.keys(colCounts).length - 1}
                    value={colCountKey}
                    onChange={onColCountChange}
                    marks={colCounts}
                    step={null}
                />
            </div>
            <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
            <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
            <pre>{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}</Row>`}</pre>
            <pre>{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}</Row>`}</pre>
        </Card>
    )
}

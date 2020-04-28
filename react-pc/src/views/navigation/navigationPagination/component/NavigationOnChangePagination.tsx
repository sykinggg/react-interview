import React, { useState } from "react";
import { Card, Pagination } from "antd";

export function NavigationOnChangePagination() {

    const [current, setCurrent] = useState<number>(3);

    function onChange(page: React.SetStateAction<number>) {
        setCurrent(page);
    }

    return (
        <Card id="components-pagination-demo-onChange" title="分页受控">
            <Pagination current={current} onChange={onChange} total={50} />
        </Card>
    )
}
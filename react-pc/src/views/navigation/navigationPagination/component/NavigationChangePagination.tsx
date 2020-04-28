import React from "react";
import { Card, Pagination } from "antd";

export function NavigationChangePagination() {

    function onShowSizeChange(current: any, pageSize: any) {
        console.log(current, pageSize);
    }

    return (
        <Card id="components-pagination-demo-change" title="分页条目数">
            <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
            />
            <br />
            <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
                disabled
            />
        </Card>
    )
}
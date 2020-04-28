import React from "react";
import { Card, Pagination } from "antd";

export function NavigationSmallPagination() {

    function showTotal(total: number, range: [number, number]) {
        return `Total ${total} items, range ${range}`;
    }

    return (
        <Card id="components-pagination-demo-small" title="分页样式">
            <Pagination size="small" total={50} />
            <Pagination size="small" total={50} showSizeChanger showQuickJumper />
            <Pagination size="small" total={50} showTotal={showTotal} />
        </Card>
    )
}
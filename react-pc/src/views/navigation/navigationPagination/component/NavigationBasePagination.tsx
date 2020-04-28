import React from "react";
import { Card, Pagination } from "antd";

export function NavigationBasePagination() {
    return (
        <Card id="components-pagination-demo-base" title="分页 基本用法">
            <Pagination defaultCurrent={1} total={50} />
        </Card>
    )
}
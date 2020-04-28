import React from "react";
import { Card, Pagination } from "antd";

export function NavigationMorePagination() {
    return (
        <Card id="components-pagination-demo-more" title="分页...">
            <Pagination defaultCurrent={6} total={500} />
        </Card>
    )
}
import React from "react";
import { Card, Pagination } from "antd";

export function NavigationSimplePagination() {
    return (
        <Card id="components-pagination-demo-simple" title="简洁分页">
            <Pagination simple defaultCurrent={2} total={50} />
        </Card>
    )
}
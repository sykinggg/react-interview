import React from "react";
import { Card, Pagination } from "antd";

export function NavigationJumpPagination() {

    function onChange(pageNumber: any) {
        console.log('Page: ', pageNumber);
    }

    return (
        <Card id="components-pagination-demo-jump" title="分页跳转">
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            <br />
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
        </Card>
    )
}
import React from "react";
import { Card, Pagination } from "antd";

export function NavigationAllPagination() {
    return (
        <Card id="components-pagination-demo-all" title="分页总数展示">
            <Pagination
                total={85}
                showTotal={total => `Total ${total} items`}
                pageSize={20}
                defaultCurrent={1}
            />
            <br />
            <Pagination
                total={85}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                pageSize={20}
                defaultCurrent={1}
            />
        </Card>
    )
}
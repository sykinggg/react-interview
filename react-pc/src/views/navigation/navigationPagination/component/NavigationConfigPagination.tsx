import React from "react";
import { Card, Pagination } from "antd";

export function NavigationConfigPagination() {
    return (
        <Card id="components-pagination-demo-config" title="配置信息全部展示">
            <Pagination
                total={85}
                showSizeChanger
                showQuickJumper
                showTotal={total => `Total ${total} items`}
            />
        </Card>
    )
}
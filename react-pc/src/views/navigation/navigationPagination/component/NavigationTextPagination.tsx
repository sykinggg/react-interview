import React from "react";
import { Card, Pagination } from "antd";

export function NavigationTextPagination() {

    function itemRender(current: any, type: string, originalElement: any) {
        console.log(current);
        if (type === 'prev') {
            return <span>Previous</span>;
        }
        if (type === 'next') {
            return <span>Next</span>;
        }
        return originalElement;
    }

    return (
        <Card id="components-pagination-demo-text" title="分页自定义文字">
            <Pagination total={500} itemRender={itemRender} />
        </Card>
    )
}
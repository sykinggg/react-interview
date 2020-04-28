import React, { useState } from "react";
import { Card, TreeSelect } from "antd";

const { TreeNode } = TreeSelect;

export function TreeSelectCheckbox() {

    const [value, setValue] = useState<any>(['parent 1', 'parent 1-0']);

    const onChange = (value: any) => {
        setValue(value);
    }

    return (
        <Card id="components-treeSelect-demo-checkbox" title="树选择 多选">
            <TreeSelect
                showSearch
                style={{ width: '100%' }}
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                multiple
                treeDefaultExpandAll
                onChange={onChange}
            >
                <TreeNode value="parent 1" title="parent 1">
                    <TreeNode value="parent 1-0" title="parent 1-0">
                        <TreeNode value="leaf1" title="my leaf" />
                        <TreeNode value="leaf2" title="your leaf" />
                    </TreeNode>
                    <TreeNode value="parent 1-1" title="parent 1-1">
                        <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} />
                    </TreeNode>
                </TreeNode>
            </TreeSelect>
        </Card>
    )
}
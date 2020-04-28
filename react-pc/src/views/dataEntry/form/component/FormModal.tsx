import React, { useState } from "react";
import { Card, Button, Form, Modal, Input, Radio } from "antd";

interface Values {
    title: string;
    description: string;
    modifier: string;
}

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}

export function FormModal() {

    const [visible, setVisible] = useState(false);

    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };

    const CollectionCreateForm: React.FC<CollectionCreateFormProps> = (props: any) => {

        const {
            visible,
            onCreate,
            onCancel,
        } = props;
        const [form] = Form.useForm();
        return (
            <Modal
                visible={visible}
                title="Create a new collection"
                okText="Create"
                cancelText="Cancel"
                onCancel={onCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then(values => {
                            form.resetFields();
                            onCreate(values);
                        })
                        .catch(info => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{ modifier: 'public' }}
                >
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: 'Please input the title of collection!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                        <Input type="textarea" />
                    </Form.Item>
                    <Form.Item name="modifier" className="collection-create-form_last-form-item">
                        <Radio.Group>
                            <Radio value="public">Public</Radio>
                            <Radio value="private">Private</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Modal>
        );
    };

    return (
        <Card id="components-form-demo-modal" title="表单 弹出层">
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
                New Collection
            </Button>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </Card>
    )
}
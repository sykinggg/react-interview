import React, { useState, useRef, useEffect } from "react";
import { Card, Form, Input, Avatar, Typography, Button, Modal, InputNumber } from "antd";
import { UserOutlined, SmileOutlined } from "@ant-design/icons";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export function FormLinkage() {

    const [visible, setVisible] = useState<boolean>(false);

    const showUserModal = () => {
        setVisible(true);
    };

    const hideUserModal = () => {
        setVisible(false);
    };

    const onFinish = (values: any) => {
        console.log('Finish:', values);
    };

    const useResetFormOnCloseModal = (props: { form: any; visible: any; }) => {
        const { form, visible } = props;
        const prevVisibleRef = useRef();
        const prevVisible = prevVisibleRef.current;

        useEffect(() => {
            prevVisibleRef.current = visible;
        }, [visible, form, prevVisible]);
        useEffect(() => {
            if (!visible && prevVisible) {
                form.resetFields();
            }
        }, [visible, form, prevVisible]);
    };

    const ModalForm = (props: any) => {
        const { visible, onCancel } = props;
        const [form] = Form.useForm();

        useResetFormOnCloseModal({
            form,
            visible,
        });

        const onOk = () => {
            form.submit();
        };

        return (
            <Modal title="Basic Drawer" visible={visible} onOk={onOk} onCancel={onCancel}>
                <Form form={form} layout="vertical" name="userForm">
                    <Form.Item name="name" label="User Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="age" label="User Age" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                </Form>
            </Modal>
        );
    };

    return (
        <Card id="components-form-demo-linkage" title="表单 联动">
            <Form.Provider
                onFormFinish={(name, { values, forms }) => {
                    if (name === 'userForm') {
                        const { basicForm } = forms;
                        const users = basicForm.getFieldValue('users') || [];
                        basicForm.setFieldsValue({ users: [...users, values] });
                        setVisible(false);
                    }
                }}
            >
                <Form {...layout} name="basicForm" onFinish={onFinish}>
                    <Form.Item name="group" label="Group Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="User List"
                        shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
                    >
                        {({ getFieldValue }) => {
                            const users = getFieldValue('users') || [];
                            return users.length ? (
                                <ul>
                                    {users.map((user: { name: React.ReactNode; age: React.ReactNode; }, index: string | number | undefined) => (
                                        <li key={index} className="user">
                                            <Avatar icon={<UserOutlined />} />
                                            {user.name} - {user.age}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                    <Typography.Text className="ant-form-text" type="secondary">
                                        ( <SmileOutlined /> No user yet. )
                                    </Typography.Text>
                                );
                        }}
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button htmlType="submit" type="primary">
                            Submit
                        </Button>
                        <Button htmlType="button" style={{ margin: '0 8px' }} onClick={showUserModal}>
                            Add User
                        </Button>
                    </Form.Item>
                </Form>

                <ModalForm visible={visible} onCancel={hideUserModal} />
            </Form.Provider>
        </Card>
    )
}
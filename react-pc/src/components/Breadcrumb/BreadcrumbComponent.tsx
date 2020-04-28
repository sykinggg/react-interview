import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
import './BreadcrumbComponent.scss';
import { useLocation } from 'react-router-dom';

export default function BreadcrumbComponent(props: any) {

    let location = useLocation();

    const [pathname, setPathname] = useState<string[]>([]);

    useEffect(() => {
        setPathname(location.pathname.split('/'))
    }, [location]);

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {
                pathname.map(item => <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>)
            }
        </Breadcrumb>
    )
}

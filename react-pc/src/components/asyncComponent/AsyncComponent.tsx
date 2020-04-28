import React, { Suspense } from 'react';
import './AsyncComponent.scss';

export interface Iprops {
    LoadAsyncComponent: any;
    props?: any;
}

export default function AsyncComponent(props: Iprops) {
    const { LoadAsyncComponent } = props;
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoadAsyncComponent {...props} />
        </Suspense>
    )
}
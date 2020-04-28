import React from 'react';
import './Sticky.scss';
import { Affix } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
// import $ from 'jquery';

export function Sticky(props: any) {

    const { scrollbars } = props;

    const scrollToTop = () => {
        // 页面置顶
        // const c = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(c);
        // if (c > 0) {
        //     window.requestAnimationFrame(scrollToTop);
        //     window.scrollTo(0, c - c / 8);
        // }

        // $('.ant-layout').animate({
        //     scrollTop: 0
        // }, 500);

        console.log(scrollbars);
        scrollbars.current.scrollTop(0);
    }

    return (
        <Affix offsetBottom={120} className="toTop">
            <VerticalAlignTopOutlined onClick={scrollToTop} />
        </Affix>
    )
}

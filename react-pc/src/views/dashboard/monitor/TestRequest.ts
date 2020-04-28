// 引入文件
import request from '../../../components/service/HttpAxios';

// 测试
export function getAllPermissionList() {
    return request({
        url: '/test',
        method: 'get'
    })
}

export function httpSetPic(type: string) {
    return request({
        url: '/pic/picSet',
        method: 'get',
        params: {
            type: type
        }
    })
}

export function httpGetPic(type: string) {
    return request({
        url: '/pic/dataFind',
        method: 'get',
        params: {
            type: type
        }
    })
}

export function httpGetMm131BasicClass() {
    return request({
        url: '/puppeteer/getMm131BasicClass',
        method: 'get'
    })
}

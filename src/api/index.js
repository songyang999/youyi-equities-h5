import { http } from '@/utils/require'

/**
 * @description: 获取微信配置信息
 */
export function getWxConfig(data) {
    return http({
        url: '/wx/getWxConfig',
        data,
    })
}

/**
 * @description: 获取微信小程序地址
 */
export function getUrlScheme(data) {
    return http({
        url: '/wx/getUrlScheme',
        data,
    })
}
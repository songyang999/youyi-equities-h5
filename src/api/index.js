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

/**
 * @description: 获取H5页面信息
 */
export function getH5Page(data) {
    return http({
        url: '/h5/getH5Page',
        data,
    })
}

/**
 * @description: 验证银行类型，是否属于二要素 H5 跳转银行签约
 */
export function verifyBank(data) {
    return http({
        url: '/h5/verifyBank',
        data,
    })
}

/**
 * @description: 获取合同方二元素信息
 */
export function contractingPartyTwoElements(data) {
    return http({
        url: '/h5/contractingPartyTwoElements',
        data,
    })
}

/**
 * @description: 发送验证码
 */
export function bindMsg(data) {
    return http({
        url: '/h5/bindMsg',
        data,
    })
}

/**
 * @description: 四要素验证码签约+ 支付
 */
export function contractingPartyFourElements(data) {
    return http({
        url: '/h5/contractingPartyFourElements',
        data,
    })
}

/**
 * @description: 获取银行下拉
 */
export function comboBank(data) {
    return http({
        url: "/combo/bank",
        data,
    });
}

/**
 * @description: 获取协议文档
 */
export function getDocument(data) {
    return http({
        url: "/constant/getDocument",
        data,
        method: "GET",
    });
}

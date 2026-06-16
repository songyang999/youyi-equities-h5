import wx from 'weixin-js-sdk';
import { getWxConfig } from '@/api/index'

export const wxConfig = async () => {
    try {
        const res = await getWxConfig({ url: window.location.href })
        const data = res.data || {}
        wx.config({
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名
            jsApiList: [''],
            openTagList: ['wx-open-launch-weapp']
        })
    } catch (error) {
        //
        console.log('error', error)
    }

}

// 微信浏览器内登录
export const wxLogin = () => {
    const code = '' // 获取路由中携带的code码
    if (code) { // 拿到code发给后端解析
        sendCode(code)
    } else {
        // 获取code
        getCode()
    }
}

// 获取code
export const getCode = () => {
    const data = {
        appId: '', // 必传，appid
        redirect_uri: '', // 必传，授权后重定向的回调链接地址，默认当前页路由地址，需用urlEncode对链接进行处理
        response_type: 'code', // 必传，返回类型，填写code
        scope: '', // 必传，应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且， 即使在未关注的情况下，只要用户授权，也能获取其信息 ）
        state: '' // 非必传 重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节
        // #wechat_redirect  无论直接打开还是做页面302重定向时候，必须带此参数
        // forcePopup 非必传 强制此次授权需要用户弹窗确认；默认为false；需要注意的是，若用户命中了特殊场景下的静默授权逻辑，则此参数不生效
    }
    const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${data.appId}&redirect_uri=${data.redirect_uri}&response_type=${data.response_type}&scope=${data.scope}&state=${data.state}#wechat_redirect`
    window.location.href = url
}

// 发送code 解析openid
export const sendCode = (code) => {
    console.log('code==>', code)
}

// 微信支付
export const wxPay = () => {
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
        appId: '', // 必填，公众号的唯一标识，填自己的！ 
        timestamp: '', // 必填，生成签名的时间戳，刚才接口拿到的数据 
        nonceStr: '', // 必填，生成签名的随机串 
        signature: '', // 必填，签名
        jsApiList: [ // 调用的api必须写在这里面
            'chooseWXPay',
        ]
    })
    wx.ready(() => {
        wx.chooseWXPay({
            timestamp: '', // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: '', // 支付签名随机串，不长于 32 位
            package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
            signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: '', // 支付签名
            success: () => {
                this.$toast("支付成功");
            },
            fail: () => {
                this.$toast("支付失败");
            }
        })
    })
}

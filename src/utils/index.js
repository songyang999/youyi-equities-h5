
// 判断是否是微信浏览器
export const isWeixin = () => {
    const uAgent = navigator.userAgent.toLowerCase()
    return (/micromessenger/.test(uAgent)) ? true : false
}

// 页面跳转
export const goPage = (url) => {
    uni.navigateTo({ url })
}
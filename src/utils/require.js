import ENV_CONFIG from '@/config/env'

// const NODE_ENV = import.meta.env.MODE
// 请求接口前数据处理
function dispose() {
    //当前是否有网络连接
    uni.onNetworkStatusChange((res) => {
        if (res.isConnected) {
            uni.showToast({
                title: '请先检查网络状态',
                icon: 'none',
            })
            return false
        }
    })

    const token = uni.getStorageSync('token') || ''
    const header = {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        // 'Wx-App-Id': urlData.wx_app_id || '',
        token,
    }
    // uni.showLoading({
    //     mask: true,
    //     title: '加载中...',
    // })
    return header
}
export const http = (params) => {
    const header = dispose()
    return new Promise((resolve, reject) => {
        uni.request({
            method: params.method || 'POST',
            url: `${ENV_CONFIG.BASE_API}${params.url}`,
            // data: JSON.stringify(params.data) || {},
            data: params.data || {},
            header,
            dataType: params.dataType || 'json',
            success: (res) => {
                // console.log(params.url, res.header.Trace_id)
                // uni.hideLoading()
                if (res.statusCode === 200) {
                    if (params.back) {
                        return resolve(res.data);
                    } else {
                        if (res.data.result.code === "200") {
                            return resolve(res.data);
                        } else {
                            uni.showToast({
                                title: res.data.result.msg,
                                icon: 'none',
                            })
                            return reject(res.data);
                        }
                    }
                } else {
                    uni.showToast({
                        title: '网络异常',
                        icon: 'none',
                    })
                    return reject(res.data)
                }
            },
            fail: (err) => {
                uni.showToast({
                    title: '网络异常',
                    icon: 'none',
                })
                return reject(err)
            },
        })
    })
}

export const upLoadFile = (params) => {
    const header = dispose()
    uni.showLoading({
        mask: true,
        title: '上传中...',
    })
    return new Promise((resolve, reject) => {
        uni.uploadFile({
            url: `${ENV_CONFIG.BASE_API}${params.url}`,
            header: { ...header, 'Content-Type': 'multipart/form-data' },
            filePath: params.filePath,
            name: 'file',
            formData: params.data,
            success: (uploadFileRes) => {
                uni.hideLoading()
                if (uploadFileRes.statusCode == 200) {
                    return resolve(JSON.parse(uploadFileRes['data'] || ''))
                } else {
                    uni.showToast({
                        title: '网络异常',
                        icon: 'none',
                    })
                    return reject(JSON.parse(uploadFileRes['data'] || ''))
                }
            },
            fail: (uploadFileRes) => {
                uni.showToast({
                    title: '网络异常',
                    icon: 'none',
                })
                uni.hideLoading()
                return reject(JSON.parse(uploadFileRes['data']) || uploadFileRes)
            },
        })
    })
}

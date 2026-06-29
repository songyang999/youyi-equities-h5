<template>
    <view class="page">
        <image class="section-img" mode="widthFix" src="@/assets/images/audio/1.png" />
        <image class="section-img" mode="widthFix" src="@/assets/images/audio/2.png" />
        <image class="section-img" mode="widthFix" src="@/assets/images/audio/3.png" />
        <image class="section-img" mode="widthFix" src="@/assets/images/audio/4.png" />
        <image class="section-img" mode="widthFix" src="@/assets/images/audio/5.png" />
        <view class="footer_box"></view>
        <view class="footer">
            <view class="btn-box">
                <template v-if="isWeixin()">
                    <wx-open-launch-weapp
                        id="launch-btn"
                        appid="wxae7a96d1560b3ebc"
                        path="pages/productDetail/index?productKey=EQ_P_0000003"
                        style="width: 542rpx;height: 90rpx;display: block; margin-bottom: 20rpx;"
                    >
                        <script type="text/wxtag-template">
                            <div style="width: 542rpx;height: 90rpx;display: block; margin-bottom: 20rpx;">
                                <img style="width: 542rpx;height: 90rpx;display: block;" src="https://jingmengvr-pub-new.oss-cn-beijing.aliyuncs.com/equities/h5/button/14.9button.png" />
                            </div>
                        </script>
                    </wx-open-launch-weapp>
                </template>
                <view v-else class="order-btn" @click="openMiniProgram">
                    <image class="btn-bg" src="@/assets/images/audio/button.png" mode="widthFix" />
                </view>
            </view>
            <view class="footer-text">
                点击按钮视为同意
                <text @click="handleOpen(1)">《隐私协议》</text>及
                <text @click="handleOpen(2)">《扣款授权确认书》</text>
            </view>
        </view>

        <dialog-rule v-if="dialogVisible" @close="handleClose" />
    </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { wxConfig } from '@/utils/wechat'
import { isWeixin } from '@/utils/index'
import { getUrlScheme } from '@/api/index'

onMounted(() => {
    if (isWeixin()) {
        wxConfig()
    } else {
        getScheme()
    }
})

const openLink = ref('')
const openMiniProgram = () => {
    if (!openLink.value) {
        uni.showToast({
            title: '网络错误',
            icon: 'none',
        })
        return
    }
    window.location.href = openLink.value
}

const getScheme = async () => {
    try {
        const res = await getUrlScheme({ url: '/pages/productDetail/index', param: 'productKey=EQ_P_0000003' })
        openLink.value = res.data?.openLink || ''
    } catch (error) {
        //
    }
}

const dialogVisible = ref(false)
const handleOpen = (type) => {
    if (type === 1) {
        uni.navigateTo({
            url: '/pages/privacyPolicy/index'
        })
    } else {
        uni.navigateTo({
            url: '/pages/authOrder/index'
        })
    }
    // dialogVisible.value = true
}
const handleClose = () => {
    dialogVisible.value = false
}
</script>

<style lang="scss" scoped>
.page {
    background: #fff;
    min-height: 100vh;
}

.section-img {
    width: 100%;
    display: block;
}

.order-btn {
    display: block;
    margin-bottom: 20rpx;
}

.btn-bg {
    width: 542rpx;
    height: 90rpx;
    display: block;
}
.footer_box {
    width: 100%;
    height: 220rpx;
}
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fdc19b;
    height: 220rpx;
    box-sizing: border-box;
    padding: 26rpx 30rpx 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
}

.footer-text {
    font-size: 24rpx;
    color: #fff;
}
</style>

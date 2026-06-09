<template>
    <view class="page">
        <image class="section-img" mode="widthFix" src="@/assets/images/video_1.png" />

        <image class="section-img" mode="widthFix" src="@/assets/images/video_2.png" />

        <image class="section-img" mode="widthFix" src="@/assets/images/video_3.png" />

        <image class="section-img" mode="widthFix" src="@/assets/images/video_4.png" />

        <image class="section-img" mode="widthFix" src="@/assets/images/video_5.png" />
        <view class="footer">
            <view class="btn-box">
                <template v-if="isWeixin()">
                    <wx-open-launch-weapp
                        id="launch-btn"
                        appid="wxae7a96d1560b3ebc"
                        path="pages/home/index"
                        style="width: 542rpx;height: 90rpx;display: block; background-color: orange; color: #fff; font-size: 24px; text-align: center; line-height: 90rpx; border-radius: 50px; margin-bottom: 20rpx;"
                    >
                        <!-- <template> -->
                        一键订购
                        <!-- <img style="width: 542rpx;height: 90rpx;display: block;" src="@/assets/images/button.png" /> -->
                        <!-- </template> -->
                    </wx-open-launch-weapp>
                </template>
                <view v-else class="order-btn" @click="openMiniProgram">
                    <image class="btn-bg" src="@/assets/images/button.png" mode="widthFix" />
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
import { useUserStore } from '@/store/modules/user'
import { wxConfig } from '@/utils/wechat'
import { isWeixin } from '@/utils/index'
import { getUrlScheme } from '@/api/index'

const title = useUserStore().username

onMounted(() => {
    wxConfig()
})

const openMiniProgram = () => {
    console.log('打开小程序')
}

const getScheme = async () => {
    try {
        const res = await getUrlScheme({ url: '/pages/home/index' })
        console.log('res', res)
    } catch (error) {
        //
    }
}

const dialogVisible = ref(false)
const handleOpen = () => {
    dialogVisible.value = true
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

.bottom-section {
    padding: 30rpx;
    background: linear-gradient(135deg, #ff6b35, #ff4500);
    margin: 20rpx;
    border-radius: 24rpx;
    display: flex;
    align-items: center;
    justify-content: center;
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

.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fe654e;
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

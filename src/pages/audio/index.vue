<template>
    <view class="page">
        <!-- <image class="section-img" mode="widthFix" src="@/assets/images/audio/1.png" />
        <image class="section-img" mode="widthFix" src="@/assets/images/audio/2.png" />
        <image class="section-img" mode="widthFix" src="@/assets/images/audio/3.png" />
        <image class="section-img" mode="widthFix" src="@/assets/images/audio/4.png" />
        <image class="section-img" mode="widthFix" src="@/assets/images/audio/5.png" /> -->
        <image v-for="item in imageList.filter(item => item.index < 6)" :key="item.index" class="section-img" mode="widthFix" :src="`${item.content}?${Date.now()}`" />
        <view class="footer_box"></view>
        <view class="footer">
            <view class="btn-box">
                <view v-if="isWeixin()" class="wechat-btn">
                    <image class="btn-bg" :src="`${btnUrl}?${Date.now()}`" mode="widthFix" />
                    <view class="money_text">17.7</view>
                    <wx-open-launch-weapp
                        v-if="isReady"
                        id="launch-btn"
                        username="gh_abbe5b81de3e"
                        path="pages/productDetail/index?productKey=EQ_P_0000003"
                        style="position: absolute;
                            top: 0;
                            left: 0;
                            width: 271px;
                            height: 45px;
                            z-index: 10;"
                    >
                        <component :is="'script'" type="text/wxtag-template">
                            <div style="width: 271px; height:45px; background: transparent;"></div>
                        </component>
                    </wx-open-launch-weapp>
                </view>
                <view v-else class="wechat-btn" @click="openMiniProgram">
                    <image class="btn-bg" :src="`${btnUrl}?${Date.now()}`" mode="widthFix" />
                    <view class="money_text">17.7</view>
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
import { getUrlScheme, getH5Page } from '@/api/index'

const isReady = ref(false)
onMounted(async() => {
    if (isWeixin()) {
        await wxConfig()
        isReady.value = true
    } else {
        getScheme()
    }
    getH5PageInfo()
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

const imageList = ref([])
const btnUrl = ref('')
const getH5PageInfo = async () => {
    try {
        const res = await getH5Page({ attribute: '2' })
        imageList.value = JSON.parse(res.data?.content || '{}')
        const data = imageList.value.find(item => item.index === 6)
        btnUrl.value = data?.content || ''
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

.wechat-btn {
    width: 271px;
    height: 45px;
    display: block;
    margin-bottom: 20rpx;
    position: relative;
}
.section-img {
    width: 100%;
    display: block;
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
.money_text {
    font-size: 50rpx;
    color: #fff;
    font-weight: bold;
    -webkit-text-stroke: 2rpx #ff5c1b;
    position: absolute;
    z-index: 2;
    left: 160rpx;
    top: 8rpx;
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

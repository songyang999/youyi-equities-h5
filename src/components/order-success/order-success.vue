<!--
 * @Description: 订购成功
-->
<template>
    <view class="deliver_bac" @click.stop>
        <view class="deliver_wrap">
            <image class="yes_icon" src="@/assets/images/success.png" />
            <view class="yes_title">订单提交成功</view>
            <view class="yes_content">您已成功提交资费{{ priceText }}元/月的{{ name }}权益产品，请去小程序"我的订单"中查看订单状态并完成权益领取。</view>
            <view class="btn-wrap">
                <view v-if="isWeixin()" class="wechat-btn">
                    <van-button type="primary" block round>领取权益</van-button>
                    <wx-open-launch-weapp
                        v-if="isReady"
                        id="launch-btn"
                        username="gh_abbe5b81de3e"
                        :path="`pages/productDetail/index?productKey=${productKey}`"
                        style="position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 10;"
                    >
                        <component :is="'script'" type="text/wxtag-template">
                            <div style="width: 100%; height: 100%; background: transparent;"></div>
                        </component>
                    </wx-open-launch-weapp>
                </view>
                <van-button v-else type="primary" block round @click="openMiniProgram">领取权益</van-button>
            </view>
        </view>
    </view>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { wxConfig } from '@/utils/wechat'
import { isWeixin } from '@/utils/index'
import { getUrlScheme } from '@/api/index'

const emit = defineEmits(['close', 'claim'])

const props = defineProps({
    price: {
        type: [Number, String],
        default: 0,
    },
    name: {
        type: String,
        default: '视频会员',
    },
})

const priceText = computed(() => {
    const num = Number(props.price) || 0
    return num.toFixed(2)
})

const productKey = computed(() => {
    if (props.name === '音频会员') return 'EQ_P_0000003'
    return 'EQ_P_0000002'
})

const isReady = ref(false)
const openLink = ref('')

onMounted(async () => {
    if (isWeixin()) {
        await wxConfig()
        isReady.value = true
    } else {
        getScheme()
    }
})

const getScheme = async () => {
    try {
        const res = await getUrlScheme({ url: '/pages/productDetail/index', param: `productKey=${productKey.value}` })
        openLink.value = res.data?.openLink || ''
    } catch (error) {
        //
    }
}

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
</script>

<style lang="scss" scoped>
.deliver_bac {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;

    .deliver_wrap {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 686rpx;
        padding: 0 0 40rpx;
        border-radius: 16rpx;
        background-color: #fff;

        .yes_icon {
            position: absolute;
            left: 50%;
            top: -40rpx;
            transform: translateX(-50%);
            display: block;
            width: 104rpx;
            height: 104rpx;
        }

        .yes_title {
            width: 100%;
            text-align: center;
            color: $--color-main;
            margin-top: 90rpx;
            font-size: 40rpx;
            font-weight: 600;
        }

        .yes_content {
            color: #777777;
            text-align: center;
            font-size: 28rpx;
            line-height: 1.6;
            margin-top: 30rpx;
            padding: 0 40rpx;
        }

        .btn-wrap {
            margin-top: 40rpx;
            padding: 0 40rpx;
        }
    }
}

.wechat-btn {
    position: relative;
    width: 100%;
}
</style>

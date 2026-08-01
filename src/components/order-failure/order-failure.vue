<!--
 * @Description: 订购失败
-->
<template>
    <view class="deliver_bac" @click.stop>
        <view class="deliver_wrap">
            <image class="yes_icon" src="@/assets/images/fail.png" />
            <view class="yes_title">{{ title }}</view>
            <view class="yes_content">{{ errorMsg }}</view>
            <view class="btn-wrap">
                <van-button type="primary" block round @click="consult">确定</van-button>
            </view>
        </view>
    </view>
</template>

<script setup>
const emit = defineEmits(['close'])

defineProps({
    title: {
        type: String,
        default: '订购失败',
    },
    errorMsg: {
        type: String,
        default: '',
    },
})

const consult = () => {
    emit('close')
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
</style>

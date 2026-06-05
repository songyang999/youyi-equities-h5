<!--
 * @Author: XHL
 * @Date: 2026-04-12
 * @Description: 订购成功
-->
<template>
    <view class="deliver_bac" catchtouchmove="true" @click.stop>
        <view class="deliver_wrap">
            <view class="title">订购规则</view>
            <view class="sub_title">领券说明:</view>
            <view class="content">
                <view class="con_li">1.活动范围:中国大陆地区顺丰线上用户;在顺丰速运APP/微信小程序/公众号等线上渠道访问活动页面可参与活动;</view>
                <view class="con_li">2.活动期间，用户成功登陆活动页面，即可查看是否有参与活动资格;</view>
                <view class="con_li">3.成功参与活动用户，领取的优惠券为电商退货产品专用券，仅限电商退货产品使用;</view>
                <view class="con_li">4.优惠券领取成功后将会发放到用户对应手机号的顺丰速运会员账户下;</view>
            </view>
            <view class="footer_button" @click="handleClose">我知道了</view>
            <view class="close_btn" @click="handleClose">
                <image src="@/assets/images/close.png" />
            </view>
        </view>
    </view>
</template>

<script setup>
const emit = defineEmits(["close"]);


// 直接咨询
const handleClose = () => {
    emit("close");
};
</script>

<style lang="scss" scoped>
// 投递成功
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
        transform: translate(-50%, -60%);
        width: 620rpx;
        height: 856rpx;
        border-radius: 30rpx;
        padding: 0 42rpx;
        box-sizing: border-box;
        background: linear-gradient(
            215.78deg,
            rgba(254, 211, 197, 1) 0%,
            rgba(253, 251, 252, 1) 100%
        );
        .title {
            width: 100%;
            text-align: center;
            color: $--color-main;
            margin-top: 63rpx;
            font-size: 36rpx;
            font-weight: bold;
        }
        .sub_title {
            font-size: 32rpx;
        }
        .title,
        .sub_title {
            width: 100%;
            color: $--color-main;
            font-weight: bold;
        }
        .content {
            height: 524rpx;
            margin-top: 18rpx;
            font-size: 28rpx;
            color: #666666;
            overflow-y: auto;
            .con_li {
                margin-bottom: 30rpx;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
        .footer_button {
            width: 460rpx;
            height: 80rpx;
            border-radius: 40rpx;
            margin: 50rpx auto 0;
            background: linear-gradient(90deg, #febc78 0%, #ff570a 100%);
            color: #ffffff;
            font-size: 36rpx;
            font-weight: bold;
            text-align: center;
            line-height: 80rpx;
        }
    }
}
.close_btn {
    width: 60rpx;
    height: 60rpx;
    position: absolute;
    bottom: -120rpx;
    left: 50%;
    transform: translateX(-50%);
    image {
        display: block;
        width: 100%;
        height: 100%;
    }
}
</style>

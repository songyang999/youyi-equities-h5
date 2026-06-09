<!--
 * @Author: XHL
 * @Date: 2026-04-12
 * @Description: 订购成功
-->
<template>
    <view class="deliver_bac" catchtouchmove="true" @click.stop>
        <view class="deliver_wrap">
            <view class="title">权益平台隐私保护协议</view>
            <view class="sub_title">版本号:V1.0</view>
            <view class="sub_title">制定日期:2026年6月3日</view>
            <view class="sub_title">生效日期:2026年6月10日</view>
            <view class="sub_title">尊敬的用户:</view>
            <view class="content">
                <view
                    class="con_li text_indent"
                >“新锐权益宝”（以下简称“本平台”或“我们”）深知个人信息对您的重要性，我们秉承“合法、正当、必要、诚信”的原则，采取严格的安全措施保护您的个人信息。本协议旨在向您清晰、详尽地说明我们如何收集、使用、存储、共享、转让及保护您的个人信息，以及您如何管理您的个人信息。</view>
                <view class="con_li text_indent">请您在点击“同意”或使用我们的服务前，务必审慎阅读并充分理解本协议的全部条款。特别是以加粗、下划线或标红等方式提示您注意的条款。如您对本协议有任何疑问，可通过本协议末尾的联系方式与我们联系。</view>
                <view class="con_li text_indent">您主动点击“同意”或通过“勾选同意”的方式确认本协议，即表示您已完全理解并同意本协议的全部内容，并授权我们按照本协议处理您的个人信息。如您不同意本协议的任何内容，请您立即停止使用本平台的服务。</view>
                <view class="sub_title">一、定义</view>
                <view class="con_li text_indent">1.个人信息：指以电子或者其他方式记录的与已识别或者可识别的自然人有关的各种信息，不包括匿名化处理后的信息。</view>
                <view
                    class="con_li text_indent"
                >2.敏感个人信息：指一旦泄露或者非法使用，容易导致自然人的人格尊严受到侵害或者人身、财产安全受到危害的个人信息，包括但不限于生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹等信息。在本平台服务中，您提供的身份证号码及银行卡号属于敏感个人信息。</view>
                <view class="con_li text_indent">3.权益平台服务：指由我们运营的，提供权益产品展示、订购、支付、兑换、管理等功能的小程序及关联H5页面。</view>
                <view class="con_li text_indent">4.关联公司：指控制、受控于本平台运营方或与本平台运营方共同受控制的其他实体。</view>
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
            font-size: 28rpx;
        }
        .title,
        .sub_title {
            width: 100%;
            color: $--color-main;
            font-weight: bold;
        }
        .content {
            height: 384rpx;
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
            .text_indent {
                text-indent: 2em;
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

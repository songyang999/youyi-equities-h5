<template>
    <view class="page">
        <view class="doc-title">扣款授权确认书</view>

        <view class="doc-content">
            <view class="paragraph">
                本确认书由您向上海富友支付服务股份有限公司（下称"富友支付"）出具，具有授权之法律效力。请您务必审慎阅读、充分理解本确认书各条款内容，特别是免除或者限制责任的条款，前述条款可能以加粗字体显示，您应重点阅读。除非您已阅读并接受本确认书所有条款，否则您无权使用富友支付自动扣款等服务。您同意本确认书即视为您已向富友支付提供自动扣款授权，并自愿承担由此导致的一切法律后果，如您有任何疑问，应向富友支付客服（热线：95138）咨询。
            </view>

            <view class="paragraph">
                您确认并授权北京新锐互联科技有限公司（以下简称"收款人"）向富友支付发出扣款指令，富友支付即可在不验证您的短信验证码等情况下直接从您银行结算账户中扣划收款人指定的款项至收款人指定账户。
            </view>

            <view class="paragraph">
                富友支付会在签约时验证您的银行卡户名、银行卡号、身份证号、银行卡预留手机号以及短信动态验证码，您输入以上信息即视为您授权富友支付可依据收款人的交易指令从您签约绑定的银行账户中扣划收款人指定的款项至收款人指定账户，且富友支付后续对您银行账户进行资金扣划，将无需再验证您的短信动态验证码。
            </view>

            <view class="paragraph">
                富友支付将根据您与收款人签约的如下划扣事项，富友支付就可按照如下约定进行资金划扣。
            </view>

            <view class="paragraph">
                <text class="label">扣款事由：</text>在"新锐权益宝"小程序中订购包月会员权益包
            </view>

            <view class="paragraph">
                <text class="label">授权有效截止日：</text>本人主动取消包月支付服务。
            </view>

            <view class="paragraph">
                富友支付对收款人的交易指令在实质上的正确性、合法性、完整性、真实性不承担任何法律责任，相关法律责任由您和收款人自行承担。
            </view>

            <view class="paragraph">
                您在扣款银行账户内必须预留足够的被扣划的余额，否则因银行账户余额不足导致无法及时扣款或者扣款错误、失败，责任由您自行承担，因不可归责于富友支付的事由，导致的不能及时扣划款项、划账错误等责任与富友支付无关。
            </view>

            <view class="section-title">您的签约信息：</view>

            <view class="info-table">
                <view class="info-row">
                    <view class="info-label">银行卡户名</view>
                    <view class="info-value"></view>
                </view>
                <view class="info-row">
                    <view class="info-label">银行卡开户银行</view>
                    <view class="info-value"></view>
                </view>
                <view class="info-row">
                    <view class="info-label">银行卡账号</view>
                    <view class="info-value"></view>
                </view>
                <view class="info-row">
                    <view class="info-label">身份证号码</view>
                    <view class="info-value"></view>
                </view>
                <view class="info-row">
                    <view class="info-label">联系手机</view>
                    <view class="info-value"></view>
                </view>
            </view>

            <view class="paragraph">
                您有权根据与收款人业务情况，及时进行此扣款签约授权的取消或终止，取消或终止授权方式如下：
            </view>

            <view class="paragraph list-item">致电富友支付客服取消扣款授权；</view>
            <view class="paragraph list-item">或通过收款人向富友支付发起取消扣款授权。</view>

            <view class="paragraph">
                如您和收款人发生相关业务纠纷导致款项支付异常，请及时联系收款人或富友支付进行查询或投诉。
            </view>

            <view class="paragraph">
                您确认，因收款人的原因导致您遭受经济损失的，由您与收款人协商解决，与富友支付无关。
            </view>
        </view>
    </view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
    padding: 40rpx 32rpx 60rpx;
    box-sizing: border-box;
    background: #fff;
}

.doc-title {
    text-align: center;
    font-size: 36rpx;
    font-weight: bold;
    color: $--color-main;
    margin-bottom: 40rpx;
}

.doc-content {
    font-size: 28rpx;
    line-height: 1.8;
    color: $--color-common;
}

.paragraph {
    margin-bottom: 24rpx;
    text-align: justify;

    &:last-child {
        margin-bottom: 0;
    }
}

.label {
    font-weight: bold;
    color: $--color-main;
}

.section-title {
    font-size: 28rpx;
    font-weight: bold;
    color: $--color-main;
    margin: 32rpx 0 24rpx;
}

.list-item {
    padding-left: 1em;
    position: relative;

    &::before {
        content: '•';
        position: absolute;
        left: 0;
    }
}

.info-table {
    border: 1rpx solid $--color-border;
    border-radius: 8rpx;
    overflow: hidden;
    margin-bottom: 24rpx;
}

.info-row {
    display: flex;
    border-bottom: 1rpx solid $--color-border;

    &:last-child {
        border-bottom: none;
    }
}

.info-label {
    flex-shrink: 0;
    width: 260rpx;
    padding: 20rpx 24rpx;
    font-weight: bold;
    color: $--color-main;
    background: #fafafa;
    border-right: 1rpx solid $--color-border;
    box-sizing: border-box;
}

.info-value {
    flex: 1;
    min-height: 72rpx;
    padding: 20rpx 24rpx;
    color: $--color-common;
    box-sizing: border-box;
}
</style>

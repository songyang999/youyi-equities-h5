<!--
 * @Description: 签约订购
-->
<template>
    <view class="page">
        <image class="header-bg" src="@/assets/images/header_bac.png" mode="aspectFill" />
        <view class="form-wrap">
            <van-form ref="formRef" @submit="handleSubmit" @failed="onFailed">
                <view class="field-card">
                    <van-field
                        v-model="formData.account"
                        name="account"
                        placeholder="请输入姓名"
                        maxlength="50"
                        error-message-align="left"
                        :rules="[{ required: true, message: '请输入姓名' }]"
                    >
                        <template #label>
                            <text class="field-label">
                                <text class="required">*</text>姓名
                            </text>
                        </template>
                    </van-field>
                </view>

                <view class="field-card">
                    <van-field v-model="formData.idCard" name="idCard" placeholder="请输入身份证号码" maxlength="18" error-message-align="left" :rules="idCardRules">
                        <template #label>
                            <text class="field-label">
                                <text class="required">*</text>身份证
                            </text>
                        </template>
                    </van-field>
                </view>

                <view class="field-card" @click="openBankPicker">
                    <van-field
                        v-model="formData.bank_name"
                        name="bankInsCd"
                        readonly
                        is-link
                        placeholder="请选择银行"
                        error-message-align="left"
                        :rules="[{ required: true, message: '请选择银行' }]"
                    >
                        <template #label>
                            <text class="field-label">
                                <text class="required">*</text>银行
                            </text>
                        </template>
                    </van-field>
                </view>

                <!-- 短信签约银行：展示银行卡号、验证码（产品文档 2.2） -->
                <template v-if="needSmsFields">
                    <view class="field-card">
                        <van-field
                            v-model="formData.cardNo"
                            name="cardNo"
                            placeholder="请输入银行卡号"
                            maxlength="30"
                            type="digit"
                            error-message-align="left"
                            :rules="cardNoRules"
                            @blur="formData.cardNo = formData.cardNo.replace(/\s/g, '')"
                        >
                            <template #label>
                                <text class="field-label">
                                    <text class="required">*</text>银行卡号
                                </text>
                            </template>
                        </van-field>
                    </view>

                    <view class="field-card">
                        <van-field
                            v-model="formData.mobile"
                            name="mobile"
                            placeholder="请输入手机号码"
                            maxlength="11"
                            type="tel"
                            error-message-align="left"
                            :rules="mobileRules"
                        >
                            <template #label>
                                <text class="field-label">
                                    <text class="required">*</text>手机号码
                                </text>
                            </template>
                        </van-field>
                    </view>

                    <view class="field-card">
                        <van-field
                            v-model="formData.msgCode"
                            name="msgCode"
                            placeholder="请输入验证码"
                            maxlength="6"
                            type="digit"
                            error-message-align="left"
                            :rules="[{ required: true, message: '请输入验证码' }]"
                        >
                            <template #label>
                                <text class="field-label">
                                    <text class="required">*</text>验证码
                                </text>
                            </template>
                            <template #button>
                                <van-button
                                    size="small"
                                    type="primary"
                                    class="send-btn"
                                    :disabled="countdown > 0"
                                    native-type="button"
                                    @click.stop="sendCode"
                                >{{ codeText }}</van-button>
                            </template>
                        </van-field>
                    </view>
                </template>

                <van-button round block type="primary" native-type="submit" class="submit-btn">签约订购</van-button>
            </van-form>

            <view class="tips">资费{{ priceText }}元/月</view>
            <view class="tips agreement">
                点击按钮为同意
                <text class="link" @click="goPage('/pages/privacyPolicy/index')">《隐私协议》</text>
                <text class="link" @click="goPage('/pages/authOrder/index')">《订购规则》</text>
            </view>
        </view>

        <van-popup v-model:show="showBankPicker" position="bottom" round>
            <van-picker title="选择银行" :columns="bankColumns" @confirm="onBankConfirm" @cancel="showBankPicker = false" />
        </van-popup>
    </view>
</template>

<script setup>
import { ref, computed, onUnmounted, createVNode, render } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { Toast } from 'vant'
import OrderSuccess from '@/components/order-success/order-success.vue'
import OrderFailure from '@/components/order-failure/order-failure.vue'

const formData = ref({
    account: '',
    mobile: '',
    idCard: '',
    bankInsCd: '',
    bank_name: '',
    cardNo: '',
    msgCode: '',
    productKey: '',
})

const price = ref(0)
const attribute = ref(0)

onLoad((query) => {
    formData.value.productKey = query?.productKey || ''
    attribute.value = Number(query?.attribute) || 0
    price.value = Number(query?.price) || 0
})

const priceText = computed(() => {
    const num = Number(price.value) || 0
    return num ? num.toFixed(2) : 'XX'
})

const productName = computed(() => {
    if (attribute.value === 1) return '视频会员'
    if (attribute.value === 2) return '音频会员'
    return '权益'
})

// 需跳转银行官方页签约的银行（产品文档 2.1）
const REDIRECT_BANK_CODES = [
    'ABC', // 农行
    'BOC', // 中行
    'PSBC', // 邮储
    'CCB', // 建行
    'COMM', // 交行
    'HXBANK', // 华夏
    'GDB', // 广发
    'SPABANK', // 平安
    'SPDB', // 浦发
    'CMBC', // 民生
    'MYBANK', // 网商
    'CIB', // 兴业
]

// 模拟银行列表
const bankList = [
    { text: '中国工商银行', value: 'ICBC' },
    { text: '中国农业银行', value: 'ABC' },
    { text: '中国银行', value: 'BOC' },
    { text: '中国建设银行', value: 'CCB' },
    { text: '交通银行', value: 'COMM' },
    { text: '招商银行', value: 'CMB' },
    { text: '中信银行', value: 'CITIC' },
    { text: '光大银行', value: 'CEB' },
    { text: '华夏银行', value: 'HXBANK' },
    { text: '民生银行', value: 'CMBC' },
    { text: '广发银行', value: 'GDB' },
    { text: '平安银行', value: 'SPABANK' },
    { text: '浦发银行', value: 'SPDB' },
    { text: '兴业银行', value: 'CIB' },
    { text: '邮储银行', value: 'PSBC' },
    { text: '网商银行', value: 'MYBANK' },
]

const bankColumns = computed(() => bankList.map((item) => item.text))

const isRedirectBank = computed(() =>
    REDIRECT_BANK_CODES.includes(formData.value.bankInsCd)
)

// 未选银行或短信签约银行时展示卡号/验证码；跳转银行不展示
const needSmsFields = computed(() => {
    if (!formData.value.bankInsCd) return false
    return !isRedirectBank.value
})

const mobileRules = [
    { required: true, message: '请输入手机号码' },
    {
        validator: (val) => /^1\d{10}$/.test(val),
        message: '请输入正确的手机号码',
    },
]

const idCardRules = [
    { required: true, message: '请输入身份证号码' },
    {
        validator: (val) =>
            /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/.test(val),
        message: '请输入正确的身份证号码',
    },
]

const cardNoRules = [
    { required: true, message: '请输入银行卡号' },
    {
        validator: (val) => /^\d{12,30}$/.test(val),
        message: '请输入正确的银行卡号',
    },
]

const showBankPicker = ref(false)
const openBankPicker = () => {
    showBankPicker.value = true
}

// Vant 3：单列 confirm 回调为 (value, index)
const onBankConfirm = (value, index) => {
    const bank = bankList[index] || bankList.find((item) => item.text === value)
    if (!bank) return
    formData.value.bankInsCd = bank.value
    formData.value.bank_name = bank.text
    if (REDIRECT_BANK_CODES.includes(bank.value)) {
        formData.value.cardNo = ''
        formData.value.msgCode = ''
    }
    showBankPicker.value = false
}

const countdown = ref(0)
const codeSent = ref(false)
const codeText = computed(() => {
    if (countdown.value > 0) return `${countdown.value}s`
    return codeSent.value ? '重新发送' : '发送验证码'
})
let timer = null

const sendCode = async () => {
    if (countdown.value > 0) return
    if (!formData.value.bankInsCd) {
        Toast('请先选择银行')
        return
    }
    if (!formData.value.cardNo) {
        Toast('请先输入银行卡号')
        return
    }
    if (!/^\d{12,30}$/.test(formData.value.cardNo)) {
        Toast('请输入正确的银行卡号')
        return
    }
    if (!formData.value.mobile) {
        Toast('请先输入手机号码')
        return
    }
    if (!/^1\d{10}$/.test(formData.value.mobile)) {
        Toast('请输入正确的手机号码')
        return
    }
    // TODO: 对接发送验证码接口
    Toast('验证码已发送')
    codeSent.value = true
    countdown.value = 60
    timer = setInterval(() => {
        countdown.value -= 1
        if (countdown.value <= 0) {
            clearInterval(timer)
            timer = null
        }
    }, 1000)
}

onUnmounted(() => {
    if (timer) clearInterval(timer)
})

const goPage = (url) => {
    uni.navigateTo({ url })
}

const onFailed = () => {
    Toast('信息未填写或填写有误，请重新填写')
}

function mountComponent(Component, options = {}) {
    const { onClose, ...props } = options
    let destroyed = false

    const container = document.createElement('div')
    const vnode = createVNode(Component, {
        ...props,
        onClose: () => {
            if (destroyed) return
            if (onClose) onClose()
            destroy()
        },
    })

    render(vnode, container)
    document.body.appendChild(container)

    function destroy() {
        if (destroyed) return
        destroyed = true
        render(null, container)
        if (container.parentNode) {
            container.parentNode.removeChild(container)
        }
    }

    return { close: destroy }
}

const openOrderSuccess = (options) => mountComponent(OrderSuccess, options)
const openOrderFailure = (options) => mountComponent(OrderFailure, options)

const handleSubmit = async () => {
    // TODO: 对接签约提交接口
    openOrderSuccess({
        price: price.value,
        name: productName.value,
    })
}

const handleOrderFailure = (msg) => {
    openOrderFailure({
        title: '订购失败',
        errorMsg: msg,
    })
}
</script>

<style lang="scss" scoped>
.page {
    --page-primary: #4a88ff;
    min-height: 100vh;
    background: #f5f7fb;
    position: relative;
    padding-bottom: 80rpx;
    --van-button-primary-background-color: var(--page-primary);
    --van-button-primary-border-color: var(--page-primary);
    --van-field-label-width: 160rpx;
    --van-field-label-color: #333;
    --van-field-input-text-color: #333;
    --van-cell-background-color: transparent;
}

.header-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 420rpx;
    z-index: 0;
    pointer-events: none;
}

.form-wrap {
    position: relative;
    z-index: 1;
    padding: 40rpx 40rpx 0;
}

.field-card {
    position: relative;
    background: transparent;
    margin-bottom: 44rpx;
    overflow: visible;

    :deep(.van-cell),
    :deep(.van-cell__value) {
        position: static;
        overflow: visible;
    }

    :deep(.van-cell) {
        background: #fff;
        border-radius: 48rpx;
        padding: 24rpx 32rpx;
        align-items: center;
        box-shadow: 0 4rpx 16rpx rgba(74, 136, 255, 0.06);
    }

    :deep(.van-field__label) {
        margin-right: 16rpx;
    }

    :deep(.van-field__control) {
        font-size: 28rpx;
    }

    :deep(.van-field__control::placeholder) {
        color: #c0c4cc;
        font-size: 26rpx;
    }

    :deep(.van-cell::after) {
        display: none;
    }

    :deep(.van-field__right-icon) {
        color: #c0c4cc;
    }

    /* 报错信息脱离白色胶囊，与输入暗提示左对齐 */
    :deep(.van-field__error-message) {
        position: absolute;
        left: calc(var(--van-field-label-width) + 32rpx + 16rpx);
        right: 32rpx;
        top: 100%;
        margin: 0 !important;
        width: auto !important;
        text-align: left;
    }
}

.field-label {
    font-size: 28rpx;
    color: #333;
    white-space: nowrap;
}

.required {
    color: var(--page-primary);
    margin-right: 4rpx;
}

.send-btn {
    min-width: 160rpx;
    height: 56rpx !important;
    padding: 0 20rpx !important;
    border-radius: 28rpx !important;
    font-size: 24rpx !important;
}

.submit-btn {
    margin-top: 20rpx;
    height: 90rpx !important;
    font-size: 32rpx !important;
    font-weight: 500;
    background: var(--page-primary) !important;
    border-color: var(--page-primary) !important;
}

.tips {
    text-align: center;
    font-size: 24rpx;
    color: #a4afc1;
    line-height: 40rpx;
    margin-top: 24rpx;
}

.agreement {
    margin-top: 8rpx;

    .link {
        color: var(--page-primary);
    }
}
</style>

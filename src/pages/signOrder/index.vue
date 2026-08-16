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
                        v-model="formData.bankName"
                        name="bankCode"
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
                <template v-if="!isRedirect">
                    <view class="field-card">
                        <van-field
                            v-model="formData.accountNo"
                            name="accountNo"
                            placeholder="请输入银行卡号"
                            maxlength="30"
                            type="digit"
                            error-message-align="left"
                            :rules="accountNoRules"
                            @blur="formData.accountNo = formData.accountNo.replace(/\s/g, '')"
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
                                    :disabled="mix_timer < 1 ? false : true"
                                    size="small"
                                    type="primary"
                                    class="send-btn"
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
            <view class="tips agreement mb_80 flex align-center justify-center">
                <view class="check_box flex align-center" @click="updateRead">
                    <image v-if="isRead" src="@/assets/images/checked.png" />
                    <image v-else src="@/assets/images/check.png" />
                </view>阅读并同意
                <text class="link" @click="goPage('/pages/privacyPolicy/index')">《隐私协议》</text>
                <text class="link" @click="goPage('/pages/authOrder/index')">《订购规则》</text>
            </view>
        </view>

        <van-popup v-model:show="showBankPicker" position="bottom" round>
            <van-picker
                title="选择银行"
                :columns="filteredBankColumns"
                :default-index="pickerDefaultIndex"
                @confirm="onBankConfirm"
                @cancel="showBankPicker = false"
            >
                <template #columns-top>
                    <view class="bank-search-wrap">
                        <van-search v-model="bankSearchKeyword" shape="round" placeholder="请输入银行名称搜索" background="#fff" />
                    </view>
                </template>
            </van-picker>
        </van-popup>
    </view>
</template>

<script setup>
import { ref, computed, onUnmounted, createVNode, render } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { Toast } from 'vant'
import { goPage } from '@/utils/index'
import { contractingPartyTwoElements, comboBank, verifyBank, bindMsg, contractingPartyFourElements } from '@/api/index.js'

import OrderSuccess from '@/components/order-success/order-success.vue'
import OrderFailure from '@/components/order-failure/order-failure.vue'

const formData = ref({
    account: '',
    idCard: '',
    accountNo: '',
    mobile: '',
    bindReqSn: '',
    bankCode: '',
    bankName: '',
    msgCode: '',
    productKey: '',
})

const price = ref(0)
const attribute = ref(0)

onLoad((query) => {
    formData.value.productKey = query?.productKey || ''
    attribute.value = Number(query?.attribute) || 0
    price.value = Number(query?.price) || 0
    getBankList()
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

// 银行列表
const bankList = ref([])
const getBankList = async () => {
    try {
        const res = await comboBank()
        bankList.value = res.data || []
    } catch (error) {
        //
    }
}

// 银行搜索
const bankSearchKeyword = ref('')
const filteredBankColumns = computed(() => {
    const kw = bankSearchKeyword.value.trim()
    const source = kw
        ? bankList.value.filter((item) => item.sValue.includes(kw))
        : bankList.value
    return source.map((item) => item.sValue)
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

const accountNoRules = [
    { required: true, message: '请输入银行卡号' },
    {
        validator: (val) => /^\d{12,30}$/.test(val),
        message: '请输入正确的银行卡号',
    },
]

const showBankPicker = ref(false)
// Picker 当前选中索引（在当前 columns 中的位置）
const pickerDefaultIndex = ref(0)

const openBankPicker = () => {
    bankSearchKeyword.value = ''
    // 如果已选择过银行，计算其在全量列表中的索引作为默认选中
    if (formData.value.bankCode) {
        const idx = bankList.value.findIndex((b) => b.sKey === formData.value.bankCode)
        pickerDefaultIndex.value = idx >= 0 ? idx : 0
    } else {
        pickerDefaultIndex.value = 0
    }
    showBankPicker.value = true
}

// 单列 confirm 回调为 (value, index) —— index 为过滤后 columns 中的索引
const onBankConfirm = (value, index) => {
    const kw = bankSearchKeyword.value.trim()
    const source = kw
        ? bankList.value.filter((item) => item.sValue.includes(kw))
        : bankList.value
    const bank = source[index] || bankList.value.find((item) => item.sValue === value)
    if (!bank) return
    formData.value.bankCode = bank.sKey
    formData.value.bankName = bank.sValue
    isVerifyBank()

    showBankPicker.value = false
}

// 判断是二要素还是四要素
const isRedirect = ref(true)
const isVerifyBank = async () => {
    isRedirect.value = true
    try {
        const res = await verifyBank({
            bankCode: formData.value.bankCode,
        })
        isRedirect.value = res.data?.redirect
        formData.value.accountNo = ''
        formData.value.msgCode = ''
        formData.value.bindReqSn = ''
        formData.value.mobile = ''
        codeText.value = "发送验证码"
        if (mix_timer.value) clearInterval(mix_timer.value);
    } catch (error) {
        //
    }
}

// 获取验证码
let mix_num = 60;
let mix_timer = ref(null);
const codeText = ref("发送验证码");
const mix_setIntervals = function () {
    mix_timer.value = setInterval(() => {
        mix_num--;
        codeText.value = `${mix_num}s`;
        if (mix_num < 1) {
            codeText.value = `重新发送`;
            mix_num = 60;
            clearInterval(mix_timer.value);
            mix_timer.value = null;
        }
    }, 1000);
};
// 发送验证码
const sendCode = async () => {
    const params = { ...formData.value };
    const res = await bindMsg(params);
    formData.value.bindReqSn = res.data?.bindReqSn || "";
    mix_setIntervals();
}

onUnmounted(() => {
    if (mix_timer.value) clearInterval(mix_timer.value);
})

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

// 同意协议
const isRead = ref(false);
const updateRead = () => {
    isRead.value = !isRead.value;
};

// 校验失败
const onFailed = () => {
    Toast('信息未填写或填写有误，请重新填写')
}
// 提交
const handleSubmit = async () => {
    if (!isRead.value) {
        Toast("请先阅读并同意协议");
        return;
    }
    try {
        let res = {}
        const params = { ...formData.value };
        if (isRedirect.value) {
            res = await contractingPartyTwoElements(params)
        } else {
            res = await contractingPartyFourElements(params)
        }
        if (res.data?.url) {
            window.location.href = res.data.url
            return
        }
        // 打开签约成功
        if (res.data?.retCode === '0000' || res.data?.agrmno) {
            openOrderSuccess({
                price: price.value,
                name: productName.value,
            })
        } else {
            handleOrderFailure(res.result?.msg || '订购失败')
        }
    } catch (error) {
        //
    }
}

// 订购失败
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
    .check_box {
        height: 40rpx;
        padding-right: 16rpx;
        > image {
            display: block;
            width: 28rpx;
            height: 28rpx;
        }
    }
    .link {
        color: var(--page-primary);
    }
}

.bank-search-wrap {
    padding: 16rpx 24rpx;
    border-bottom: 1rpx solid #ebedf0;

    :deep(.van-search) {
        padding: 0;
    }

    :deep(.van-search__content) {
        height: 72rpx;
    }
}
</style>

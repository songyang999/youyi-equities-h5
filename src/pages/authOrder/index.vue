<template>
    <view class="page">
        <view class="doc-title">{{ headline }}</view>
        <view class="doc-content">
            <view class="paragraph">
                <text v-html="content" />
            </view>
        </view>
    </view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getDocument } from '@/api/index.js'

onLoad(() => {
    getDocumentInfo()
})

const headline = ref('')
const content = ref('')
const getDocumentInfo = async () => {
    try {
        const res = await getDocument()
        console.log(res)
        headline.value = res.data?.headline || ''
        content.value = res.data?.content || ''
    } catch (error) {
        //
    }
}
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
        content: "•";
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

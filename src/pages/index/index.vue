<template>
  <!-- <view class="content"> -->
    <image class="banner" mode="widthFix" src="@/assets/images/banner.png" />
    <div class="section pr">
      <image class="bg" mode="widthFix" src="@/assets/images/bg.png" />
      <div class="content">
        <div class="title">资费X元/月</div>
        <div class="sub_title" @click="handleOpen">点击按钮为同意《隐私协议》《订购规则》</div>
        <div class="btn_box pr">
            <template v-if="isWeixin()">
                <wx-open-launch-weapp
                    id="launch-btn"
                    appid="wxae7a96d1560b3ebc"
                    path="pages/home/index"
                    style="display: block; width: 100%; height: 100%; background-color: orange; color: #fff; font-size: 24px; text-align: center; line-height: 47px; border-radius: 45px;"
                >一键订购
                    <!-- <div v-is="'script'" type='text/wxtag-template'> -->
                        <!-- 一键订购 -->
                        <!-- <div v-is="'style'">
                            .applet-btn {
                                padding: 20rpx 40rpx;
                                font-size: 12px;
                            }
                        </div> -->
                        <!-- <button class="applet-btn"></button> -->
                    <!-- </div> -->
                </wx-open-launch-weapp>
            </template>
            <div v-else @click="openMiniProgram">
                <image class="btn_bac" src="@/assets/images/button.png"></image>
            </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_card">
        <div class="card_title">订购规则</div>
        <div class="card_text">一、活动对象:2G/3G/4G/5G手机用户;本页面仅供客户购买权益，非用于鉴权登录等其他服务，老年及未成年人请谨慎消费，敬请知悉!为了您的权益保障，请注意核实订购规则及订单详情，不要轻信陌生人通过网络、电话、短信告知的信息谨防网络电信诈骗<br/>二、订购本产品用户，产品内所含热门会员特权可同时享有热门会员特权(N选1);热门会员特权(N选1):咪咕白金会员(月卡)爱奇艺黄金会员(月卡)、腾讯视频会员(月卡)、优酷视频会员(月卡)芒果视频会员月卡)bilibili会员(月卡)酷狗音乐会员(月卡)、Q0音乐豪华绿钻(月卡)网易云音乐会员(月卡)、搜狐视频会员(月卡)掌阅会员(月卡)、新浪微博会员(月卡)(以当月实际上线产品配置为准)等成功开通或续订本产品的用户每月可任意选择一款月会员权益进行使用;良品铺子200元代金券;三、本产品特权介绍权益说明:含腾讯视频、爱奇艺、优酷视频、芒果TV、Q0音乐等多款热门权益，成功开通或续订本产品的用户每月可任意选择一款月会员权益进行使用;权益领取有效期:自成功开通或续订本产品之日起30天内有效，请及时兑换，逾期未兑换的该权益作废。</div>
      </div>
    </div>
    <dialog-rule v-if="dialogVisible" @close="handleClose" />
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/store/modules/user'
import { wxConfig } from '@/utils/wechat'
import { isWeixin } from '@/utils/index'
import { getUrlScheme } from '@/api/index'
const title = useUserStore().username
onMounted(() => {
//   if (isWeixin()) {
    wxConfig()
//   } else {
//     getScheme()
//   }
})
const openMiniProgram = () => {
    console.log('打开小程序')
//   uni.navigateTo({
//     url: '/pages/miniProgram/index',
//   })
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
.banner,
.bg {
  display: block;
  width: 100%;
}
.content {
  width: 100%;
  height: 400rpx;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 38rpx;
  color: #d84315;
  font-weight: bold;
  margin-top: 116rpx;
}
.sub_title {
  font-size: 22rpx;
  color: #d84315;
  letter-spacing: 10rpx;
  margin-top: 10rpx;
}
.btn_box {
  width: 332rpx;
  height: 90rpx;
  margin-top: 52rpx;
  .btn_bac {
    display: block;
    width: 332rpx;
    height: 90rpx;
  }
}
.footer {
  width: 100%;
  box-sizing: border-box;
  padding: 24rpx 30rpx 104rpx;
  background: #f35536;
  .footer_card {
    width: 100%;
    padding: 40rpx;
    border-radius: 30rpx;
    background: linear-gradient(120deg, #fff0f2, #faefd0);
    color: #d84315;
    text-align: center;
    .card_title {
      font-size: 44rpx;
    }
    .card_text {
      font-size: 30rpx;
      margin-top: 46rpx;
    }
  }
}
</style>

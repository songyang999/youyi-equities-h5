<script>
// import { isWeixin } from './utils/index'
import { wxLogin } from './utils/wechat'
export default {
  onLaunch: function () {
    console.log('App Launch')
    // const isWx = isWeixin()
    // if (isWx) {
    //   // 微信授权
    //   wxLogin()
    // }
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  methods: {

  }
}
</script>

<style>
/*每个页面公共css */
</style>

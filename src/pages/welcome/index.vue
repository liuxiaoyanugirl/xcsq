<template>
  <div>
    <view class="userinfo">
    <view class="userinfo-avatar">
    <open-data type="userAvatarUrl"></open-data>
    </view>
    <open-data type="userNickName"></open-data>
    </view>
    <view class="circle">
    <i-button @click="handleClick">进入</i-button>
    </view>
     <i-panel>博主推荐</i-panel>
  </div>

</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      name:"",
      address:"",
      reason:"",
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    
  },
handleClick(){
        wx.switchTab({
        url: '/pages/index/main'
        })
 }
},

  created () {
    // let app = getApp()
  }
}

</script>
<style scoped>
.circle{
  width: 100px;
  height: 100px;
  margin: 50px auto;
  color:pink;
  background-color: aqua;
  border-radius: 100%;
  border: 2px solid #fff;

}
.userinfo {
position: relative;
width: 750rpx;
height: 320rpx;
color: #666;
display: flex;
flex-direction: column;
align-items: center;
}
 
.userinfo-avatar {
overflow:hidden;
display: block;
width: 160rpx;
height: 160rpx;
margin: 20rpx;
margin-top: 50rpx;
border-radius: 50%;
border: 2px solid #fff;
box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}
</style>

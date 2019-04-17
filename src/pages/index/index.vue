<template>
  <div @click="clickHandle">
    <i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
    <i-tab key="tab1" title="推荐"></i-tab>
    <i-tab key="tab2" title="关注"></i-tab>
</i-tabs>
  <image style = "width : 360px; height : 180px;" class="slide-image" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554724924990&di=ad0ab6bc8f34369e9ab75b0f5f7f3945&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fproducts%2F20150209%2Ftooopen_53579758.jpg" mode="scaleToFill"/> 
  <i-panel title="#最新大片">
</i-panel>
    <i-notice-bar icon="systemprompt" loop>
    {{notice}}欢迎来到我的摄影小天地，在这里，你可以学到许多拍照技巧，并看到很多我美美的照片哦！
    </i-notice-bar>
    
    <i-panel title="#热门推荐#">
      <view class="top-padding">
        <view v-for="item in shops" :key='item' class="top-padding">
      <i-card :title="item.name" :extra="item.type" :thumb="item.pic">
        <view>{{item.introduction}}</view>
        <view>{{item.foot}}</view>
      </i-card>
        </view>
    </view>

    </i-panel>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    
    return {
      shops: [],
      notice: "#限时特惠#  ",
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
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    handleChange ({ detail }) {
    this.setData({
      current: detail.key
    }); 
    },
    handleChangeScroll (event) {
    this.current_scroll = event.mp.detail.key
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },
  created () {

    const db = wx.cloud.database({ env: 'xcsq-0f8ce5' })
    db.collection('shop').get().then(
      res => {
        console.log(res.data)
        this.shops = res.data
      }
    )
    //cloud functions
    wx.cloud.callFunction({ name: 'me' }).then(
      res =>{
        console.log(res)
      }

    )
    
  }
}</script>

<style scoped>
div >>> .no-border {
  border-width: 0pt;
}
.top-padding {
  padding-top: 50rpx;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>

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
    
    <i-grid i-class="no-border" >
      <i-grid-item v-for="item in shop" :key="item" i-class="no-border">
    <i-panel title="#热门推荐#">
      <view class="top-padding">
        
      <i-card title="#春防大作战#"  thumb="https://thumbs.dreamstime.com/b/%E6%A8%B1%E6%A1%83%E5%BC%80%E8%8A%B1%E7%9A%84%E5%88%86%E6%94%AF%E5%9C%A8%E8%93%9D%E5%A4%A9%E8%83%8C%E6%99%AF%E7%9A%84%E6%99%B4%E6%9C%97%E7%9A%84%E6%98%A5%E6%97%A5%EF%BC%8C%E6%8B%B7%E8%B4%9D%E7%A9%BA%E9%97%B4-108734555.jpg">
        <view slot="content">点击参与讨论</view>
        <view slot="footer">30条讨论</view>
      </i-card>
      <view class="top-padding"></view>
      <i-card title="#好物推荐#" i-class="top-padding"  thumb="http://img1.imgtn.bdimg.com/it/u=584884277,3668815364&fm=26&gp=0.jpg">
        <view slot="content">#生活#</view>
        <view slot="footer">一起来看看吧</view>
      </i-card>
      <view class="top-padding"></view>
    </view>


    </i-panel>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    
    return {
      
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

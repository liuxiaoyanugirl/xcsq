<template>
  <div><i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
    <i-tab key="tab1" title="尊贵皮肤"></i-tab>
    <i-tab key="tab2" title="精美头饰"></i-tab>
    <i-tab key="tab3" title="动态卡片"></i-tab>
</i-tabs>
<image style = "width : 360px; height : 180px;" class="slide-image" src="cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/meitu.jpg" mode="scaleToFill"/> 
      <view class="top-padding">
      <i-card title="精选"  thumb="http://www.lnfda.com/uploads/allimg/150731/1-150I11506424E.jpg">
      </i-card>
      <view class="top-padding"></view>
      <i-card title="卡片标题" i-class="top-padding"  thumb="http://img2.imgtn.bdimg.com/it/u=3359603132,2052509191&fm=214&gp=0.jpg">
      </i-card>
    </view>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      current_scroll: 'tab1',
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
    // let app = getApp()
  }
}
</script>

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

<template>
  <div @click="clickHandle">
 <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
      style="height:200px"
    >
    <block v-for="item in imgUrls" :key="item">
      <swiper-item>
        <image :src="item" style="width:100%;"/>
      </swiper-item>
    </block>
  </swiper>

  <i-panel title="#潮装出行，致敬时尚#">
</i-panel>
    <i-notice-bar icon="systemprompt" loop>
    {{notice}}来这里学会穿搭技巧，让你的生活更时髦！
    </i-notice-bar>
    <i-panel title="#夏季热门推荐#">
      <view class="top-padding">
        <view v-for="item in shops" :key='item' class="top-padding">
      <i-card :title="item.name" :extra="item.introdnpmuction" :thumb="item.pic">
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
      imgUrls: [
        'cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/a.jpg',
        'cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/b.jpg',
        'cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/c.jpg',
        'cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/d.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      shops: [],
      notice: "#限时特惠#",
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
      const url = '../change/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    bindViewTap () {
      const url = '../change/main'
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

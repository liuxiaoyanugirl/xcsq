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
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559099177&di=0c7989a706c0eb6ee8f0d9793fe8fc31&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160429%2F714a17b47953472bac8f4332784c09e0_th.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558504503972&di=b7118e6b1ac768aec89e249e767c74fe&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171220%2Fcdb1484dd2f8460dbf75f01731483081.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559099670&di=f900f09f73ea389271a1bdd421a493ce&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7f52e85cbd446e9c3da0d56769632912a209b3711aa23-SuKxgu_fw236'
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

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
    <i-notice-bar icon="systemprompt" loop>
    {{notice}}来这里查看穿搭技巧，让你的生活更时髦！
    </i-notice-bar>

    <i-grid i-class="no-border">
      <i-grid-item @click="goList(item.url)" i-class="no-border" v-for="item in grids" :key="item">
          <i-grid-icon>
              <image :src="item.img" />
          </i-grid-icon>
          <i-grid-label>{{item.type}}</i-grid-label>
      </i-grid-item>
  </i-grid>
  <i-panel class="top-padding">博主推荐</i-panel>
   <view> 
      <i-card title="清凉性感" extra="英伦复古纯色T恤"   thumb="cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/3.jpeg">
      </i-card>
      <i-card title="简洁低调" extra="英伦复古纯色T恤"   thumb="cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/1.jpeg">
      </i-card>
      <i-card title="清凉性感" extra="英伦复古纯色T恤"   thumb="cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/3.jpeg">
      </i-card>
      <i-card title="简洁低调" extra="英伦复古纯色T恤"   thumb="cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/1.jpeg">
      </i-card>
      <i-card title="清凉性感" extra="英伦复古纯色T恤"   thumb="cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/3.jpeg">
      </i-card>
      <i-card title="简洁低调" extra="英伦复古纯色T恤"   thumb="cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/1.jpeg">
      </i-card>
    </view>
    <Back-top :height="100" :bottom="100">
        <div class="top">返回顶端</div>
    </Back-top>
  </div>
  
</template>

<script>
import card from '@/components/card'
export default {
  data () {
    return {
      imgUrls: [
        'cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/d.jpg',
        'cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/b.jpg',
        'cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/c.jpg',
        'cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/a.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
       grids: [
        {type:'男孩子',img:'/static/images/boy.png',"url":'../list/main?type=1'},
        {type:'女孩子',img:'/static/images/girl.png',"url":'../list/main?type=2'},
        {type:'中性风',img:'/static/images/boy.png',"url":'../list/main?type=3'}
      ],
      shops: [],
      notice: "#潮装出行，致敬时尚#",
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
.top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
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
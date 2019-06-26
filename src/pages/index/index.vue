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
 <i-grid>
      <i-grid-item @click="goType(grid)"  v-for="grid in grids" :key="grid">
          <i-grid-icon>
              <image :src="grid.image" />
          </i-grid-icon>
          <i-grid-label>{{grid.title}}</i-grid-label>
      </i-grid-item>
 </i-grid>
  <view  class="box1"> 
   博主推荐
  </view>

   <view style="padding:15px"> 
      <i-card v-for="item in top" :key="item" i-class="split" :title="item.name" :thumb="item.image" >
        <view slot="content">{{item.remark}}</view>
        <view slot="footer">{{item.address}}</view>
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
        {title:'男孩子',image:'/static/images/boy.png',},
        {title:'女孩子',image:'/static/images/girl.png'},
        {title:'中性风',image:'/static/images/both.png'}
      ],
      top:[
     {name:"简洁低调潮装出行，致敬时尚潮装出行",address:"英伦小铺",image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/3.jpeg",remark:"英伦复古纯色T恤"}, 
     {name:"简洁低调",address:"英伦小铺",image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/3.jpeg",remark:"英伦复古纯色T恤"},
     {name:"简洁低调",address:"英伦小铺",image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/3.jpeg",remark:"英伦复古纯色T恤"},
     {name:"简洁低调",address:"英伦小铺",image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/3.jpeg",remark:"英伦复古纯色T恤"},
     {name:"简洁低调",address:"英伦小铺",image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/3.jpeg",remark:"英伦复古纯色T恤"}
      ],
      notice: "#潮装出行，致敬时尚#",
    }
  },
  components: {
    card
  },
  methods: {
    goType(type){
      console.log(type)
       let url = '../list/main?type=' + type.title
      mpvue.navigateTo({ url })
    },
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
.box1{
  margin-left: 20px;
  margin-bottom: 10px;
  width: 100px;
  height: 30px;
  text-align: left;
  line-height: 30px;
  border-radius: 8%;
  color: aqua;
  font-size: 20px;
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
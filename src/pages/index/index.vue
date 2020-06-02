<template>
  <div @click="clickHandle" >
     <view >
  
     <img class="freeBG" src="/static/images/girl.gif">
     1324365
    <view > 
      <i-card v-for="item in top" :key="item" :title="item.name" :thumb="item.image" >
      </i-card>
      
    </view>
      <div class="say">
       
  
      </div>
    </view>
  </div>
  
</template>

<script>
import card from '@/components/card'
export default {
  data () {
    return {
      value: '123',
      indicatorDots: true,
      autoplay: true,
      duration: 1000,
      top:[
     {name:"简洁低调",address:"英伦小铺",image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5-1259004537/xcsq/卡通猪.png"}, 
     {name:"简洁低调",address:"英伦小铺",image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5-1259004537/xcsq/卡通猪.png"},
     {name:"简洁低调",address:"英伦小铺",image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5-1259004537/xcsq/卡通猪.png"}
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
<style >
.say {
width: 176px;
height: 260px;
border: yellow solid 10rpx;
border-radius: 180px 1px 180px 40px;
margin: 72px auto;
transform: rotate(22deg);
transform-origin: ;
transform-origin: right top;
}
.i-card {
font-size: 14px;
overflow: hidden;
position: relative;
background: #fff;
border: 1rpx solid #dddee1;
border-radius: 5px;
}

</style>
</style>
<style scoped>
.split{
  height: 20%;
}
.freeBG{
         width: 100%;
         height: 100%;
         position: absolute;
         z-index: -1;
}
.panel{
       height: 20%;
        padding-top: 10px;
        margin: 10px auto;
        background:wheat;
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
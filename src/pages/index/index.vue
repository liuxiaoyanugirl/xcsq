<template>
  <div @click="clickHandle">
    <i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
    <i-tab key="tab1" title="推荐"></i-tab>
    <i-tab key="tab2" title="关注"></i-tab>
</i-tabs>
  <image style = "width : 360px; height : 180px;" class="slide-image" src="http://img3.imgtn.bdimg.com/it/u=1655788903,3313191624&fm=26&gp=0.jpg" mode="scaleToFill"/> 
  <i-panel title="#喵星人快报#  快来看新鲜出炉的彩色小喵咪">
</i-panel>
    <i-notice-bar icon="systemprompt" loop>
    {{notice}}游戏积分可以限时兑换大量礼品啦，小主们快来看看吧！
    </i-notice-bar>
    <i-panel title="本周新宠榜" ></i-panel>
    <i-grid i-class="no-border" >
      <i-grid-item v-for="item in grids" :key="item" i-class="no-border">
      <i-grid-label>{{item}}</i-grid-label>
      </i-grid-item>
    </i-grid>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/grid/fish.png" />
        </i-grid-icon>
        <i-grid-label>coco</i-grid-label>
    </i-grid-item>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/grid/rabbit.png" />
        </i-grid-icon>
        <i-grid-label>奶糖</i-grid-label>
    </i-grid-item>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/grid/cat.png" />
        </i-grid-icon>
        <i-grid-label>花花</i-grid-label>
    </i-grid-item>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/grid/dog.png" />
        </i-grid-icon>
        <i-grid-label>噜噜</i-grid-label>
    </i-grid-item>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/grid/duk.png" />
        </i-grid-icon>
        <i-grid-label>小花</i-grid-label>
    </i-grid-item>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/grid/misc.png" />
        </i-grid-icon>
        <i-grid-label>查看更多</i-grid-label>
    </i-grid-item>
    <i-panel title="#热门推荐#">
      <view class="top-padding">
      <i-card title="#春防大作战#"  thumb="https://thumbs.dreamstime.com/b/%E6%A8%B1%E6%A1%83%E5%BC%80%E8%8A%B1%E7%9A%84%E5%88%86%E6%94%AF%E5%9C%A8%E8%93%9D%E5%A4%A9%E8%83%8C%E6%99%AF%E7%9A%84%E6%99%B4%E6%9C%97%E7%9A%84%E6%98%A5%E6%97%A5%EF%BC%8C%E6%8B%B7%E8%B4%9D%E7%A9%BA%E9%97%B4-108734555.jpg">
        <view slot="content">点击参与讨论</view>
        <view slot="footer">30条讨论</view>
      </i-card>
      <view class="top-padding"></view>
      <i-card title="#新年表情包大赛#" i-class="top-padding"  thumb="http://img.zcool.cn/community/03178f958818f81a8012060c852249e.jpg">
        <view slot="content">点击参与讨论</view>
        <view slot="footer">215条讨论</view>
      </i-card>
      <view class="top-padding"></view>
      <i-card title="#最囧萌宠睡姿#" i-class="top-padding"  thumb="http://n.sinaimg.cn/sinacn17/648/w640h808/20180624/3996-heirxyf1725415.jpg">
        <view slot="content">#生活#</view>
        <view slot="footer">639条讨论</view>
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
      grids:['西点','主食','外卖','饮品','零食','面食'],
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

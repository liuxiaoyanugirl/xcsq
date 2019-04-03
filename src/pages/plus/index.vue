<template>
  <div>
     <i-panel title="快来分享你和主子的新鲜事吧...">
    <view style="padding: 120px;">点击发布</view>
</i-panel>

    <i-button bind:getuserinfo="handleClick" type="info" style = "width : 10px; height : 5px;" size="small" shape="circle">发布</i-button>
    <i-button bind:click="handleClick" type="ghost"   size="small" shape="circle">取消发布</i-button>
     <i-grid i-class="no-border" >
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
</i-grid>
  </div>
</template>
<script>
import card from '@/components/card'

export default {
  data () {
    return {
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
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
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

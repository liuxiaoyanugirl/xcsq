<template>
  <div>
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
  onLoad (option){
    console.log(option.type)
    this.recommand = require('@/data/' + option.type + '.json')
  },

  created () {
  }
}
</script>

<style scoped>
div >>> .split {
  margin-bottom: 10pt;
}
</style>

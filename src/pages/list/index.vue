<template>
  <div>
     <i-card v-for="item in list" :key="item" i-class="split" :title="item.name" :thumb="item.image" >
        <view slot="content">{{item.remark}}</view>
        <view slot="footer">{{item.address}}</view>
      </i-card>
  </div>
</template>

<script>

import card from '@/components/card'
export default {
  data () {
    return {
      list:[]
    }
  },
  components: {
    card
  },
  onLoad (option){
    this.list = require('@/data/' + option.type + '.json')
    console.log(this.list)
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

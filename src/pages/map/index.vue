<template>
  <div style="width:100%; height:100%">
    <map
  id="map"
  longitude="113.324520"
  latitude="23.099994"
  scale="14"
  :controls="controls"
  @controltap="controltap"
  :markers="markers"
  @markertap="markertap"
  :polyline="polyline"
  @regionchange="regionchange"
  show-location
  style="width: 100%; height: 100%;"
></map>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
    markers: [{
      iconPath: '/static/grid/1.png',
      id: 0,
      latitude: 30.571331,
      longitude: 114.347997,
      width: 50,
      height: 50
    }],
}
  },


  components: {
    card
  },

  methods: {
    regionchange(event) {
        console.log(event)
    },
          markertap(event) {
        console.log(event)
      },

    controltap(event) {
        console.log(event)
      }
  },

  created () {
    // let app = getApp()
  },
    }
  
</script>

<style >
body,html{height:100%}
</style>

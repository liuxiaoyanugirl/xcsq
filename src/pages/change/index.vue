<template>
<div>
  今日排行<i-button type="primary" shape="circle">刷新</i-button>
  <i-grid>
      <i-grid-item @click="goType(grid)"  v-for="grid in grids" :key="grid">
          <i-grid-icon>
              <image :src="grid.image" />
          </i-grid-icon>
      </i-grid-item>
 </i-grid>
<div class="run1">
  <img  class="img" src="cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5-1259004537/xcsq/4款创意坐姿动物矢量素材.jpg">
</div>
<div class="run2">
  <img  class="img" src="cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5-1259004537/xcsq/4款创意坐姿动物矢量素材.jpg">
</div>
<div class="run1">
  <img  class="img" src="cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5-1259004537/xcsq/4款创意坐姿动物矢量素材.jpg">
</div>
<div class="run2">
 <img  class="img" src="cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5-1259004537/xcsq/4款创意坐姿动物矢量素材.jpg">
</div>
<div class="run1">
 <img  class="img" src="cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5-1259004537/xcsq/4款创意坐姿动物矢量素材.jpg">
</div>

<!--index.wxml-->
<view class="container">
  <ec-canvas id="mychart-dom-graph" canvas-id="mychart-graph" ec="{{ ec }}"></ec-canvas>
</view>


</div>
</template>

<script>

import * as echarts from '../../ec-canvas/echarts';
const app = getApp();
 
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
 
  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F"],
    tooltip: {},
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      indicator: [{
        name: '食品',
        max: 500
      },
      {
        name: '玩具',
        max: 500
      },
      {
        name: '服饰',
        max: 500
      },
      {
        name: '绘本',
        max: 500
      },
      {
        name: '医疗',
        max: 500
      },
      {
        name: '门票',
        max: 500
      }
      ]
    },
    series: [{
      name: '预算 vs 开销',
      type: 'radar',
      data: [{
        value: [430, 340, 500, 300, 490, 400],
        name: '预算'
      },
      {
        value: [300, 430, 150, 300, 420, 250],
        name: '开销'
      }
      ]
    }]
  };
 
  chart.setOption(option);
  return chart;
}
 
Page({
  data: {
    ec: {
      onInit: initChart
    }
  },
 
  onReady() {
  }
});

export default {
 
  data () {
    return {
       grids: [
        {image:'/static/images/0.png',},
        {image:'/static/images/1.png'},
        {image:'/static/images/2.png'},
        {image:'/static/images/3.png',},
        {image:'/static/images/4.png'},
        {image:'/static/images/5.png'},
        {image:'/static/images/6.png',},
        {image:'/static/images/7.png'},
        {image:'/static/images/8.png'},
        {image:'/static/images/9.png'}
      ]
      
    }
  }
}
</script>

<style scoped>
/**app.wxss**/
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
} 
 
/**index.wxss**/
ec-canvas {
  width: 100%;
  height: 100%;
}
.img{
  height: 100%;
  width: 36px;
 
}
.run1{
  height: 50px;
  width: 100%;
 
  background:	PowDerBlue;
}
.run2{
   height: 50px;
  width: 100%;
  background:	Moccasin;
}
.freeBG{
         margin: auto;
         z-index: -1;
}
</style>

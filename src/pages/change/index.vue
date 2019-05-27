<template>
  <div>
<i-tabs :current="current" @change="handleChange">
    <i-tab key="tab1" title="学院日常"></i-tab>
    <i-tab key="tab2" title="面试轻熟"></i-tab>
    <i-tab key="tab3" title="出游度假"></i-tab>
    <i-tab key="tab4" title="运动朋克"></i-tab>
</i-tabs>
  <view v-if="show1">  
    <i-card style="padding: 15px;" v-for="item in top1" :key="item">
    <view slot="content"><image style="width:100%;height:80pt;" :src="item.image" /></view>
    <view slot="footer">{{item.introduce}}</view>    
    </i-card>
  </view>
  <view v-if="show2">
     <i-card style="padding: 15px;" v-for="item in top2" :key="item">
     <view slot="content"><image style="width:100%;height:80pt;" :src="item.image" /></view>
     <view slot="footer">{{item.introduce}}</view>    
     </i-card>
  </view>
  <view v-if="show3">
     <i-card style="padding: 15px;" v-for="item in top3" :key="item">
     <view slot="content"><image style="width:100%;height:80pt;" :src="item.image" /></view>
     <view slot="footer">{{item.introduce}}</view>    
     </i-card>
  </view>
  <view v-if="show4">
     <i-card style="padding: 15px;" v-for="item in top4" :key="item">
     <view slot="content"><image style="width:100%;height:80pt;" :src="item.image" /></view>
     <view slot="footer">{{item.introduce}}</view>    
     </i-card>
  </view>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
        current:'tab1',
        show1: true,
        show2: false,
        show3: false,
        show4: false,
        top1: [
         {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/dailyboy1.jpg",introduce:"“休闲舒适的日常穿搭，元气满满"},
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/daily1.jpg",introduce:"休闲舒适的日常穿搭，元气满满"},  
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/daily2.jpg",introduce:"“休闲舒适的日常穿搭，元气满满"},
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/daily3.jpg",introduce:"休闲舒适的日常穿搭，元气满满"},            
            ],
        top2: [
         {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/1.jpeg",introduce:"“成熟稳重的服装搭配，让你自信面对生活挑战"},
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/2.jpeg",introduce:"成熟稳重的服装搭配，让你自信面对生活挑战"},  
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/3.jpeg",introduce:"“成熟稳重的服装搭配，让你自信面对生活挑战"},
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/5.jpeg",introduce:"成熟稳重的服装搭配，让你自信面对生活挑战"},            
            ],
        top3: [
         {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/vac1.jpg",introduce:"“度假就要挑眼，拍照张扬才好看"},
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/vac 2.jpg",introduce:"度假就要挑眼，拍照张扬才好看"},  
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/vac 3.jpg",introduce:"“度假就要挑眼，拍照张扬才好看"},
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/vac4.jpg",introduce:"度假就要挑眼，拍照张扬才好看"},            
            ],
        top4: [
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/cool1.jpg",introduce:"“度假就要挑眼，拍照张扬才好看"},
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/cool2.jpg",introduce:"度假就要挑眼，拍照张扬才好看"},  
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/cool3.jpg",introduce:"“度假就要挑眼，拍照张扬才好看"},
          {image:"cloud://xcsq-0f8ce5.7863-xcsq-0f8ce5/xcsq/cool4.jpg",introduce:"度假就要挑眼，拍照张扬才好看"},            
            ]
      }     
    },
  components: {
    card
  },
  methods: {
    handleChange ( detail ) {
      console.log(detail)
        this.current = detail.mp.detail.key
        if (this.current === 'tab1'){
          this.show1 = true;
          this.show2 = false;
          this.show3 = false;
          this.show4 = false;
        }else if(this.current === 'tab2'){
          this.show1 = false;
          this.show2 = true;
          this.show3 = false;
          this.show4 = false;
        }else if(this.current ==='tab3'){
          this.show1 = false;
          this.show2 = false;
          this.show3 = true;
          this.show4 = false;
        }else{
          this.show1 = false;
          this.show2 = false;
          this.show3 = false;
          this.show4 = true;
        }
    }

  },

  created () {

  }
}
</script>

<style scoped>
</style>

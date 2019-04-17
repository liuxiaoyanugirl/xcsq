import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'


//cloud
wx.cloud.init({
    traceUser: true
  })

  var Fly = require('flyio/dist/npm/wx')
  var fly = new Fly()
  Vue.prototype.$http = fly
 
  const app = new Vue(App)
app.$mount()
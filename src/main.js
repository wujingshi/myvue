// 第三方插件
import Vue from 'vue'
import Vant from 'vant'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Vue.config.productionTip = false 集成中间件
Vue.use(Vant);
Vue.use(VueRouter);
Vue.use(VueResource);


// 引入CSS
import 'vant/lib/vant-css/index.css';
import './assets/css/index.css'

//导入App.vue
import App from './App.vue'


// 导入组件
import home from './components/home/home.vue'
import music from './components/music/music.vue'
import foodClassify from './components/food/foodClassify.vue'

// 创建路由实例
const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/music',component:music},
    {path:'/foodClassify',component:foodClassify}
  ]
})


new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {
    App
  }
})

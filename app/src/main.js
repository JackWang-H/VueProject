import Vue from 'vue'
import App from './App.vue'

import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)
// 将三级联动注册为全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)

import router from '@/router'

import store from '@/store'

Vue.config.productionTip = false

import '@/mock/mockServe'
import 'swiper/css/swiper.css'
new Vue({
  render: h => h(App),
  beforeCreate() {
    // 配置全局事件总线
    Vue.prototype.$bus = this
  },
  // 注册路由信息，当这里写router的时候，组件身上拥有$route,$router
  router,
  // 注册仓库，足见实例身上多一个$store属性
  store
}).$mount('#app')

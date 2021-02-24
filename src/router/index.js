import Vue from 'vue'
import VueRouter from 'vue-router'  //导入

import home from 'views/home/home.vue'

//安装插件 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    component: home,
    // redirect: 'Home' //重定向
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('views/cart/cart.vue'),
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('views/category/category.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('views/profile/profile.vue'),
  }
]

//创建VueRouter对象
const router = new VueRouter({
  mode: 'history',//html模式，默认不写是hash模式
  base: process.env.BASE_URL,
  routes//配置路由和组件之间的应用关系
})

export default router

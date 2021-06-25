import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/login.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/login.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import(/* webpackChunkName: "login" */ '../pages/game.vue')
  },
  {
    path: '/rankList',
    name: 'rankList',
    component: () => import(/* webpackChunkName: "rankList" */ '../pages/rankList.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

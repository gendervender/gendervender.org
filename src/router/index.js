import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Stories from '../views/Stories.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import('../views/Donate.vue')
  },
  {
    path: '/stories/:id',
    name: "stories",
    component: Stories,
    props: true
  },
  {
    path: '*',
    name: "error",
    component: () => import('../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      let selector = document.querySelector(to.hash);
      let top = selector.offsetTop
      return {x: 0, y: top}
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

export default router

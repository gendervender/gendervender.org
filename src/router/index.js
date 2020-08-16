import Vue from 'vue'
import VueRouter from 'vue-router'
import Home        from '../views/Home';
import Contact     from '../views/Contact';
import Stories     from '../views/Stories';
import About       from '../views/About';
import Team        from '../views/Team';
import Order       from '../views/Order';
import ErrorPage   from '../views/Error';

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
    component: Contact
  },
  {
    path: '/stories',
    name: 'stories',
    component: Stories
  },
  {
    path: '/stories/:id',
    name: "stories",
    component: Stories,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '*',
    name: "error",
    component: ErrorPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home            from '@/views/Home';
import Contact         from '@/views/Contact';
import Stories         from '@/views/Stories';
import About           from '@/views/About';
import Team            from '@/views/Team';
import Products        from '@/views/Products';
import Shop            from '@/views/Shop';
import ErrorPage       from '@/views/Error';
import PrivacyPolicy   from '@/views/PrivacyPolicy';
import OrderConfirmed  from '@/views/OrderConfirmed';

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
    name: "stories-detail",
    component: Stories,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  { path: '/about.', redirect: { name: 'about' }},
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/shop/:id',
    name: 'shop-checkout',
    component: Shop
  },
  {
    path: '/order-confirmed',
    name: 'order-confirmed',
    component: OrderConfirmed
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy
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

router.beforeEach((to, from, next) => {
  Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    next();
  });
})
export default router

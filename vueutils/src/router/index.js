import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import Category from '../views/category/Category'
import Cart from '../views/cart/Cart'
import Profile from '../views/profile/Profile'
import VuexTest from '../views/test/VuexTest'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/test/vuex',
    component: VuexTest
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home';
// import About from '../components/About';
// import User from '../components/User'

//路由懒加载
const Home = ()=>import('../components/Home');
const About = ()=>import('../components/About');
const User = ()=>import('../components/User');
const HomeNews = ()=>import('../components/HomeNews');
const HomeMessage = ()=>import('../components/HomeMessage');
const Profile = ()=>import('../components/Profile');
Vue.use(Router)

const routes = [
  {
    path: '',
    //默认显示home组件
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    //嵌套路由
    children: [
      //嵌套路由默认路径
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    meta: {
      title: '关于'
    },
    beforeEnter: (to, from, next) => {
      console.log('about beforeEnter');
      next();
    },
    component: About
  },
  {
    //动态绑定路由
    path: '/user/:userId',
    meta: {
      title: '用户'
    },
    component: User
  },
  {
    path: '/profile',
    meta: {
      title: '档案'
    },
    component: Profile
  }
]
const router = new Router({
  routes,
  mode: 'history',
  //修改点击class
  linkActiveClass: 'active'
})

//导航守卫, 前置guard
router.beforeEach((to, from, next)=>{
  document.title = to.matched[0].meta.title;
  // console.log(to);
  //从from跳转到to
  next();
})

//后置钩子 hook
router.afterEach((to, from) => {
  // console.log(to);
});

export default router;

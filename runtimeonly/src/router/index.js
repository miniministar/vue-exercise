//配置路由相关信息
import VueRouter  from 'vue-router';
import Vue from 'vue';

//1.通过Vue.use（插件）,安装插件
Vue.use(VueRouter);
//2、创建vueRouter对象
const routers = [];
 const router = new VueRouter({
   //配置路径和组件之间的映射关系, es6的增强写法，使用上面定义的routers对象
   routers
 });

 //导出router
 export default router;

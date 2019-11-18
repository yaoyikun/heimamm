// 导入Vue
import Vue from 'vue';
// 导入路由
// import router from 'vue-router';
import VueRouter from 'vue-router';

// 注册路由
Vue.use(VueRouter);



// 导入 login 组件
import login from '../views/login/login.vue'
// 创建路由规则
const routes = [ // login
    {path:'/login',component:login}];

// 创建路由对象
const router = new VueRouter({
    routes
  });

// 暴露出去
export default router;
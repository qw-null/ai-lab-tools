import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    redirect: "/home",
    children: [
      {
        /* 首页 */
        path: "home",
        component: () => import("@/views/home/index"),
      },
      {
        /* 关于我们 */
        path: "about",
        component: () => import("@/views/about/index"),
      },
    ],
  },
  {
    /* 登录页面 */
    path: "/login",
    component: () => import("@/views/login/index"),
  },
  {
    /* 注册页面 */
    path: "/register",
    component: () => import("@/views/register/index"),
  },
  {
    /* 智能工具与服务 - 自动化标注平台 */
    path: "/autoMark",
    component: () => import("@/views/aiTools/autoMark/index"),
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes
});

// router.beforeEach((to, from, next) => {
//   // 1.如果访问的是登录页面（无需权限），直接放行
//   if (to.path === '/login' || to.path === '/home' || to.path === '/about') return next()
//   // 2.如果访问的是有登录权限的页面，先要获取token
//   const tokenStr = localStorage.getItem('userInfoAI')
//   // 2.1如果token为空，强制跳转到登录页面；否则，直接放行
//   if (!tokenStr) {
//     // this.$message('请登录');
//     return next('/login')
//   }
//   next()
// })

export default router;

import Vue from "vue";
import NProgress from "nprogress";
import store from "./store";
import { getToken } from "./utils/auth";
import whiteList from "./router/whiteList";
import router from "./router";

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  /* 启动NProgress进度条 */
  NProgress.start();
  if (getToken()) {
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      const information = store.getters.userInfo;
      // 判断当前用户是否已拉取完userInfo信息
      if (Object.keys(information).length === 0) {
        // console.log('2222', JSON.parse(localStorage.getItem('userInfoAI')).user_token);
        store
          .dispatch("GetInfo")
          // eslint-disable-next-line no-unused-vars
          .then((response) => {
            console.log('响应正确', response)
            if (response.data != '') {
              store.dispatch('logIn', to.meta.title)
              next();
              NProgress.done();
            } else {
              Vue.prototype.msgWarning("登录状态已过期，请重新登录");
              store.dispatch("logOut").then(() => {
                next({ path: "/" });
              });
            }
          })
          // eslint-disable-next-line no-unused-vars
          .catch((err) => {
            Vue.prototype.msgWarning("登录状态已过期，请重新登录");
            store.dispatch("logOut").then(() => {
              next({ path: "/" });
            });
          });
      } else {
        next();
      }
    }
  } else {
    // 没有Token
    if (whiteList.includes(to.path)) {
      // 在免登录白名单，直接进入
      next();
    } else {
      Vue.prototype.$confirm("您还没有登录，是否前往登录页面？", "提示", {
        // eslint-disable-next-line no-unused-vars
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        next({ path: "/login" });
      });
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

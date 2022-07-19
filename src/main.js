import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import axios from "axios";
import store from "@/store";

import { parseTime } from "./utils/dateFormat";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueParticles from "vue-particles";
// 开启权限控制, 当接口联通后取消注释这句
import "./permission";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.prototype.msgSuccess = function (msg) {
  this.$message.success(msg);
};

Vue.prototype.msgError = function (msg) {
  this.$message.error(msg);
};

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
};

Vue.prototype.msgWarning = function (msg) {
  this.$message.warning(msg);
};

Vue.prototype.parseTime = parseTime;
Vue.prototype.axios = axios;

Vue.use(Antd);
Vue.use(VueParticles);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

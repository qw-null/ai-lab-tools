import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import { removeToken } from "@/utils/auth";
import { getInfo } from "@/api/user";

Vue.use(Vuex);

const state = {
  loginStatus: false,
  routePath: "/home",
  userInfo: {},
};

const mutations = {
  SET_PATH: (state, path) => {
    state.routePath = path;
  },
  LOG_IN: (state) => {
    state.loginStatus = true;
  },
  LOG_OUT: (state) => {
    state.loginStatus = false;
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo;
  },
};

const actions = {
  setRoutePath ({ commit }, path) {
    commit("SET_PATH", path);
  },
  logIn ({ commit }) {
    commit("LOG_IN");
  },
  logOut ({ commit }) {
    removeToken();
    commit("LOG_OUT");
    commit("SET_USERINFO", {});
  },
  GetInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then((response) => {
          if (response.code == 200) {
            commit("SET_USERINFO", response.data);
            resolve(response);
          } else {
            reject(response.code);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

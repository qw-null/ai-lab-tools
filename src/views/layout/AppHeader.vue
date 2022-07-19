<template>
  <a-affix>
    <div id="app-header">
      <div class="header-container">
        <div class="logo-left">
          <img
            src="../../assets/logo.png"
            class="logo-image"
          />
        </div>
        <div class="menu-middle">
          <a-menu
            v-model="current"
            mode="horizontal"
          >
            <a-menu-item
              key="/home"
              @click="gotoPath('/')"
            > 首页</a-menu-item>
            <a-sub-menu>
              <template slot="title">智能工具与服务</template>
              <a-menu-item @click="gotoPath('/autoMark')">自动化标注平台</a-menu-item>
              <a-menu-item>实体识别与抽取</a-menu-item>
              <a-menu-item>实体对齐与术语标准化</a-menu-item>
              <a-menu-item>关系识别与抽取</a-menu-item>
              <a-menu-item>医学指南库</a-menu-item>
              <a-menu-item>知识发现服务</a-menu-item>
              <a-menu-item>手写汉字识别</a-menu-item>
              <a-menu-item>数据集服务</a-menu-item>
            </a-sub-menu>
            <a-sub-menu>
              <template slot="title">研究交流与分享</template>
              <a-menu-item>成果分享</a-menu-item>
              <a-menu-item>项目交流</a-menu-item>
              <a-menu-item>论文推荐</a-menu-item>
              <a-menu-item>知识发现</a-menu-item>
              <a-menu-item>NLP入门实践</a-menu-item>
              <a-menu-item>话题讨论</a-menu-item>
            </a-sub-menu>
            <a-sub-menu>
              <template slot="title">行业应用</template>
              <a-menu-item>医疗AI-诊疗辅助</a-menu-item>
              <a-menu-item>智慧水务/智能水厂/智慧国土/智慧工地</a-menu-item>
              <a-menu-item>气象大数据与行业智能服务/文情大数据与智能分析</a-menu-item>
              <a-menu-item>教育AI-学习认知与创新实践服务</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="/fusion"> 科教融合</a-menu-item>
            <a-menu-item
              key="/about"
              @click="gotoPath('/about')"
            >
              关于我们
            </a-menu-item>
          </a-menu>
        </div>
        <div
          class="login-right"
          v-if="!loginStatus"
        >
          <div
            class="student"
            @click="gotoPath('/login')"
          >登录/注册</div>
        </div>
        <div
          class="login-right"
          v-else
        >
          <drop-menu />
        </div>
      </div>
    </div>
  </a-affix>
</template>

<script>
import DropMenu from "@/views/layout/DropMenu";

export default {
  name: "AppHeader",
  components: {
    DropMenu,
  },
  computed: {
    current: {
      get () {
        return [this.$route.path];
      },
      set (value) {
        this.$store.dispatch("setRoutePath", value[0]);
      },
    },
    loginStatus () {
      return this.$store.getters.loginStatus;
    },
  },
  methods: {
    gotoPath (path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
#app-header {
  height: 70px;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header-container {
  width: 1140px;
  height: 100%;
  margin: auto;
  display: flex;
}

.header-container .ant-menu {
  height: 100%;
}

.header-container .ant-menu-horizontal {
  border-bottom: 0;
  line-height: 70px;
}

.header-container .ant-menu-item {
  height: 100%;
}

.logo-image {
  height: 85%;
  object-fit: contain;
}

.logo-left {
  width: 300px;
  position: relative;
}

.logo-left img {
  width: 300px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.menu-middle {
  flex: 1;
}

.login-right {
  width: 200px;
}

.student {
  height: 100%;
  width: 100%;
  display: inline-block;
  line-height: 70px;
  font-weight: bold;
  color: #606266;
  text-align: center;
}

.student:hover {
  color: #409eff;
  cursor: pointer;
}

.unlogin {
  font-weight: bold;
  color: #409eff;
}
</style>

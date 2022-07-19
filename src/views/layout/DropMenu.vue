<template>
  <a-dropdown :trigger="['click']">
    <div class="welcome">
      <a-avatar style="color: #409eff; background-color: rgb(217, 236, 255)">
        {{ "管" }}
      </a-avatar>
      &nbsp;&nbsp;{{ "admin" }}&nbsp;&nbsp;
      <a-icon type="down" />
    </div>
    <a-menu slot="overlay">
      <a-menu-item
        key="0"
        @click="gotoPath('/user')"
      >
        <a-icon type="home" />
        个人中心
      </a-menu-item>
      <a-menu-item
        key="2"
        @click="gotoPath('/user/change')"
      >
        <a-icon type="unlock" />
        修改密码
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item
        key="3"
        @click="doLogOut"
      >
        <a-icon type="logout" />
        退出登录
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: "DropMenu",
  computed: {
    userInfo () {
      return this.$store.getters.userInfo;
    },
  },
  methods: {
    doLogOut () {
      // localStorage.removeItem('userInfoAI')
      this.$store.dispatch("logOut");
      this.msgWarning("已退出登录");
      this.$router.push("/");
    },
    gotoPath: (url) => this.$router.push(url),
  },
};
</script>

<style scoped>
.welcome {
  line-height: 70px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.welcome:hover {
  color: #409eff;
  cursor: pointer;
}
</style>

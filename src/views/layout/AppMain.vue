<template>
  <div class="app-main">
    <home-carousel v-show="key === '/home'" />
    <about-jumbotron v-show="key === '/about'" />
    <div class="app-main-container">
      <transition
        name="fade-transform"
        mode="out-in"
      >
        <keep-alive>
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import HomeCarousel from "@/views/layout/components/HomeCarousel";
import AboutJumbotron from "@/views/layout/components/AboutJumbotron";

export default {
  name: "AppMain",
  components: { AboutJumbotron, HomeCarousel },
  computed: {
    key () {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.2s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.app-main {
  overflow-x: hidden;
}

.app-main-container {
  overflow-x: hidden;
  width: 1140px;
  margin: auto;
}
</style>

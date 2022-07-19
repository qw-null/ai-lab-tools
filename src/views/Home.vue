<template>
  <div class="home">
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import AppMain from "@/views/layout/AppMain";
import AppHeader from "@/views/layout/AppHeader";
import AppFooter from "@/views/layout/AppFooter";

export default {
  name: "Home",
  components: {
    AppFooter,
    AppHeader,
    AppMain,
  },
};
</script>

<style scoped></style>

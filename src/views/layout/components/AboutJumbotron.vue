<template>
  <div class="bg-img">
    <div class="bg-span">
      <div class="bg-span-text">
        <div>大数据技术与认知智能实验室</div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutJumbotron",
};
</script>

<style scoped>
.bg-img {
  height: 380px;
  width: 100%;
  background-image: url("../../../assets/aboutUs/bg_23.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}

.bg-span {
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
}

.bg-span-text {
  width: 480px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: white;
}

.bg-img .line {
  margin-top: 40px;
  height: 4px;
  background-image: linear-gradient(135deg, #c2ffd8 10%, #465efb 100%);
}

.bg-img .line {
  transition: all 0.6s;
}
</style>

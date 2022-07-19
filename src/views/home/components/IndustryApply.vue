<template>
  <div>
    <div class="word1">
      <div class="text1">
        <span>行业应用</span>
      </div>
    </div>
    <div class="part3_1_img">
      <div class="part-fl">
        <div class="img_up img_style">
          <div class="img_text_style">
            <span>医疗AI-诊疗辅助</span>
          </div>
          <img
            src="../../../assets/industryApp/jiaoyu_4.jpg"
            class="bg-image-style"
          />
        </div>
        <div class="img_down img_style">
          <div class="img_text_style">
            <span>智慧水务、智能水厂；智慧国土、智慧工地</span>
          </div>
          <img
            src="../../../assets/industryApp/zhihuichengshi_4.jpg"
            class="bg-image-style"
          />
        </div>
      </div>
      <div class="part-fr">
        <div class="img_left img_style">
          <div class="img_text_style">
            <p>气象大数据与行业智能服务</p>
            <p>文情大数据与智能分析</p>
          </div>
          <img
            src="../../../assets/industryApp/dashujv_5.jpg"
            class="bg-image-style"
          />
        </div>
        <div class="img_right img_style">
          <div class="img_text_style">
            <span>教育AI-学习认知与创新实践服务</span>
          </div>
          <img
            src="../../../assets/industryApp/biancheng_2.jpg"
            class="bg-image-style"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndustryApply",
};
</script>

<style scoped>
.word1 {
  margin-top: 50px;
  text-align: center;
  font-family: "Helvetica Neue";
}

.text1 {
  font-size: 24px;
  color: #565a5c;
  font-weight: bold;
}

.part3_1_img {
  width: 100%;
  height: 500px;
  margin: 50px 0;
}

.part-fl {
  width: 50%;
  height: 100%;
  float: left;
}

.part-fr {
  width: 50%;
  height: 100%;
  float: right;
}

.img_up {
  height: 50%;
  overflow: hidden;
}

.img_style img {
  transition: all 1s;
}

.img_style:hover img {
  transform: scale(1.2);
  cursor: pointer;
}

.img_style {
  position: relative;
}

.img_down {
  height: 50%;
  overflow: hidden;
}

.img_left {
  width: 50%;
  height: 100%;
  float: left;
  overflow: hidden;
}

.img_right {
  width: 50%;
  overflow: hidden;
  float: right;
  height: 100%;
}

.img_text_style {
  position: absolute;
  color: white;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  z-index: 999;
  font-weight: bold;
  cursor: pointer;
}

.bg-image-style {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

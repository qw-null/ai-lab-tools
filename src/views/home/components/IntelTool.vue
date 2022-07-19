<template>
  <div>
    <div class="word1">
      <div class="text1">
        <span>智能工具与服务</span>
      </div>
      <div class="text2">
        <span
          >1.&nbsp;基于用户定义规则的自动化标注&nbsp;&nbsp;2.&nbsp;针对文本类数据的治理与标准化&nbsp;&nbsp;3.&nbsp;知识图谱构建与知识推理&nbsp;&nbsp;4.&nbsp;手写汉字识别</span
        >
      </div>
    </div>
    <div class="part1">
      <div class="image">
        <div class="box" @click="() => this.$router.push('/autoMark')">
          <img src="../../../assets/intelTool/22000.jpg" />
          <div class="box-content">
            <h3 class="title">自动化标注平台</h3>
            <span class="post">Annotation Platform</span>
          </div>
          <ul class="icon">
            <li>
              <a><i class="fa ymq-iconcharulianjie"></i></a>
            </li>
          </ul>
        </div>
        <div class="image1 image21">
          <ul>
            <li>
              <icon-font type="icon-mingmingshitishibie" class="iconstyle1" />
            </li>
            <li class="imgtext">实体识别与抽取</li>
          </ul>
        </div>
        <div class="box">
          <img src="../../../assets/intelTool/327.jpg" />
          <div class="box-content">
            <h3 class="title">实体对齐与术语标准化</h3>
            <span class="post">Entity Alignment</span>
          </div>
          <ul class="icon">
            <li>
              <a><i class="fa ymq-iconcharulianjie"></i></a>
            </li>
          </ul>
        </div>
        <div class="image1 image22">
          <ul>
            <li>
              <icon-font type="icon-guanxichouqu" class="iconstyle1" />
            </li>
            <li class="imgtext">关系识别与抽取</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part1">
      <div class="image" style="margin-top: 0">
        <div class="image1 image23">
          <ul>
            <li>
              <icon-font type="icon-yixuezhinan" class="iconstyle1" />
            </li>
            <li class="imgtext">医学指南库</li>
          </ul>
        </div>
        <div class="box">
          <img src="../../../assets/intelTool/0990.jpg" />
          <div class="box-content">
            <h3 class="title">知识发现服务</h3>
            <span class="post">Knowledge Discovery</span>
          </div>
          <ul class="icon">
            <li>
              <a><i class="fa ymq-iconcharulianjie"></i></a>
            </li>
          </ul>
        </div>
        <div class="image1 image24">
          <ul>
            <li>
              <icon-font type="icon-wenzishibie" class="iconstyle1" />
            </li>
            <li class="imgtext">手写汉字识别</li>
          </ul>
        </div>
        <div class="box">
          <img src="../../../assets/intelTool/7899.jpg" />
          <div class="box-content">
            <h3 class="title">数据集服务</h3>
            <p class="post">WebGIS数据风控、风险筛查</p>
            <p class="post">智能工程应用</p>
          </div>
          <ul class="icon">
            <li>
              <a><i class="fa ymq-iconcharulianjie"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2739864_y4ontjln0b.js",
});

export default {
  name: "IntelTool",
  components: {
    IconFont,
  },
};
</script>

<style scoped>
.part1 {
  height: 50%;
  display: flex;
}

.part1 div {
  flex: 1;
  margin-right: 10px;
}

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

.text2 {
  margin-top: 50px;
  font-size: 16px;
  color: #b0b0b0;
}

.image {
  height: 260px;
  margin-top: 60px;
  display: flex;
}

.image div {
  flex: 1;
  margin-left: 20px;
}

.box {
  font-family: "Ubuntu", sans-serif;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.box:before {
  content: "";
  background: linear-gradient(
    45deg,
    rgba(103, 178, 111, 0.6),
    rgba(76, 162, 205, 0.6)
  );
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 10px 2px #555;
  opacity: 0.5;
  filter: blur(0);
  transform: scale(0.92, 0.9) rotate(0);
}

.box img {
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
}

.box .box-content {
  color: #fff;
  /*text-align: center;*/
  width: 100%;
  opacity: 1;
  transform: translateX(-50%) translateY(-50%) scale(1);
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  transition: all 0.5s ease;
}

.box .title {
  color: #c0c0c0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
}

.box .post {
  font-size: 16px;
  text-transform: capitalize;
  margin-bottom: 5px;
}

.box .icon {
  padding: 0;
  margin: 0;
  list-style: none;
  filter: blur(10px);
  transform: scale(0);
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 2;
  transition: all 0.3s ease 0.2s;
}

.box:hover .icon {
  transform: scale(1);
  filter: blur(0);
}

.box .icon li {
  display: inline-block;
}

.box .icon li a {
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  height: 40px;
  width: 40px;
  margin: 0 3px;
  display: block;
  position: relative;
  transition: all 0.3s;
}

.box .icon li a:hover {
  text-shadow: 0 0 6px #555;
  box-shadow: 0 0 5px #555;
}

.image1 {
  overflow: hidden;
  position: relative;
}

.image1 img {
  transition: all 0.6s;
  width: 100%;
  height: 100%;
}

.image21 {
  background-color: #0dc2b3;
}

.image22 {
  background-color: #fd786f;
}

.image23 {
  background-color: #4abdea;
}

.image1 ul {
  text-align: center;
  list-style: none;
  padding: 0;
  margin-top: 60px;
  cursor: pointer;
}

.image1 li {
  margin: 10px 0;
}

.image24 {
  background-color: #00d44c;
}

.imgtext {
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: all 0.8s;
}

.iconstyle1 {
  color: white;
  font-size: 100px;
}

@keyframes move {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}

.image1:hover {
  z-index: 5;
  animation: move 0.3s linear forwards;
}

.box:hover {
  z-index: 5;
  animation: move 0.3s linear forwards;
}
</style>

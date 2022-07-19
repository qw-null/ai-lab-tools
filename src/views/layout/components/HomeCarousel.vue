<template>
  <a-carousel autoplay>
    <div class="carousel-image image-first">
      <div class="carousel-text-label">
        <div class="text-label-title">计算机视觉</div>
        <div>
          高点视频图像；动作捕捉与姿态估计；基于视频图像的安全监测；医学影像的辅助诊疗。
        </div>
      </div>
    </div>
    <div class="carousel-image image-second">
      <div class="carousel-text-label">
        <div class="text-label-title">智能问答</div>
        <div>
          智能问答系统是将积累的无序语料信息，进行有序和科学的整理，并建立基于知识的分类模型。
        </div>
        <div>
          将用户的问题整理为规范的问答库形式，以支撑各种形式问题的智能问答，方便用户进行答案查找。
        </div>
      </div>
    </div>
    <div class="carousel-image image-third">
      <div class="carousel-text-label">
        <div class="text-label-title">智能工具</div>
        <div>系统在智能工具部分为用户提供了用户个人文档处理服务，</div>
        <div>
          包括分词、标注以及用户个人文档图谱生成，以便用户快速理解文献信息。
        </div>
      </div>
    </div>
    <div class="carousel-image image-fourth">
      <div class="carousel-text-label">
        <div class="text-label-title">知识图谱</div>
        <div>
          知识图谱是图书情报界称为知识域可视化或知识领域映射地图，其目的在于发现显示知识发展的结构信息。
        </div>
      </div>
    </div>
  </a-carousel>
</template>

<script>
export default {
  name: "HomeCarousel",
};
</script>

<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  height: 380px;
  overflow: hidden;
  text-align: center;
}

.carousel-image {
  height: 380px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  font-size: 24px;
}

.carousel-text-label {
  color: white;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.text-label-title {
  font-weight: bold;
  font-size: 44px;
}

.image-first {
  background-image: url("../../../assets/carousel/computer_vision.jpg");
}

.image-second {
  background-image: url("../../../assets/carousel/1.jpg");
}

.image-third {
  background-image: url("../../../assets/carousel/2.png");
}

.image-fourth {
  background-image: url("../../../assets/carousel/3.jpg");
}
</style>

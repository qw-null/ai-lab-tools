<template>
  <div>
    <div class="word1">
      <div class="text1">
        <span>研究交流与分享</span>
      </div>
      <div class="text2">
        <span
          >包含成果分享、项目交流、论文推荐、学习服务、NLP入门实践及话题讨论。</span
        >
      </div>
    </div>
    <div class="part3">
      <div>
        <div class="wordpart3">
          <a-icon type="share-alt" class="textpart3" />
        </div>
        <div class="word3">成果分享</div>
      </div>
      <div>
        <div class="wordpart3">
          <a-icon type="project" class="textpart3" />
        </div>
        <div class="word3">项目交流</div>
      </div>
      <div>
        <div class="wordpart3">
          <a-icon type="read" class="textpart3" />
        </div>
        <div class="word3">论文推荐</div>
      </div>
    </div>
    <div class="part3">
      <div>
        <div class="wordpart3">
          <a-icon type="monitor" class="textpart3" />
        </div>
        <div class="word3">知识发现</div>
      </div>
      <div>
        <div class="wordpart3">
          <a-icon type="code" class="textpart3" />
        </div>
        <div class="word3">NLP入门实践</div>
      </div>
      <div>
        <div class="wordpart3">
          <a-icon type="message" class="textpart3" />
        </div>
        <div class="word3">话题讨论</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResearchShare",
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

.text2 {
  margin-top: 50px;
  font-size: 16px;
  color: #b0b0b0;
}

.part3 {
  display: flex;
  margin-top: 80px;
}

.part3 div {
  flex: 1;
}

.wordpart3 {
  text-align: center;
  line-height: 100px;
  transition: all 0.6s;
}

.textpart3 {
  font-size: 40px;
}

.word3 {
  text-align: center;
  font-size: 22px;
}

.wordpart3:hover {
  cursor: pointer;
  transform: translateY(-10px);
}
</style>

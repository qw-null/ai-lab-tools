<template>
  <div class="home-footer">
    <div class="footer-container">
      <div class="word">
        <div style="margin-top: 20px">
          <span>产品</span>
          <ul>
            <li><a>数据融合平台</a></li>
            <li><a>智能化工具平台</a></li>
            <li><a>智能校园</a></li>
            <li><a>腾讯课堂</a></li>
          </ul>
        </div>
      </div>
      <div class="word">
        <div style="margin-top: 20px">
          <span>关于我们</span>
          <ul>
            <li><a>发展历程</a></li>
            <li><a>了解我们</a></li>
            <li><a>联系我们</a></li>
          </ul>
        </div>
      </div>
      <div class="word">
        <div style="margin-top: 20px">
          <span>资讯</span>
          <ul>
            <li><a>相关新闻</a></li>
            <li><a>行业动态</a></li>
            <li><a>技术分享</a></li>
          </ul>
        </div>
      </div>
      <div class="word">
        <div style="margin-top: 20px">
          <span>联系我们</span>
          <ul style="color: #c0c0c0">
            <li><a-icon type="phone" />&nbsp;&nbsp;13381173397</li>
            <li><a-icon type="mail" />&nbsp;&nbsp;zkzh_edu@126.com</li>
          </ul>
        </div>
      </div>
      <div class="weima">
        <img src="../../assets/qrcode.jpg" width="100px" />
        <div>
          <span>扫一扫关注我们</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.home-footer {
  height: 250px;
  background-color: #333333;
  overflow: hidden;
}

.footer-container {
  width: 1140px;
  height: 100%;
  margin: auto;
  position: relative;
  display: flex;
  overflow: hidden;
}

.footer-container div {
  flex: 1;
}

.footer-container ul {
  list-style: none;
  padding: 0;
}

.footer-container li {
  margin: 10px 0;
}

.word {
  text-align: left;
}

.word span {
  font-size: 16px;
  color: white;
}

.word a {
  color: #c0c0c0;
}

.word a:hover {
  text-decoration: underline;
}

.weima {
  margin: 20px auto;
  width: 120px;
  float: right;
  text-align: center;
}

.weima img {
  margin-bottom: 10px;
}

.weima span {
  color: white;
}
</style>

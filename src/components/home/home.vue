<template>
  <div>
          <!--头部导航  -->
    <van-swipe class="lunbo" :autoplay="1000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <a href="https://www.baidu.com/" class="justA">
          <img :src="image">
        </a>
      </van-swipe-item>
    </van-swipe>
    <!-- 公告系统 -->
    <van-notice-bar mode="closeable" :scrollable="true" class="NoticeBar">
      欢迎你的到来参观，这是一个自学vue构建的项目，精简漂亮，希望能共同进步。by wujingshi
    </van-notice-bar>
      <!-- 九宫格 -->
      <main id="main">
          <ul>
          <li>
              <router-link to="/music">
                  <img src="https://m.360buyimg.com/mobilecms/jfs/t10960/43/2074934332/13451/e11c7697/59eefb97Nb8635dcf.png" alt="">
              </router-link>
          </li>
          <li>
              <a href="#">
                  <img src="https://m.360buyimg.com/mobilecms/jfs/t10960/43/2074934332/13451/e11c7697/59eefb97Nb8635dcf.png" alt="">
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="https://m.360buyimg.com/mobilecms/jfs/t10960/43/2074934332/13451/e11c7697/59eefb97Nb8635dcf.png" alt="">
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="https://m.360buyimg.com/mobilecms/jfs/t10960/43/2074934332/13451/e11c7697/59eefb97Nb8635dcf.png" alt="">
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="https://m.360buyimg.com/mobilecms/jfs/t10960/43/2074934332/13451/e11c7697/59eefb97Nb8635dcf.png" alt="">
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="https://m.360buyimg.com/mobilecms/jfs/t10960/43/2074934332/13451/e11c7697/59eefb97Nb8635dcf.png" alt="">
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="https://m.360buyimg.com/mobilecms/jfs/t10960/43/2074934332/13451/e11c7697/59eefb97Nb8635dcf.png" alt="">
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="https://m.360buyimg.com/mobilecms/jfs/t10960/43/2074934332/13451/e11c7697/59eefb97Nb8635dcf.png" alt="">
              </a>
          </li>
      </ul>
      </main>
  </div>
</template>

<style>
.van-notice-bar__content-wrap{
    height: 50px;
    margin-top: 15px;
}
.van-notice-bar__right-icon{
    top: 5px;
    font-size: 30px;
}
</style>

<style scoped>
#main {
  /* margin-top: 100px; */
  height: 100%;
}
ul {
  list-style: none;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
li {
  width: 25%;
  text-align: center;
  margin-top: 100px;
}
li img {
  width: 60%;
}
/* 輪播 */

.lunbo {
  height: 450px;
  /* background-color: skyblue; */
}

img {
  width: 100%;
}
/* 公告 */
.van-notice-bar {
  top: 10px;
  bottom: 10px;
  height: 60px;
  font-size: 30px;
}
</style>


<script>
export default {
  data() {
    return {
      images: [
        "http://img1.360buyimg.com/da/jfs/t11437/344/315274704/201907/d2ede367/59ed81b2Nbf6fdc57.jpg",
        "http://img1.360buyimg.com/da/jfs/t10012/160/2247227190/94049/b37ed5c5/59f1cd40Nc9f166c6.jpg"
      ],
      active: 0
    };
  }
};
</script>

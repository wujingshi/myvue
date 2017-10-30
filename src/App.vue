<template>
  <div>
    <!-- 顶部导航 -->
    <van-nav-bar title="吴静施的Vue多功能网站" class="topName"></van-nav-bar>
    <!-- 主題內容 -->
    <router-view></router-view>
    <!-- 底部菜單 -->
    <van-tabbar v-model="active" class="bottomBar">
      <van-tabbar-item class="barName" icon="home">首页
      </van-tabbar-item>
      <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
/*头部 */
.van-nav-bar{
  height: 55px;
}
.van-nav-bar__title {
  font-size: 30px;
  padding: 5px 0 5px 0;
  background-color:#0085ff;
  color: #fff;
}
.barName div {
  font-size: 40px;
}

.barName .van-tabbar-item__text {
  font-size: 20px;
}
</style>


<style scoped>

.van-nav-bar__title {
  font-size: 30px;
}
/* 底部 */

.bottomBar {
  height: 100px;
}

.barName {
  font-size: 30px;
}
</style>

<script>
  export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>




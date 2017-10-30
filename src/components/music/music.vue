<template>
  <div>
    <!-- 播放器图片 -->
      <div class="musicBox">
        <img src="../../staic/img/musicPlay.jpg" alt="">     
      </div>
      <!-- 歌曲信息面板 -->
        <div>
          <h1>当前播放歌曲：</h1>
          <p>{{musicList.name}}</p>
        </div>
      <!-- 播放器 -->
      <div class="music">
        <van-button size="large" class="nextMusci" @click="control()">点击切换音乐</van-button>
        <audio :src="musicList.url" autoplay id="audioMusic" @ended="musicEnd()" controls></audio>
      </div>
  </div>
</template>

<style>

</style>


<style scoped>
.musicBox {
  margin-top: 190px;
  text-align: center;
}
.music {
  margin-top: 50px;
}
</style>

<script>
export default {
  data() {
    return {
      musicNum: 0,
      musicList: [],
      wgList: [
        {
          name: "千年之恋---FIR",
          url: "http://url.527578.com/kuwo.php/175554.mp3"
        },
        {
          name: "简单爱---周杰伦",
          url: "http://url.527578.com/kuwo.php/156522.mp3"
        },
        {
          name: "我的天空---南征北战",
          url: "http://url.527578.com/xiami.php/1772152245.mp3"
        }
      ]
    };
  },
  // 页面加载完成，执行方法
  mounted() {
    this.control();
    console.log("我触发了，我播放了");
  },
  methods: {
    // 获取音乐
    control() {
      this.musicList = [];
      // 判断是否和音乐列表相同
      if (this.musicNum >= this.wgList.length) {
        // 如果相同就回到开头
        this.musicNum = 0;
        // 把获取下标的内容发给新数组进行渲染
        this.musicList = this.wgList[this.musicNum];
      } else {
        this.musicList = this.wgList[this.musicNum];
        this.musicNum++;
      }
    },
    // 音乐播放完执行函数
    musicEnd() {
      // 音乐结束执行这个函数
      this.control();
    }
  }
};
</script>




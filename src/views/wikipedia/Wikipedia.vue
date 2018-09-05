<template>
  <div>
    <div class="w">
      <h2 style="fontSize: 25px; margin: 21px 0 12px 0">百科</h2>
      <!-- 轮播图 -->
      <div class="block">
        <el-carousel trigger="click" height="320px">
          <el-carousel-item v-for="(item,i) in imgs" :key="i">
            <img style="width: 100%" :src="item.img">
          </el-carousel-item>
        </el-carousel>
        <!-- 内容 -->
        <el-card class="box-card" style="padding: 0">
          <div style="margin-top: 34px; height: 160px">
            <img style="float: left; width: 253px; height: 159px" src="../../assets/images/tab1.png" alt="">
            <div style="margin-left: 280px" >
              <span class="set-top" >置顶</span>
              <h3 style="margin-left: 55px; font-size: 20px">阿里对区块链野心勃勃，积极争夺？</h3>
              <p style="font-size: 18px">竞争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云，到后来的亚马逊云、谷歌云，这些全球云计算巨头都把目光瞄向了这一领域。</p>
              <div class="tap_bottom">
                <div class="tab_left" style=" float: left; font-size: 18px; line-height: 40px">
                  <img style="vertical-align: middle" src="../../assets/images/photo.png" alt="">
                  <span style="margin-left:6px; color: #9c9c9c; width: 80%">高圆圆 · 2018-08-9 17:47</span>
                </div>
                <div class="tab_right" style=" float: right; font-size: 18px; line-height: 40px">
                  <img src="../../assets/images/eye.png" alt="">
                  <span style="color: #9c9c9c; margin-left: 6px; margin-right: 2px">3630</span>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top: 34px; height: 160px">
            <img style="float: left; width: 253px; height: 159px" src="../../assets/images/tab1.png" alt="">
            <div style="margin-left: 280px" >
              <span class="set-top" >置顶</span>
              <h3 style="margin-left: 55px; font-size: 20px">阿里对区块链野心勃勃，积极争夺？</h3>
              <p style="font-size: 18px">竞争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云，到后来的亚马逊云、谷歌云，这些全球云计算巨头都把目光瞄向了这一领域。</p>
              <div class="tap_bottom">
                <div class="tab_left" style=" float: left; font-size: 18px; line-height: 40px">
                  <img style="vertical-align: middle" src="../../assets/images/photo.png" alt="">
                  <span style="margin-left:6px; color: #9c9c9c; width: 80%">高圆圆 · 2018-08-9 17:47</span>
                </div>
                <div class="tab_right" style=" float: right; font-size: 18px; line-height: 40px">
                  <img src="../../assets/images/eye.png" alt="">
                  <span style="color: #9c9c9c; margin-left: 6px; margin-right: 2px">3630</span>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top: 34px; height: 160px">
            <img style="float: left; width: 253px; height: 159px" src="../../assets/images/tab1.png" alt="">
            <div style="margin-left: 280px" >
              <span class="set-top" >置顶</span>
              <h3 style="margin-left: 55px; font-size: 20px">阿里对区块链野心勃勃，积极争夺？</h3>
              <p style="font-size: 18px">竞争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云，到后来的亚马逊云、谷歌云，这些全球云计算巨头都把目光瞄向了这一领域。</p>
              <div class="tap_bottom">
                <div class="tab_left" style=" float: left; font-size: 18px; line-height: 40px">
                  <img style="vertical-align: middle" src="../../assets/images/photo.png" alt="">
                  <span style="margin-left:6px; color: #9c9c9c; width: 80%">高圆圆 · 2018-08-9 17:47</span>
                </div>
                <div class="tab_right" style=" float: right; font-size: 18px; line-height: 40px">
                  <img src="../../assets/images/eye.png" alt="">
                  <span style="color: #9c9c9c; margin-left: 6px; margin-right: 2px">3630</span>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top: 34px; height: 160px">
            <img style="float: left; width: 253px; height: 159px" src="../../assets/images/tab1.png" alt="">
            <div style="margin-left: 280px" >
              <span class="set-top" >置顶</span>
              <h3 style="margin-left: 55px; font-size: 20px">阿里对区块链野心勃勃，积极争夺？</h3>
              <p style="font-size: 18px">竞争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云，到后来的亚马逊云、谷歌云，这些全球云计算巨头都把目光瞄向了这一领域。</p>
              <div class="tap_bottom">
                <div class="tab_left" style=" float: left; font-size: 18px; line-height: 40px">
                  <img style="vertical-align: middle" src="../../assets/images/photo.png" alt="">
                  <span style="margin-left:6px; color: #9c9c9c; width: 80%">高圆圆 · 2018-08-9 17:47</span>
                </div>
                <div class="tab_right" style=" float: right; font-size: 18px; line-height: 40px">
                  <img src="../../assets/images/eye.png" alt="">
                  <span style="color: #9c9c9c; margin-left: 6px; margin-right: 2px">3630</span>
                </div>
              </div>
            </div>
          </div>
          <button style="display: block; margin: 0 auto;
          width: 20%;
          height: 42px;
          background-color: #fff;
          border: 1px solid rgba(45,45,45,.3);
          color: #272727;
          font-size: 18px;
          margin-top: 20px; margin-bottom: 20px">加载更多</button>
        </el-card>
        <!-- 相关文章 -->
        <div class="relation" style="margin-top: 30px; margin-bottom: 40px">
          <h2>相关文章</h2>
          <el-row :gutter="40" type="flex" justify="space-between">
            <el-col :span="12">
              <img style="float: left" src="../../assets/images/tab1.png" alt="">
              <div style="margin-left: 280px">
                <h3>区块链何以成传销</h3>
                <p>竞争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云，到后来的亚马逊云、谷歌云，这些全球云计算巨头都把目光瞄向了这一领域</p>
              </div>
            </el-col>
            <el-col :span="12">
              <img style="float: left" src="../../assets/images/tab1.png" alt="">
              <div style="margin-left: 280px">
                <h3>区块链何以成传销</h3>
                <p>竞争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云，到后来的亚马逊云、谷歌云，这些全球云计算巨头都把目光瞄向了这一领域</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: [
        // 引入静态文件使用require()
        {img: require('../../assets/images/banner1.png')},
        {img: require('../../assets/images/banner2.png')},
        {img: require('../../assets/images/banner3.png')}
      ]
    }
  }
}
</script>

<style>
.el-card__body {
  padding: 0;
}
.set-top {
  border: 1px solid #e85c6d;
  float: left;
  display: block;
  width: 44px;
  height: 23px;
  text-align: center;
  color: #e85c6d;
  border-radius: 4px;
}
.el-col {
  border-radius: 4px;
  height: 157px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.grid-content {
  border-radius: 4px;
  min-height: 157px;
}
</style>

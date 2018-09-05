<template>
  <div class="w">
    <el-container>
      <el-aside width="840px">
        <el-carousel :interval="4000" type="card" height="230px">
          <el-carousel-item v-for="item in imgs" :key="item">
            <img :src="item.img">
          </el-carousel-item>
        </el-carousel>
        <el-tabs v-model="activeName">
          <el-tab-pane label="全部" name="first">
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
            <el-button class="fig-btn" >加载更多</el-button>
          </el-tab-pane>
          <el-tab-pane label="直播" name="second">直播</el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main>
        <el-button class="figure-btn" >申请合作加入</el-button>
        <p style="fontSize: 14px; line-height: 22px; margin-left: 12px;" >个人/企业/媒体行业专家、自媒体人士，企业相关品牌，产品与服务以及有新闻资质的各类媒体等内容生产合作入驻。</p>
        <div class="bosses" ><span style="color: #ff9900; margin-right: 40px">大佬说</span><span>对话大佬</span></div>
        <div class="bosses-container" >
          <div class="bos-left">
            <p>争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云</p>
            <p style="margin-top: 22px;"><span style="font-size: 16px;">薛蛮子/</span><span style="font-size: 12px; color: #adadad;">区块链首席星推官</span></p>
          </div>
          <img class="bos-right" src="../../assets/images/interview.png" alt="">
        </div>
        <div class="bosses-container" >
          <div class="bos-left">
            <p>争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云</p>
            <p style="margin-top: 22px;"><span style="font-size: 16px;">薛蛮子/</span><span style="font-size: 12px; color: #adadad;">区块链首席星推官</span></p>
          </div>
          <img class="bos-right" src="../../assets/images/interview.png" alt="">
        </div>
        <div class="bosses-container" >
          <div class="bos-left">
            <p>争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云</p>
            <p style="margin-top: 22px;"><span style="font-size: 16px;">薛蛮子/</span><span style="font-size: 12px; color: #adadad;">区块链首席星推官</span></p>
          </div>
          <img class="bos-right" src="../../assets/images/interview.png" alt="">
        </div>
        <div class="bosses-container" >
          <div class="bos-left">
            <p>争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云</p>
            <p style="margin-top: 22px;"><span style="font-size: 16px;">薛蛮子/</span><span style="font-size: 12px; color: #adadad;">区块链首席星推官</span></p>
          </div>
          <img class="bos-right" src="../../assets/images/interview.png" alt="">
        </div>
        <el-carousel :interval="5000" height="330px" arrow="always" style="margin-left:26px" >
          <el-carousel-item v-for="item in imgs" :key="item">
            <img :src="item.img">
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: [
        {img: require('../../assets/images/down_banner1.png')},
        {img: require('../../assets/images/down_banner1.png')},
        {img: require('../../assets/images/down_banner1.png')}
      ],
      activeName: 'first'
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
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
.fig-btn {
  width: 138px;
  height: 41px;
  margin-top: 40px;
  margin-bottom: 20px;
}
.el-main {
  padding: 0;
}
.figure-btn {
  width: 236px;
  height: 58px;
  background-color: #ff9900;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 550;
  color: #ffffff;
  margin-left: 61px;
  margin-top: 40px;
}
.bosses {
  font-size: 20px;
  font-weight: 600;
  padding: 0 12px;
  margin-top: 50px;
  margin-bottom: 40px;
}
.bosses-container {
  padding-left: 50px;
  height: 130px;
  margin-bottom: 40px;
}
.bos-left {
  float: left;
  width: 164px;
}
.bos-left p {
  margin: 0;
}
.bos-right {
  float: right;
}
</style>

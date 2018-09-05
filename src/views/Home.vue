<template>
  <el-container>
    <el-header class="home-top" height="130px">
       <!-- 快讯动态 -->
      <div class="top">
        <div class="notice">
          <div class="pic">
            <div class="news-flash"></div>
            <font class="title">快讯动态</font>
          </div>
          <marquee behavior="" direction="">凉凉：2018年7月9日，GTB震撼登陆新加坡区块链数字资产交易所（Bitlim）据bitlim 交易所行情数据统计，截至7月10日11:00，GTB位居交GTB2222222222222222222222222222222222333444555hhhhhhhhhhhhhhhhhhhhh</marquee>
          <div class="clearfix"></div>
        </div>
      </div>
      <!-- 快讯动态结束 -->
      <!-- 顶部导航开始 -->
      <div class="top-nav">
        <div class="w clearfix" >
           <!-- 左部 -->
          <div class="fl" >
            <img class="fl" src="../assets/images/bitecaijing-logo.png" alt="">
            <el-menu
              :default-active="activeIndex2"
              :router="true"
              class="menu"
              mode="horizontal"
              background-color="#323953"
              text-color="#fff"
              active-text-color="#ff9900">
              <el-menu-item index="/homepage">首页</el-menu-item>
              <el-menu-item index="/alerts">快讯</el-menu-item>
              <el-menu-item index="3">新闻</el-menu-item>
              <el-menu-item index="/figure">人物</el-menu-item>
              <el-menu-item index="5">活动</el-menu-item>
              <el-submenu index="6">
                <template slot="title">更多</template>
                <el-menu-item index="6-1">应用</el-menu-item>
                <el-menu-item index="6-2">百科</el-menu-item>
                <el-menu-item index="6-3">社群</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
          <!-- 右部 -->
          <div class="fr" >
              <el-input placeholder="社区区块链" v-model="input" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
          </div>
        </div>
      </div>
      <!-- 顶部导航结束 -->
    </el-header>
    <el-main class="main" >
      <router-view></router-view>
    </el-main>
    <el-footer>
      <!--	页脚开始-->
      <div class="foot">
        <div class="foot_small">
          <a href="">京ICP备16049139号Copyright © 比特财经 版权所有</a>
          <div class="foot_right">
            <a href="">关于我们</a>
            <a href="">联系我们</a>
            <a href="">版权声明</a>
            <a href="">简体中文&nbsp;<img src="../assets/images/china.png" alt=""></a>
          </div>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: 'homepage',
      input: ''
    }
  }
}
</script>

<style>
.home-top {
  padding: 0;
}
.el-main {
  padding: 0;
}
/*快讯动态开始*/
.top{
  padding: 9px 0;
  background-color:#2c3247;
  height: 32px;
}
.top > .notice{
  width:1190px;
  margin:0 auto;
}
.notice > .pic{
  background:url(../assets/images/top.png) no-repeat;
  width:154px;
  height:32px;
  float:left;
}
.pic > .news-flash{
  background:url(../assets/images/news-flash.png) no-repeat;
  width:26px;
  height:14px;
  position:absolute;
  margin-top:8px;
  margin-left:4px;
}
.pic > .title{
  font-size:16px;
  color:#fff;
  position:absolute;
  margin-left:42px;
  margin-top:4px;
}
.notice > marquee{
  font-size:.8rem;
  color:#fff;
  width:1036px;
  line-height:32px;
  white-space: nowrap;/* 文字不折行 */
  overflow:-webkit-marquee;/* 只有设置为marquee才有滚动效果 */
  -webkit-marquee-direction:left;/* 文字滚动方向 可选值为left | right | up | down */
    -webkit-marquee-speed:normal;/* 文字滚动速度 可选值为slow | normal | fast */
    -webkit-marquee-style:scroll;/* 文字滚动方式 可选值为scroll | slide | alternate */
  -webkit-marquee-repetition:infinite;/* 文字滚动次数 number | infinite ， infinite即无限次循环滚动 */
}
/*快讯动态结束*/
/* 导航栏开始 */
.top-nav {
  height: 60px;
  background-color: #323953;
  padding: 10px 0;
}
.top-nav .fl > img {
  margin-top: 6px;
}
.menu {
  margin-left: 170px;
  font-size: 20px;
}
.el-menu--horizontal {
  border: none;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.input-with-select {
  background: #323953;
  border: none;
}
.el-input__inner {
  background: #323953;
  border: none;
  border-bottom: 1px solid #fff;
  border-radius: 0;
}
.el-input-group__append, .el-input-group__prepend {
  background: #323953;
  border: none;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  padding: 0;
  padding-right: 20px;
}
.el-icon-search {
  width: 16px;
  height: 16px;
}
/* 导航栏结束 */
/*	页脚开始*/
.foot{
  width:100%;
  background-color:#2c3247;
  height:90px;
}
.foot_small{
  width: 70%;
  margin:0 auto;
}
.foot_small > a{
  text-decoration: none;
  color:white;
  line-height: 90px;
}
.foot_right{
  float:right;
}
.foot_right > a{
  text-decoration: none;
  color:white;
  margin-right:10px;
  line-height: 90px;
}
.foot_right > a >img{
  margin-left:10px;
}
/*	页脚结束*/
</style>

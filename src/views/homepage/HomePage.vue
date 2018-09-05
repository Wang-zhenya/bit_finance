<template>
  <div style="padding: 0" >
    <div class="w" >
      <!-- 内容 -->
      <el-container style="padding: 10px">
        <el-main style="padding: 8px 0 20px 0" >
          <!-- 内容上 -->
          <el-container>
            <!-- 左边内容 -->
            <el-aside width="815px" style="overflow: hidden">
              <!-- banner图片 -->
              <div>
                <!-- 轮播图 -->
                <div class="block">
                  <el-carousel trigger="click" height="342px">
                  <el-carousel-item v-for="(item,i) in imgs" :key="i">
                      <img :src="item.img">
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <!-- 轮播图结束 -->
                <!-- 栅格图 -->
                <div style="width: 100%">
                  <el-row :gutter="8" type="flex" justify="space-between">
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                  </el-row>
                </div>
                <!-- 栅格图结束 -->
              </div>
              <!-- 信息 -->
              <div class="tap" style="width: 100%">
                <img src="../../assets/images/tab1.png" alt="">
                <div class="tap2">
                  <span class="set-top">置顶</span>
                  <h3>阿里对区块链野心勃勃，积极争夺？</h3>
                  <p>竞争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云，到后来的亚马逊云、谷歌云，这些全球云计算巨头都把目光瞄向了这一领域。</p>
                  <div class="tap_bottom">
                    <div class="tab_left" style=" float: left; font-size: 18px; line-height: 40px">
                      <img style="vertical-align: middle" src="../../assets/images/photo.png" alt="">
                      <span style="margin-left:6px; color: #9c9c9c; width: 80%">高圆圆 · 2018-08-9 17:47</span>
                    </div>
                    <div class="tab_right" style=" float: right; font-size: 18px; line-height: 40px">
                      <img src="../../assets/images/eye.png" alt="">
                      <span style="color: #9c9c9c">3630</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tap" style="width: 100%">
                <img src="../../assets/images/tab1.png" alt="">
                <div class="tap2">
                  <span class="push">推送</span>
                  <h3>阿里对区块链野心勃勃，积极争夺？</h3>
                  <p>竞争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云，到后来的亚马逊云、谷歌云，这些全球云计算巨头都把目光瞄向了这一领域。</p>
                  <div class="tap_bottom">
                    <div class="tab_left" style=" float: left; font-size: 18px; line-height: 40px">
                      <img style="vertical-align: middle" src="../../assets/images/photo.png" alt="">
                      <span style="margin-left: 6px; color: #9c9c9c">高圆圆 · 2018-08-9 17:47</span>
                    </div>
                    <div class="tab_right" style=" float: right; font-size: 18px; line-height: 40px">
                      <img src="../../assets/images/eye.png" alt="">
                      <span style="color: #9c9c9c">3630</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tap" style="width: 100%">
                <img src="../../assets/images/tab1.png" alt="">
                <div class="tap2">
                  <span class="sole">独家</span>
                  <h3>阿里对区块链野心勃勃，积极争夺？</h3>
                  <p>竞争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云，到后来的亚马逊云、谷歌云，这些全球云计算巨头都把目光瞄向了这一领域。</p>
                  <div class="tap_bottom">
                    <div class="tab_left" style=" float: left; font-size: 18px; line-height: 40px">
                      <img style="vertical-align: middle" src="../../assets/images/photo.png" alt="">
                      <span style="margin-left: 6px; color: #9c9c9c">高圆圆 · 2018-08-9 17:47</span>
                    </div>
                    <div class="tab_right" style=" float: right; font-size: 18px; line-height: 40px">
                      <img src="../../assets/images/eye.png" alt="">
                      <span style="color: #9c9c9c">3630</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tap" style="width: 100%">
                <img src="../../assets/images/tab1.png" alt="">
                <div class="tap2">
                  <span class="set-top">置顶</span>
                  <h3>阿里对区块链野心勃勃，积极争夺？</h3>
                  <p>竞争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云，到后来的亚马逊云、谷歌云，这些全球云计算巨头都把目光瞄向了这一领域。</p>
                  <div class="tap_bottom">
                    <div class="tab_left" style=" float: left; font-size: 18px; line-height: 40px">
                      <img style="vertical-align: middle" src="../../assets/images/photo.png" alt="">
                      <span style="margin-left: 6px; color: #9c9c9c">高圆圆 · 2018-08-9 17:47</span>
                    </div>
                    <div class="tab_right" style=" float: right; font-size: 18px; line-height: 40px">
                      <img src="../../assets/images/eye.png" alt="">
                      <span style="color: #9c9c9c">3630</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tap" style="width: 100%">
                <img src="../../assets/images/tab1.png" alt="">
                <div class="tap2">
                  <span class="push">推送</span>
                  <h3>阿里对区块链野心勃勃，积极争夺？</h3>
                  <p>竞争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云，到后来的亚马逊云、谷歌云，这些全球云计算巨头都把目光瞄向了这一领域。</p>
                  <div class="tap_bottom">
                    <div class="tab_left" style=" float: left; font-size: 18px; line-height: 40px">
                      <img style="vertical-align: middle" src="../../assets/images/photo.png" alt="">
                      <span style="margin-left: 6px; color: #9c9c9c">高圆圆 · 2018-08-9 17:47</span>
                    </div>
                    <div class="tab_right" style=" float: right; font-size: 18px; line-height: 40px">
                      <img src="../../assets/images/eye.png" alt="">
                      <span style="color: #9c9c9c">3630</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tap" style="width: 100%">
                <img src="../../assets/images/tab1.png" alt="">
                <div class="tap2">
                  <span class="sole">独家</span>
                  <h3>阿里对区块链野心勃勃，积极争夺？</h3>
                  <p>竞争日益激烈的云计算因为区块链又开辟了一个新战场。从早前的IBM云、微软云，到后来的亚马逊云、谷歌云，这些全球云计算巨头都把目光瞄向了这一领域。</p>
                  <div class="tap_bottom">
                    <div class="tab_left" style=" float: left; font-size: 18px; line-height: 40px">
                      <img style="vertical-align: middle" src="../../assets/images/photo.png" alt="">
                      <span style="margin-left: 6px; color: #9c9c9c">高圆圆 · 2018-08-9 17:47</span>
                    </div>
                    <div class="tab_right" style=" float: right; font-size: 18px; line-height: 40px">
                      <img src="../../assets/images/eye.png" alt="">
                      <span style="color: #9c9c9c">3630</span>
                    </div>
                  </div>
                </div>
              </div>
              <button type="加载更多" style="display: block; margin: 0 auto;
                width: 20%;
                height: 42px;
                background-color: #fff;
                border: 1px solid rgba(45,45,45,.3);
                color: #272727;
                font-size: 18px;
                margin-top: 10%">加载更多</button>
            </el-aside>
            <!-- 右边内容 -->
            <el-main width="378px" style="margin-left: 10px; padding: 10px" class="none" >
              <div class="top-right" style=" font-size: 18px;
                color:#323953;
                font-weight:900;
                height: 70px;
                line-height: 64px;" >
                <img src="../../assets/images/big_decorate.png" alt="">
                <span class="message_title" style="margin-left: 10px">7X24H快讯动态</span>
                <img class="calendar" style=" vertical-align: middle; float:right; margin-right: 10%" src="../../assets/images/calendar.png" alt="">
              </div>
              <img class="dashed" src="../../assets/images/dashed.png" alt="">
              <div class="information">
                <span class="dot"></span>
                <span class="time"> 17:30</span>
                <p class="text"><span>·</span>&nbsp;分析 | 下一个比特币！上市首日市值破百亿...</p>
                <p class="main_body">2018年7月9日，GTB震撼登陆新加坡区块链数字资产交易所！据bitlim 交易所行情数据统计，截至7月10日11:00，GTB位居交易量榜首，开盘价为2美元，随着买盘的暴增GTB价格一路被推高接近4美元，随后价格稳定在3.5美元以上过去24小时内交易量.</p>
                <div class="down">
                  <span class="down_left">
                    <span class="down_1">
                      <img class="icon" src="../../assets/images/rise.png" alt="">
                      <span class="rise">看多</span>
                      <span>230</span>
                    </span>
                    <span class="down_2">
                      <img class="icon" src="../../assets/images/fall.png" alt="">
                      <span class="fall">看空</span>
                      <span>300</span>
                    </span>
                  </span>
                  <span class="down_right">
                    <img class="icon" src="../../assets/images/share.png" alt="">
                    <span class="share">分享</span>
                  </span>
                </div>
              </div>
              <div class="information">
                <span class="dot"></span>
                <span class="time"> 17:30</span>
                <p class="text"><span>·</span>&nbsp;分析 | 下一个比特币！上市首日市值破百亿...</p>
                <p class="main_body">2018年7月9日，GTB震撼登陆新加坡区块链数字资产交易所！据bitlim 交易所行情数据统计，截至7月10日11:00，GTB位居交易量榜首，开盘价为2美元，随着买盘的暴增GTB价格一路被推高接近4美元，随后价格稳定在3.5美元以上过去24小时内交易量.</p>
                <div class="down">
                  <span class="down_left">
                    <span class="down_1">
                      <img class="icon" src="../../assets/images/rise.png" alt="">
                      <span class="rise">看多</span>
                      <span>230</span>
                    </span>
                    <span class="down_2">
                      <img class="icon" src="../../assets/images/fall.png" alt="">
                      <span class="fall">看空</span>
                      <span>300</span>
                    </span>
                  </span>
                  <span class="down_right">
                    <img class="icon" src="../../assets/images/share.png" alt="">
                    <span class="share">分享</span>
                  </span>
                </div>
              </div>
              <div class="information">
                <span class="dot"></span>
                <span class="time"> 17:30</span>
                <p class="text"><span>·</span>&nbsp;分析 | 下一个比特币！上市首日市值破百亿...</p>
                <p class="main_body">2018年7月9日，GTB震撼登陆新加坡区块链数字资产交易所！据bitlim 交易所行情数据统计，截至7月10日11:00，GTB位居交易量榜首，开盘价为2美元，随着买盘的暴增GTB价格一路被推高接近4美元，随后价格稳定在3.5美元以上过去24小时内交易量.</p>
                <div class="down">
                  <span class="down_left">
                    <span class="down_1">
                      <img class="icon" src="../../assets/images/rise.png" alt="">
                      <span class="rise">看多</span>
                      <span>230</span>
                    </span>
                    <span class="down_2">
                      <img class="icon" src="../../assets/images/fall.png" alt="">
                      <span class="fall">看空</span>
                      <span>300</span>
                    </span>
                  </span>
                  <span class="down_right">
                    <img class="icon" src="../../assets/images/share.png" alt="">
                    <span class="share">分享</span>
                  </span>
                </div>
              </div>
              <div class="two">
                <a href=""><img src="../../assets/images/right_banner.png" alt=""></a>
              </div>
              <div class="main" style="height: 408px">
                <div class="main-top">
                  <span>人物</span>
                  <a href="">查看更多&nbsp;&gt;</a>
                </div>
                <div class="main-container">
                  <img src="../../assets/images/man_photo.png" alt="">
                  <p>薛蛮子<br><span>文字文字</span></p>
                </div>
                <div class="main-container">
                  <img src="../../assets/images/man_photo.png" alt="">
                  <p>薛蛮子<br><span>文字文字</span></p>
                </div>
                <div class="main-container">
                  <img src="../../assets/images/man_photo.png" alt="">
                  <p>薛蛮子<br><span>文字文字</span></p>
                </div>
                <div class="main-container">
                  <img src="../../assets/images/man_photo.png" alt="">
                  <p>薛蛮子<br><span>文字文字</span></p>
                </div>
              </div>
              <div class="Interview">
                <div class="Interview-top">
                  <span>专访</span>
                  <a href="">查看更多&nbsp;&gt;</a>
                </div>
                <div class="Interview-bottom">
                  <img src="../../assets/images/interview.png" alt="">
                  <div class="Interview-right">
                    <h4>孙宇晨</h4>
                    <span>锐波创始人，董事长兼CEO</span>
                    <p>权在币,天赋币权”,4月份致波场社区的公开信中,孙宇晨抑扬顿挫的自治口号和解放币圈人权的宏图还历历在目然而上个月仅一天时间,孙宇晨“空降”... </p>
                  </div>
                </div>
                <div style="border-bottom: 1px solid #c5c4c4; margin-bottom: 10px; width: 100%; height: 1px"></div>
                <div class="Interview-bottom">
                  <img src="../../assets/images/interview.png" alt="">
                  <div class="Interview-right">
                    <h4>孙宇晨</h4>
                    <span>锐波创始人，董事长兼CEO</span>
                    <p>权在币,天赋币权”,4月份致波场社区的公开信中,孙宇晨抑扬顿挫的自治口号和解放币圈人权的宏图还历历在目然而上个月仅一天时间,孙宇晨“空降”... </p>
                  </div>
                </div>
              </div>
            </el-main>
          </el-container>
          <!-- 内容下 -->
          <el-footer >
            <div class="long">
              <img style="width:8%;margin-bottom: 20px;margin-left:4%" src="../../assets/images/blue_logo.png" alt="">
              <img style="width:36%;margin-bottom:26px;margin-left:4%;" src="../../assets/images/text.png" alt="">
              <img style="margin-left:2%;width:44%" src="../../assets/images/long_banner.png" alt="">
            </div>
            <div class="ad">
              <div class="ad_img">
                <img src="../../assets/images/down_banner1.png" alt="">
                <img src="../../assets/images/down_banner1.png" alt="">
              </div>
              <div class="san">
                <div class="img_block">
                  <img src="../../assets/images/huobi_logo.png" alt=""> <span class="img_text">火币网是国内安全可信赖的交易平台</span>
                </div>
                <div class="img_block">
                  <img src="../../assets/images/huobi_logo.png" alt=""> <span class="img_text">火币网是国内安全可信赖的交易平台</span>
                </div>
                <div class="img_block">
                  <img src="../../assets/images/huobi_logo.png" alt=""> <span class="img_text">火币网是国内安全可信赖的交易平台</span>
                </div>
              </div>
            </div>
          </el-footer>
        </el-main>
      </el-container>
    </div>
    <div class="team">
      <div class="middle">
        <table>
          <tr>
            <td><img src="../../assets/images/white_logo.png" alt=""></td>
            <td><img src="../../assets/images/white_logo.png" alt=""></td>
            <td><img src="../../assets/images/white_logo.png" alt=""></td>
            <td><img src="../../assets/images/white_logo.png" alt=""></td>
            <td><img src="../../assets/images/white_logo.png" alt=""></td>
          </tr>
          <tr>
            <td><img src="../../assets/images/white_logo.png" alt=""></td>
            <td><img src="../../assets/images/white_logo.png" alt=""></td>
            <td><img src="../../assets/images/white_logo.png" alt=""></td>
            <td><img src="../../assets/images/white_logo.png" alt=""></td>
            <td><img src="../../assets/images/white_logo.png" alt=""></td>
          </tr>
        </table>
      </div>
    </div>
    <!--	合作伙伴结束-->
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
  },
  methods: {
  }
}
</script>

<style>
.title-homepage{ width:300px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
/* 栅格图 */
.el-row {
  margin-top: 10px;
  margin-bottom: 20px;
}
.el-col {
  height: 142px;
}
.bg-purple {
  background: url('../../assets/images/1.png');
  height: 142px;
}

/* 栅格图结束 */
.el-aside {
  background-color:#fff;
  /* color: #333; */
  text-align: left;
  /* line-height: 200px; */
}
/* 内容开始 */
/* 内容左 */
.tap {
  margin-bottom: 20px;
}
.tap > img {
  float: left;
  width: 30%
}
.tap2 {
  width: 65%;
  height: 170px;
  margin-left: 34%;
  position: relative;
}
.tap2 .set-top {
  display: block;
  width: 11%;
  height: 24px;
  border:1px solid #dd0f28;
  border-radius: 4px;
  line-height: 24px;
  text-align: center;
  color:#dd0f28;
  position: absolute;
}
.tap2 .push {
  display: block;
  width: 11%;
  height: 24px;
  border:1px solid #40a125;
  border-radius: 4px;
  line-height: 24px;
  text-align: center;
  color:#40a125;
  position: absolute;
}
.tap2 .sole {
  display: block;
  width: 11%;
  height: 24px;
  background-color:#ff9900;
  border-radius: 4px;
  line-height: 24px;
  text-align: center;
  color:#fff;
  position: absolute;
}
.tap2 > h3 {
  margin-left: 14%;
  font-size: 20px;
  text-align: left;
  font-weight: 900;
  font-family:"微软雅黑";
  color:#323953;
}
.tap2 > p {
  font-size: 16px;
  color:#474748;
  margin-top: 16px;
  margin-bottom: 20px;
}
.tap_bottom {
  height: 40px;
  background-color: #fff;
}
/* 内容左结束 */
/* 内容右 */
.dashed{
  float:left;
  margin-top:6px;
}
.information{
  position:relative;
}
.time{
  padding-left:18px;
  font-size:14px;
  color:#323953;
}
.text{
  font-size:.9rem;
  font-weight:900;
  color:#323953;
  padding-left:4%;
  width:93%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin:4% 0 0 0;
}
.text > span{
  color:#ff9900;
}
.main_body{
  font-size:12px;
  color:#474748;
  padding-left:18px;
  margin:8px 0 0 0;
}
.down{
  margin-top:6%;
  padding-left:4%;
  font-size:.8rem;
  color:#323953;
  line-height: 22px;
  height:70px;
}
.down_left{
  float:left;
  height:22px;
}
.down_right{
  float:right;
}
.icon{
  position:absolute;
}
.rise{
  margin-left:32px;
}
.down_2 > .icon{
  left:118px;
}
.fall{
  margin-left:46px;
}
.down_right > .icon{
  margin-left:-30px;
}
.dot{
  display: block;
  width:8px;
  height:8px;
  background-color:#323953;
  border-radius: 50%;
  position:absolute;
  margin-top:6px;
  margin-left:-3px;
}
.two{
  background-color:#fff;
  margin-top:10px;
  width: 100%;
  margin-bottom: 20px;
}
.two > a >img{
  display: block;
  width:100%;
}
/* 人物 */
.main-top,.Interview-top {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  /* font-weight: 700; */
  border-bottom: 1px solid #ececec;
}
.main-top > a,.Interview-top > a {
  float: right;
  color: rgb(0, 0, 0);
}
.main-container {
  width: 40%;
  padding-left: 10%;
  margin-top: 20px;
  float: left;
}
.main-container > p {
  font-size: 16px;
  padding-left: 20%;
}
.main-container > p > span {
  font-size: 14px;
}
/* 专访 */
.Interview-right {
  float: right;
  width: 70%;
}
.Interview-top {
  margin-bottom: 14px;
}
.Interview-bottom {
  height: 160px;
}
.Interview-bottom > img {
  float: left;
}
.Interview-right > h4 {
  font-size: 18px;
}
.Interview-right > span {
  margin-top: 4px;
  margin-bottom: 10px;
}
/* 内容右结束 */
/* 内容结束 */
.none {
  background-color: rgb(255, 255, 255);
}
.el-footer {
padding: 0;
}
/* 通栏展示 */
.long {
  width: 98%;
  height: 174px;
	background-color:#fff;
	padding:10px;
	box-shadow: 0 0 10px 1px rgba(51,42,42,.2);
	margin:0 auto;
	margin-top:10px;
}
/* 内容底部广告 */
.ad{
    background-color:#fff;
    width: 98%;
    margin:0 auto;
    margin-top:30px;
}
.ad_img{
  float: left;
  width:60%;
}
.ad_img > img{
  margin-right:1%;
  width:42%;
}
.img_block{
  float:right;
  margin-top:2%;
  width:98%;
}
.img_block > img{
  float:left;
  width:20%;
  vertical-align: middle;
}
.img_block > span{
  font-size:.8em;
  line-height: 42px;
  padding-left:20px;
}
.san{
  float:right;
  width:36%;
}
/* 内容底部广告结束 */
/* 页面底部 */
.team{
  margin-top:20px;
  width:100%;
  background-color:#323953;
  padding-bottom:20px;
}

.middle{
  width: 1190px;
  margin:0 auto;
}
.middle_one > img{
  display: block;
  float: left;
  margin-right:4.99%;
}
.middle_one{
  padding-bottom:10px;
}
table{
  width:100%;
}
td{
  padding:10px;
  width:24%;
}
td > img{
  display: block;
  margin:0 auto;
}
/*	合作伙伴结束*/
</style>

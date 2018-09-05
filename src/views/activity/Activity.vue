<template>
  <div class="w">
    <div class="activity-one" >
      <span>全部</span>
      <ul>
        <li class="active">峰会</li>
        <li>培训</li>
        <li>沙龙</li>
        <li>线上活动</li>
      </ul>
    </div>
    <div class="activity-two" >
      <span>时间</span>
      <ul>
        <li class="active">全部</li>
        <li>本周</li>
        <li>本月</li>
      </ul>
    </div>
    <div class="activity-three" >
      <span>地点</span>
      <ul>
        <li class="active">全部</li>
        <li>北京</li>
        <li>上海</li>
        <li>澳门</li>
        <li>深圳</li>
        <li>新加坡</li>
        <li>成都</li>
        <li>厦门</li>
        <li>武汉</li>
        <li>杭州</li>
        <li>多伦多</li>
        <li>首尔</li>
        <li>日本</li>
        <li>美国</li>
        <li>菲律宾</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
  }
}
</script>

<style>
span {
  float: left;
  margin-right: 10px;
  font-size: 18px;
}
ul {
  float: left;
}
ul li {
  float: left;
  margin-left: 30px;
  font-size: 18px;
  height: 26px;
}
ul li:hover {
  color: #ff9900;
}
.active {
  color: #ff9900;
}
.activity-one {
  height: 40px;
  line-height: 40px;
  color: #323953;
  font-weight: 550;
}
.activity-two {
   height: 40px;
  line-height: 40px;
  color: #9c9c9c;
  font-weight: 550;
}
.activity-three {
   height: 40px;
  line-height: 40px;
  color: #9c9c9c;
  font-weight: 550;
}
</style>

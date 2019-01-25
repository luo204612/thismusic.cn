<template>
  <div class="tips">
    <el-row >
      <el-col :span="4" class="tips-title">最新</el-col>
      <el-col  :span="20" class="tips-box">
        <a class="mclass" href="javascript:;" v-for="i in mclassArr" :key="i.id">{{i.mclass}}</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mclassArr:[
        {mclass:"金属"},
        {mclass:"华丽"},
        {mclass:"朋克"},
        {mclass:"硬核"},
        {mclass:"垃圾"},
        {mclass:"重摇滚"},
        {mclass:"重金属"},
        {mclass:"工业"},
        {mclass:"前卫"},
        {mclass:"迷幻"},
        {mclass:"速度"},
        {mclass:"激流"},
        {mclass:"碾核"},
        {mclass:"新古典"},
        {mclass:"强力"},
        {mclass:"黑死"},
        {mclass:"哥特"},]
    }
  }
}
</script>

<style>
.tips-box{
  margin-top:10px;
  padding-top:12px;
}
.tips-title{
  margin-top:47px;
  margin-left:-5px;
  text-align: center;
  color:rgb(200, 0, 0);
}
.mclass{
  margin-right:30px; 
  line-height: 40px;
  font-size: 15px;
  color:black;
}
.mclass:hover{
  color:rgb(200, 0, 0);
}
.mclass:active{
  color:rgb(255, 0, 0);
}
</style>

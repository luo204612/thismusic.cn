<template>
  <div class="cover">
    <el-row class="floor-style">
      <el-col :span="3" class=""><div>
        <span class="font-title-icon">|</span><span class="font-title">音乐期刊</span>
      </div>
    </el-col>
    <el-col :span="1" :offset="19" class="font-style-common-md">更多</el-col>
    </el-row>
    <div class="cover-item-bl" >
      <img src="@/assets/img/cover01.jpg" class="img-bg" alt="">
      <p class="img-text">NO.10 摇滚不死</p>
    </div>
    <div class="cover-item-st">
      <img src="@/assets/img/cover02.jpg" class="img-sm" alt=""> 
      <p class="img-text">NO.9 飞翔的梦想</p>
    </div> 
    <!-- 小轮播图 -->
    <div class="cover-item-car">
      <el-carousel indicator-position="outside" height="140px" arrow="never" type="card">
        <el-carousel-item v-for="item in imgArr" :key="item.id">
          <img :src="item.src" class="img-car">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'floor-1',
  data(){
    return {
        imgArr:[
        {id:1,src:require("@/assets/img/cover03.jpg"),text:"图片一"},
        {id:2,src:require("@/assets/img/cover04.jpg"),text:"图片二"},
        {id:3,src:require("@/assets/img/cover05.jpg"),text:"图片三"},
      ]
    }
  }
}
</script>

<style>
  .cover{
    height: 580px;
    position:relative;
  }
  .cover .cover-item-bl{
    width:680px;
    position:absolute;
    top:50px;
    left:0px;
  }
  .cover .cover-item-bl .img-bg{
    width: 680px;
  }
  .cover .cover-item-st{
    position:absolute;
    top:50px;
    right:0px;
  } 
  .cover .cover-item-car{
    position:absolute;
    top:390px;
    right:0px;
    width:400px;
    height: 200px;
  }
  .cover .cover-item-car .img-car{
    width: 200px;
  }
  .cover .cover-item-st .img-sm{
    width:400px;
  }


  .img-text{
    font-size: 14px;
    font-weight: 400;
    text-align: start;
  }

  .cover-item-car .el-carousel__button{
    width: 5px;
    height: 5px;
  }
</style>
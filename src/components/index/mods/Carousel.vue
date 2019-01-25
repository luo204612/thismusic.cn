<template>
  <el-carousel indicator-position="outside" height="360px" arrow="never" :interval="5000">
    <el-carousel-item v-for="item in imgArr" :key="item.id">
      <img :src="item.src" class="carousel-img">
    </el-carousel-item>
  </el-carousel>    
</template>


<script>
export default {
  name: 'carousel',
  data(){
    return {
      msg:123,
      imgArr:[
        {id:1,src:require("@/assets/img/carousel01.jpg"),text:"图片一"},
        {id:2,src:require("@/assets/img/carousel02.jpg"),text:"图片二"},
        {id:3,src:require("@/assets/img/carousel03.jpg"),text:"图片三"},
      ]
    }
  }
}
</script>

<style>
.carousel-img{
  width: 100%;
}
</style>



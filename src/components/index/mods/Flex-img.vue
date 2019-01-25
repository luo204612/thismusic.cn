<template>
  <div>
    <!-- 滚动封面 -->
    <div class="f-box">
      <ul id="fimg">
        <li v-for="i in fimgarr" :key="i.id" @mouseover="pause" @mouseout="play">
          <img :src="i.src" alt="">
          <span>{{on_off}}</span><span>{{i.author}}</span>
          <div class="img-cover">
            <img class="img-cover-play" src="@/assets/img/play.png"  alt="">
          </div>
        </li>
      </ul>
    </div> 
    <!-- 左右唱片 -->
    <div class="cd-right">
      <img src="@/assets/img/cd.png" alt="" class="cd-img">
    </div>
    <div class="cd-left">
      <img src="@/assets/img/cd2.png" alt="" class="cd-img">
    </div>

  </div>
</template>


<script>
export default {
  mounted(){
    this.imgPlay()
  },
  name: 'flex-img',
  data(){
    return {
      fimgarr:[
        {id:1,src:require("@/assets/img/cover/c1.jpeg"),mname:"name",author:"XXX"},
        {id:2,src:require("@/assets/img/cover/c2.jpeg"),mname:"name",author:"XXX"},
        {id:3,src:require("@/assets/img/cover/c3.jpeg"),mname:"name",author:"XXX"},
        {id:4,src:require("@/assets/img/cover/c4.jpeg"),mname:"name",author:"XXX"},
        {id:5,src:require("@/assets/img/cover/c5.jpeg"),mname:"name",author:"XXX"},
        {id:6,src:require("@/assets/img/cover/c6.jpeg"),mname:"name",author:"XXX"},
        {id:7,src:require("@/assets/img/cover/c7.jpeg"),mname:"name",author:"XXX"},
        {id:8,src:require("@/assets/img/cover/c8.jpeg"),mname:"name",author:"XXX"},
        {id:9,src:require("@/assets/img/cover/c9.jpeg"),mname:"name",author:"XXX"},
        {id:10,src:require("@/assets/img/cover/c10.jpeg"),mname:"name",author:"XXX"},
      ],
      on_off:0,
      speedInit:20000,
      speed:this.speedInit,
    }
  },
  watch:{
    on_off:function(){    
      this.imgPlay()
    }
  },
  methods:{
    imgPlay(){
        if(this.on_off==1){
          $("#fimg").animate({marginLeft:-1125},this.speed,'linear',()=>{this.on_off=0,this.speed=this.speedInit})
        }else{
          $("#fimg").animate({marginLeft:0},this.speed,'linear',()=>{this.on_off=1,this.speed=this.speedInit})
        }
    },   
    pause(){
      $("#fimg").stop(true)
      if(this.on_off == 1)
      this.speed = (1-(parseFloat($("#fimg").css("marginLeft"))/-1125))*this.speedInit
      if(this.on_off == 0)
      this.speed = (parseFloat($("#fimg").css("marginLeft"))/-1125)*this.speedInit
    },
    play(){
      this.imgPlay()
    }
  }
}
</script>

<style>
  .f-box{
    margin-top:10px; 
    /* border:1px solid red; */
    height: 250px;
    overflow: hidden;
    margin-bottom: 50px;
  }
  .f-box ul{
    padding: 0px;
    padding-top:10px;
    margin: 0px;
    list-style:none;
    display: flex;
    position: relative;
    margin-left: 0px;
  }
  .f-box ul li{
    margin-right:25px;
  }
  .f-box ul li p{
    margin-top:5px;
  }
  .f-box ul li>img{
    width: 200px;
    height: 200px;
  }



  .img-cover{
    width: 200px;
    height: 200px;
    background:rgb(50,50,50);
    opacity: 0;
    position:absolute;
    text-align: center;
    transition: 0.8s;
    top: 10px;
  }
  .img-cover:hover{
    opacity: 0.4;
  }
  .img-cover-play{
    margin-top: 50px;
    width: 100px;
  }  
  
  .cd-img{
    width: 100px;
  }
  .cd-right{
    position: absolute;
    top:71px;
    right: -100px;
  }
  .cd-left{
    position: absolute;
    top:71px;
    left: -100px;
  }
</style>
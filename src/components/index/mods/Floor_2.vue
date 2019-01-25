<template>
  <div>
    <el-row>
      <!-- 标题 -->
      <el-col :span="3" class="title-mb">    
        <span class="font-title-icon">|</span><span class="font-title">This 唱片</span>
      </el-col>
      <el-col :span="1" :offset="19" class="font-style-common-md">更多</el-col>
      
      <!-- 唱片排版 -->
      <el-col :span="24">
        <el-row >
          <el-col :span="6" v-for="item in musicarr" :key="item.id">
            <el-card shadow="hover" class="card-style">
              <div class="play-cover">
                <img src="@/assets/img/play.png" class="play-img" alt="">
              </div>
              <img class="card-img" :src="item.src" alt="">
              <p class="font-style-common-sm">{{item.name}}</p>
              <p class="font-style-common-sm">{{item.author}}</p>
            </el-card>
          </el-col>
        </el-row>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: 'floor-2',
  data(){
    return {
        musicarr:[
        {id:1,src:require("@/assets/img/this-img01.jpg"),author:"The Velvet Underground" ,name:"《The Velvet Underground & Nico》"},
        {id:2,src:require("@/assets/img/this-img02.jpg"),author:"Michael Jackson" ,name:"《Dangerous》"},
        {id:3,src:require("@/assets/img/this-img03.jpg"),author:"Radiohead" ,name:"《Hail to the Thief》"},
        {id:4,src:require("@/assets/img/this-img04.jpg"),author:"The Rolling Stones" ,name:"《Love You Live》"},
        {id:5,src:require("@/assets/img/this-img05.jpg"),author:"David Bowie" ,name:"《Diamond dogs》"},
        {id:6,src:require("@/assets/img/this-img06.jpg"),author:"Van Halen" ,name:"《1984》"},
        {id:7,src:require("@/assets/img/this-img07.jpg"),author:"Nirvana" ,name:"《In Utero》"},
        {id:8,src:require("@/assets/img/this-img08.jpg"),author:"Pink Floyd" ,name:"《The Division Bell》"},    
      ]
    }
  },
  methods:{
  }
}
</script>

<style>  
  
  .card-style{
    width: 250px;
    height: 290px;
    margin-left: 12px;
    margin-bottom: 20px;
  }
  .card-img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  
  .title-mb{
    margin-bottom: 20px;
  }

  .play-cover{
    width: 250px;
    height: 290px;
    margin-left: -20px;
    margin-top: -20px;
    background:rgb(50,50,50);
    opacity: 0;
    position:absolute;
    text-align: center;
    transition: 0.8s;
  }
  .play-cover:hover{
    opacity: 0.4;
  }
  .play-img{
    transition: 1s;
    width: 80px !important;
    margin-top: 76px;
  }
</style>
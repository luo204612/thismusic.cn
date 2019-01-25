<template>
  <div class="mag">
    <el-row>
      <el-col :span="15" :offset="1" class="border">
        <div class="mag-top">
          <my-tips></my-tips>
        </div>
        <div class="mag-info">
          <div class="mag-list" v-for="item in magArr" :key="item.id">
            <el-row>
              <el-col :span="24">
              <img src="@/assets/img/cover06.jpg" alt="">
              </el-col>
              <el-col :span="16" ><span>NO.20 摇滚这么了？</span></el-col>
              <el-col :span="1">
                <img class="mag-icon" src="@/assets/img/icon/like_1.png" alt="">
              </el-col>
              <el-col :span="3">
                <span class="font-style-common-sm">999</span>
              </el-col>
              <el-col :span="1">
                <img class="mag-icon" src="@/assets/img/icon/collect_1.png" alt="">
              </el-col>
              <el-col :span="3">
                <span class="font-style-common-sm">999</span>
              </el-col>
              
            </el-row>
          </div>
        </div>
        <div class="mag-pag">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="100"
              :page-size="this.pageSize"
              :current-page="this.pnoIndex"
              @current-change="pnochange"
              >
            </el-pagination>
        </div>
      </el-col>
      <el-col :span="6" :offset="1">
        <my-affix></my-affix>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import affix from '@/components/magazine/mods/Affix'
import tips from '@/components/magazine/mods/Tips'

export default {
  components:{
    "my-affix":affix,
    "my-tips":tips
  },
  data(){
    return{
      magArr:[{},{},{},{},{},{},{},{}],
      pageSize:8,
      pnoIndex:1,
    }
  },
  methods:{
    pnochange(pnoNow){
      console.log(pnoNow+"-"+this.pageSize)
    }
  },
  mounted(){
    
  }
}
</script>

<style>
  /* .border{
    border:1px solid red;
  } */
  .mag .mag-top{
    width:100%;
    height: 120px;
    margin: 0px auto;
    text-align: start;
    border-bottom:2px solid rgb(180, 50, 50);
    margin-left: -44px;
  }
  .mag .mag-info{
    width:605px;
    
  }
  .mag .mag-info .mag-list{
    background: rgb(234, 238, 241);
    margin: 50px auto;
    text-align: start;
    border-radius:3px;
    margin-left: -15px;
  }
  .mag .mag-info .mag-list img:not(.mag-icon){
    width: 600px;
    display: block;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .mag .mag-info .mag-list span{
    font-size: 17px;
    font-weight: 300;
    margin-left: 15px;
  }
  .mag-icon{
    width: 22px !important;
    display: inline-block;
  }
  .mag .mag-pag{
    margin: 30px;
    margin-left: -60px;
  }


</style>



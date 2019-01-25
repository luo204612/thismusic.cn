<template>
  <div id="mythis">
    <el-row class="">
      <el-col :span="3" class="title-mb">
        <div>
          <span class="font-title-icon">|</span><span class="font-title">单曲推荐</span>
        </div>
      </el-col>
      <el-col :span="1" :offset="19" class="font-style-common-md">更多</el-col>
      <el-col :span="24">
        <div>
          <flex-img></flex-img>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import flexImg from '@/components/index/mods/Flex-img.vue'
export default {
  name: 'floor-3',
  data(){
    return {
      
    }
  },
  components:{
    "flex-img":flexImg
  },
  methods:{

  }
}
</script>

<style>

</style>
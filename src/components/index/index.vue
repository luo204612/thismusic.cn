<template>
  <div class="box">
    <my-carousel class="carousel-mt"></my-carousel>
    <my-floor-1 class="floor-mt"></my-floor-1>
    <my-floor-2 class="floor-mt"></my-floor-2>
    <my-floor-3 class="floor-mt"></my-floor-3>
  </div>
</template>

<script>
// 轮播图子组件引入，注意路径
import carousel from '@/components/index/mods/Carousel.vue'
import floor_1 from '@/components/index/mods/Floor_1.vue'
import floor_2 from '@/components/index/mods/Floor_2.vue'
import floor_3 from '@/components/index/mods/Floor_3.vue'

export default {
  name: 'index',
  data () {
    return {
      msg: ''
    }
  },
  // 轮播图子组件注册
  components:{
    "my-carousel":carousel,
    "my-floor-1":floor_1,
    "my-floor-2":floor_2,
    "my-floor-3":floor_3
  }

}
</script>

<style >
.floor-mt{
  margin-top:80px;
}
.carousel-mt{
  margin-top:55px;
}
</style>

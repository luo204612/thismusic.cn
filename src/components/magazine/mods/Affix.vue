<template>
  <div class="affix">
    <p>热门期刊推荐</p>
    <ul>
      <li v-for="i in poplist" :key="i.id">
        <img :src="i.src" alt="">
        <div>
          <p class="title">{{i.title}}</p>
          <p>{{i.collectNum}}人收藏</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted(){
  // 获取滚动距离，返回顶部按钮显示/隐藏切换
    $(window).scroll((e)=>{
      var scrollTop=e.target.documentElement.scrollTop||document.body.scrollTop || document.documentElement.scrollTop;
      if(scrollTop > 200){
        $(".affix").addClass("toaffix")
      }else{
        $(".affix").removeClass("toaffix")
      }
    })
  },
  data(){
    return{
      poplist:[
        {id:1,src:require('@/assets/img/cover01.jpg'),title:'标题1',collectNum:'999'},
        {id:2,src:require('@/assets/img/cover02.jpg'),title:'标题2',collectNum:'888'},
        {id:3,src:require('@/assets/img/cover03.jpg'),title:'标题3',collectNum:'777'},
        {id:4,src:require('@/assets/img/cover04.jpg'),title:'标题4',collectNum:'666'},
        {id:5,src:require('@/assets/img/cover05.jpg'),title:'标题5',collectNum:'555'},
        ]
    }
  }
}
</script>

<style>
.affix{
  width: 320px;
  height: 500px;
  /* background: red; */
  margin-left: 20px;
  display: block;
  text-align: start;
  padding-left: 80px;
}
.affix>p{
  font-size:16px;
  font-weight: 200;
  margin-top:20px;
  margin-bottom: 25px;
}
.toaffix{
  position: fixed;
  top: 0px;
}
.affix ul{
  list-style: none;
}
.affix ul li{
  margin-top: 10px;
}
.affix ul li img{
  width: 60px;
  display: inline-block;
  border-radius: 5%;
  margin-left: -60px;
  margin-right: 10px;
}
.affix ul li div{
  display: inline-block;
}
.affix ul li div p{
  font-size:14px;
  font-weight: 200;
  text-align: start;
  line-height: 21px;
  margin-bottom: 5px;
}

</style>



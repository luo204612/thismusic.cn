<template>
  <div id="app">  

    <!-- 头部 -->
    <div class="container header">  
    <div class="header-line">
    </div>
      <el-row type="flex">
        <!-- logo -->
        <el-col :span="3" class="">
          <a href="/"><img src="../build/logo.png" class="logo" alt="logo"></a>
        </el-col>
        <!-- 搜索栏 -->
        <el-col :span="18" class="div-align-center"> 
            <el-input v-model="search" placeholder="歌曲名/作者" class="input-search"></el-input>
            <el-button type="info" class="button-search" icon="el-icon-search"></el-button>
        </el-col>
        <!-- 登陆 -->
        <el-col :span="3" class="div-align-center"> 
          <login></login>
        </el-col>
      </el-row>
      <!-- 导航栏 -->
      <div class="navbar-style">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="rgb(250, 250, 250)"
          text-color="#606266"
          active-text-color="rgb(180, 50, 50)">
          <el-menu-item index="1" @click="jump">
            首　页</el-menu-item>
          <el-menu-item index="2" @click="jump">
            期　刊</el-menu-item>
          <el-menu-item index="3" @click="jump">
            唱　片</el-menu-item>
          <el-menu-item index="4" @click="jump">
            单　曲</el-menu-item>

          <el-menu-item index="5">
            <el-dropdown placement="bottom">
              <div class="el-dropdown-link">
                风　格 ▾
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>金　属</el-dropdown-item>
                <el-dropdown-item>英　伦</el-dropdown-item>
                <el-dropdown-item>后　摇</el-dropdown-item>
                <el-dropdown-item>朋　克</el-dropdown-item>
                <el-dropdown-item>迷　幻</el-dropdown-item>
                <el-dropdown-item>黑　死</el-dropdown-item>
                <el-dropdown-item style="color:rgb(0, 57, 132)">更　多</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>

        </el-menu>
      </div>
    </div>
    
    <!-- 主体 -->
    <div class="container"> 
      <router-view></router-view>
    </div>

    <!-- 底部 -->
    <div class="footer">
      <el-row class="container">
        <el-col :span="24">
          <ul>
            <li>关于我们</li>
            <li>作　　者</li>
            <li>联系我们</li>
            <li>反馈建议</li>
            <li>友情链接</li>
          </ul>
        </el-col>
        <el-col :span="24" class="copy">© 指针音乐 | thismusic.cn</el-col>
      </el-row>
    </div>

    <!-- 返回顶部按钮 -->
    <div id="toTop">
      <img src="@/assets/img/toTop.png" alt="">
    </div>

  </div> 
</template>

<script>

import login from "@/components/login/login"


export default {
  name: 'App',
  components:{
    "login":login,
  },
  data(){
    return{
      search:"",
      activeIndex: '',
    }
  },
  methods:{
    jump(e){
      if(e.index==1)
      this.$router.push("/index")
      if(e.index==2)
      this.$router.push("/magazine")
      if(e.index==3)
      this.$router.push("/mythis")
    }
  },
  mounted(){
    // 获取滚动距离，返回顶部按钮显示/隐藏切换
    $(window).scroll((e)=>{
      var scrollTop=e.target.documentElement.scrollTop||document.body.scrollTop || document.documentElement.scrollTop;
      if(scrollTop >= 1200){
        $("#toTop").show()
      }else{
        $("#toTop").hide()
      }
    }),
    // 返回顶部动画
    $("#toTop").click(function(){
      $('body,html').animate({scrollTop:0},500);
      return false;
    })
  },
  destroyed () {
    $(window).unbind()
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header{
  background: rgb(50, 50, 50);
}
.header-line{
  height: 2px;
  background: rgb(180, 50, 50);
  margin-bottom: 20px;
}
.navbar-style{
  margin-top: 20px;
}

.footer{
  height: 150px;
  background: rgb(50, 50, 50)
}
.footer ul{
  list-style: none;
  text-align: center;
  display: flex;
  justify-content: center
}
.footer ul li{
  margin: 16px;
  font-size:14px;
  font-weight:200;
  color:rgb(250,250,250)
}

#toTop{
  width: 60px;
  height: 60px;
  position:fixed;
  top:750px;
  right:100px;
  opacity: 0.4;
  display: none;
}
#toTop img{
  width: 100%;
}
</style>

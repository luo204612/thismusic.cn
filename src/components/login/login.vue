<template>
  <div>
    <register></register>
    <span @click.prevent="showBox" class="font-style-common login-font">登陆/注册</span>
    <div class="login">
      <div class="login-bg">
      </div>        
      <div class="login-box">
        <div @click.prevent="hideBox" class="close">关闭</div>
        <h2 class="title">欢迎登陆</h2>
        <el-input class="input-style" placeholder="请输入用户名" v-model="uname" clearable>
        </el-input>
        <el-input type="password" class="input-style" placeholder="密码" v-model="pwd" clearable>
        </el-input>
        <div class="forget"><a href="javascript:;" class="font-style-common-md fgt-font">忘记密码?</a></div>
        <el-button type="primary" class="login-button">登陆</el-button>
        <div class="reg"><span class="font-style-common-md">没有账号?</span><a @click.prevent="hidelog" class="font-style-common-md reg-font">注册</a></div>
      </div>
    </div>

  </div>
</template>

<script>
import register from "@/components/login/register"

export default {
  components:{
    "register":register
  },
  data(){
    return{
    uname: '',
    pwd: ''
    }
  },
  methods:{
    showBox(){
      if($(".login:hidden")){
        $(".login").show()
      }
    },
    hideBox(){
      if($(".login:visible")){
        $(".login").hide()
      }
    },
    hidelog(){
      if($(".login-box:visible")){
        $(".register").show()
      }
    }
  }
}
</script>

<style>
.login{
  display: none;
  cursor:pointer;
}
.login-font{
  cursor:pointer;
}
.login .login-bg{
  width: 100%;
  height: 2000px;
  background: rgb(39, 39, 39);
  opacity: 0.8;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
}
.login .login-box{
  width: 400px;
  height: 500px;
  background: rgb(255, 255, 255);
  position: fixed;
  z-index: 1001;
  top: 0;bottom: 0;left: 0;right: 0;
  margin: auto;
  border-radius: 3px;
}
.login-box .close{
  font-size: 14px;
  margin-left:350px;
  margin-top:5px;
}
.login .login-box .login-button{
  width: 230px;
  background: rgb(180, 50, 50);
  border: 0px;
}
.login .login-box .login-button:active{
  width: 230px;
  background: rgb(200, 50, 50);
}
.login .login-box .input-style{
  width: 250px;
  margin-bottom: 10px;
}
.login .login-box .forget{
  margin-left: 180px;
  margin-bottom: 50px; 
}
.login .login-box .fgt-font{
  color:rgb(145, 0, 0);
}
.login .login-box .fgt-font:hover{
  color:rgb(2, 6, 248);
}
.login .login-box .title{
  font-size: 35px;
  font-weight: 200;
  margin-top: 40px; 
  margin-bottom: 50px; 
}
.login .login-box .reg{
  margin-top: 40px; 
  margin-bottom: 50px; 
}
.login .login-box .reg-font{
  color:rgb(145, 0, 0);;
  margin-left: 10px;
}
.login .login-box .reg-font:hover{
  color:rgb(2, 6, 248);
  margin-left: 10px;
}
</style>

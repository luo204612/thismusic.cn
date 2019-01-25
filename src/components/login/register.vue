<template>
  <div class="register">     
    <div class="register-box font-style-common-m">
      <div @click.prevent="hideBox" class="close">>返回登陆</div>
      <h2 class="title">用户注册</h2>
      新用户名　<el-input class="input-style" placeholder="请输入8~16位用户名" v-model="uname" clearable>
      </el-input><br>
      密　　码　<el-input type="password" class="input-style" placeholder="请输入密码" v-model="pwd" clearable>
      </el-input><br>
      确认密码　<el-input type="password" class="input-style" placeholder="请再次输入密码" v-model="repwd" clearable>
      </el-input><br>     
      验证码　<el-input class="input-y" placeholder="4位数字" v-model="uname" clearable>
      </el-input><span class="code"></span>
      <div @click.prevent="bronYzm" class="code-div">{{checkCode}}</div>
      <el-button type="primary" class="register-button">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.bronYzm()
  },
  data(){
    return{
    uname: '',
    pwd: '',
    repwd:'',
    checkCode: ''
    }
  },
  methods:{
    hideBox(){
      if($(".register:visible")){
        $(".register").hide()
      }
    },
    bronYzm(){ 
      var code = ""; 
      var codeLength = 4;
      var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 
      'S','T','U','V','W','X','Y','Z');
      for(var i = 0; i < codeLength; i++){
        var index = Math.floor(Math.random()*36); 
        code += random[index];
      } 
      this.checkCode = code; 
    }
  }
}
</script>

<style>
.register{
  display: none;
  cursor:pointer;
}
.register-font{
  cursor:pointer;
}
.register .register-box{
  width: 400px;
  height: 500px;
  background: rgb(255, 255, 255);
  position: fixed;
  z-index: 1002;
  top: 0;bottom: 0;left: 0;right: 0;
  margin: auto;
  border-radius: 3px;
}
.register-box .close{
  font-size: 14px;
  margin-left:315px;
  margin-top:5px;
  color:  rgb(145, 0, 0);
}
.register-box .close:hover{
  color:  rgb(2, 6, 248);
}
.register .register-box .register-button{
  margin-top: 40px;
  width: 230px;
  background: rgb(180, 50, 50);
  border:0px
}
.register .register-box .register-button:active{
  width: 230px;
  background: rgb(200, 50, 50);
}
.register .register-box .input-style{
  width: 200px;
  margin-bottom: 10px;
}
.register .register-box .input-y{
  width: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.code{
  display:inline-block;
  width: 106px;
  height: 40px;
  margin-left: 10px;
  margin-top:-40px;
  margin-bottom:40px; 
}
.code-div{
  background: rgb(61, 61, 61);
  width: 106px;
  height: 39px;
  margin-left: 240px;
  margin-top:-50px;
  font-size: 35px;
  font-weight: 700;
  color:rgb(146, 146, 146);
  user-select:none;
}
.register .register-box .forget{
  margin-left: 180px;
  margin-bottom: 50px; 
}
.register .register-box .fgt-font{
  color:rgb(145, 0, 0);
}
.register .register-box .fgt-font:hover{
  color:rgb(2, 6, 248);
}
.register .register-box .title{
  color:black;
  font-size: 35px;
  font-weight: 200;
  margin-top: 40px; 
  margin-bottom: 30px; 
}
.register .register-box .reg{
  margin-top: 30px; 
  margin-bottom: 50px; 
}
.register .register-box .reg-font{
  color:rgb(145, 0, 0);;
  margin-left: 10px;
}
.register .register-box .reg-font:hover{
  color:rgb(2, 6, 248);
  margin-left: 10px;
}
</style>

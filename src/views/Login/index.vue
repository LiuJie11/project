<template>
  <div id='login'>
     <div class="login-content">
        <img src="~assets/imgs/login/login1.png" />
        <div class="login-form">
            <div class='login-title'>长沙黑豆后台管理系统</div>
            <el-form :model="form" ref='loginForm'>
                <el-form-item
                    prop="name"
                    :rules="[
                        {required:true,message:'账号不能为空'},
                        {pattern:/^1\d{10}$/,message:'手机码不正确',trigger:'blur'}
                    ]"
                >
                    <el-input type='text' v-model="form.name" placeholder="账号"></el-input>
                </el-form-item>
                 <el-form-item
                    prop="pd"
                    :rules="[
                        {required:true,message:'密码不能为空'},
                        {min:6,max:16,message:'密码为6-16个字符',trigger:'blur'}
                    ]"
                 >
                    <el-input type='password' v-model="form.pd" placeholder="密码"></el-input>
                </el-form-item>
                <div class='code-input'>
                     <el-form-item
                        prop='textCode'
                        :rules="[
                            {required:true,message:'图形验证不能为空'},
                            {validator:validateTextCode,trigger:'blur'}
                        ]"
                     >
                          <el-input type='text' v-model="form.textCode" placeholder="请输入图形码"></el-input>
                     </el-form-item>
                     <div class='pic-code'>
                        <canvas id='auth-code'></canvas>
                     </div>
                     <p class='reset-pic' @click='handlePicCode'>换一张</p>
                </div>
                <el-form-item
                    prop="radio"
                    
                >
                    <el-radio-group v-model="form.radio">
                         <el-radio  label="1">记住密码</el-radio>
                        <el-radio  label="2">忘记密码</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click='submitForm("loginForm")'>登录</el-button>
                </el-form-item>
            </el-form>
        </div>
     </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
    name:'Login',
    data(){
        var validateTextCode = (rule,value,callback)=>{
             if (value=='') {
               callback(new Error('请输入验证码'));
            }else if(value!=this.textCode){
               callback(new Error('验证码不正确'));
            }else{
                callback();
            }
        }
        return {
            form:{
                name:'',
                pd:'',
                textCode:'',
                radio:'',

            },
            validateTextCode:validateTextCode,//验证图形是否一致
        }
    },
    mounted(){
        this.textCode = Math.random().toString(36).substr(2).slice(1,5);
        this. _setPicCode();
    },
    methods:{
        // 设置图片验证码
        _setPicCode () {
            let options = {
            canvasId: "auth-code",/**canvas的id*/
            txt: this.textCode,/**传入验证码内容*/
            height: 59,/**验证码高度 */
            width: 100/**验证码宽度 */
        };
        this.$writeAuthCode(options);
        },
        //切换验证图
        handlePicCode(){
            this.textCode = Math.random().toString(36).substr(2).slice(1,5);
            this._setPicCode();
        },  
        //登录
        submitForm(formName){
             this.$refs[formName].validate((valid) => {
               if(valid){
                    Message({
                        showClose: true,
                        message: '登录成功',
                        type: 'success'
                    });
                    window.sessionStorage.token = '123456'
                    this.$router.replace('/home')
               }else{
                   return false
               }
            }
        );
        }

    }
}

</script>

<style lang="less" >
    #login{
        height: 100%;
        width: 100%;
        position: relative;
        background: url('~assets/imgs/login/login_bg.png') no-repeat center center/100% 100%;
        .login-content{
            height: 765px;
            width: 1218px;
            background: #fff;
            border-radius: 16px;
            box-shadow:0px 0px 8px rgba(36,20,226,1);
            position: absolute;
            top: 50%;
            left: 50%;
           transform:translate(-50% ,-50%);
            -webkit-transform: translate(-50%,-50%);
            display: flex;
            justify-content:space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0 72px 0 18px;
            // border: 1px solid red;
        };
        img{
            width: 680px;
            height: 510px;
            // border: 1px solid red;
        };
        .login-form{
            flex: 1;
            padding-left: 48px;
            height: 510px;
            .login-title{
                padding-top: 22px;
                color: #343434;
                font-size: 36px;
                font-weight: bold;
                text-align: center;
            };
            .el-form-item{
                margin-bottom: 0px;
                margin-top: 30px;
            };
           .el-input__inner{
               border: none;
               background:rgba(247,247,247,1);
               height: 59px;
               padding: 0 20px;
               font-size: 20px;
               color: #AFAFAF;
               border-radius: 29.5px;
               
            };

        };
        .code-input{
            display: flex;
            align-items: flex-end;
            .pic-code{
                height: 59px;
                margin:0 10px;
                cursor: pointer;
                #auth-code{
                    border-radius: 8px;
                }
            }
             .reset-pic {
                font-size: 16px;
                color: #3495FB;
                white-space: nowrap;
                margin-bottom: 10px;
                cursor: pointer;
            }
        }
        .el-button {
            width: 60%;
            height: 45px;
            font-family:Arial;
            font-weight:bold;
            font-size:16px;
            background: #3495FB;
            outline: none !important;
            border: none !important;
            margin-left: 30px;
            &:hover {
                background:rgba(52,149,251,.8);
            }
         }
      
    }
</style>
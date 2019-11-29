<template>
  <div class='home'>
    <v-header @handleShow='showNavLeft'/>
    <div class='container'>
       <nav-left v-show='isShowNav'/>
       <div class="main" :class='{"padL0":isShowNav}'>
          <div class="content">
              <router-view></router-view>
          </div>
       </div>
    </div>
  </div>
</template>

<script>

import VHeader from 'components/header'

import NavLeft from 'components/navleft'

export default {
    name:'Home',
    components:{
        VHeader,
        NavLeft,
    },
    data(){
      return {
        isShowNav:false
      }
    },
    mounted(){
      //this.handleShow();
    },
    methods:{
        // 事件总件接收值
      handleShow(){
        this.$Bus.$on('handleShow',(isShowNav)=>{
          this.isShowNav = isShowNav;
        })
      },
      //自定义事件接收值
      showNavLeft(isShow){
        this.isShowNav = isShow;
      },
      // 测试按钮
      handleJump(path){
        this.$router.push(path)
      }
    }
}
</script>

<style lang='less' scoped>
  .home{
      width: 100%;
      height: 100%;
      .container{
        width: 100%;
        height: calc(100% - 60px);
        display: flex;
        .main{
            flex: 1;
            height: 100%;
            box-sizing: border-box;
            min-width: 874px;
            padding: 24px;
            background: #f8f8f8;
        };
        
        .padL0{
          padding-left: 0 !important;
        }
          .content{
            background: #fff;
            height: 100%;
            width: 100%;
            border-radius: 12px;
            padding:  32px 48px;
          }
      }
  }
</style>
<template>
  <div>
    <h1>404页面</h1>
    <div  :class="{'red':isActive,'blue':bol}">class测试111</div>
    <div  :class="[!isActive?'red':'']">class测试2222</div>
    <el-button type="primary" @click='handleClick'>主要</el-button>
  </div>
</template>

<script>

export default {
    name:'Error',
    data(){
      return {
        isActive:false,
        bol:true
      }
    },
   methods:{
     handleClick(){
       console.log(this.bol)
     }
   }
}


</script>
<style lang='less' scoped>
  .red{
    color: red
  }
  .blue{
    color: blue
  }
</style>
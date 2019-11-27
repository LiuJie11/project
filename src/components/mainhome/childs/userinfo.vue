<template>
   <div class="userinfo">
        <h3>个人信息:</h3>
        <div class='row-box'>
            <!-- <el-row>
                <el-col :span='5'>
                    <span>姓名:</span>
                    <span>张三</span>
                </el-col>
                 <el-col :span='5'>
                    <span>姓名:</span>
                    <span>张三</span>
                </el-col>
                 <el-col :span='6'>
                    <span>姓名:</span>
                    <span>张三</span>
                </el-col>
                 <el-col :span='5'>
                    <span>姓名:</span>
                    <span>张三</span>
                </el-col>
                 <el-col :span='3'>
                    <span>姓名:</span>
                    <span>张三</span>
                </el-col>
            </el-row>
             <el-row>
                <el-col :span='5'>
                    <span>姓ssss名:</span>
                    <span>张三</span>
                </el-col>
                 <el-col :span='5'>
                    <span>姓qqq名:</span>
                    <span>张三</span>
                </el-col>
                 <el-col :span='5'>
                    <span>姓名:</span>
                    <span>张三</span>
                </el-col>
                
            </el-row> -->
             <div class='row'>
                <div class='col'>
                        <span>姓名:</span>
                        <span>张三</span>
                </div>
                  <div class='col'>
                        <span>姓名:</span>
                        <span>张三</span>
                </div>
                <div class='col'>
                        <span>姓名:</span>
                        <span>张三</span>
                </div>
                 <div class='col'>
                        <span>姓名:</span>
                        <span>张三</span>
                </div>
                 <div class='col'>
                        <span>姓名:</span>
                        <span>张三</span>
                </div>
                <div class='col'>
                        <span>姓名:</span>
                        <span>张三</span>
                </div>
                <div class='col'>
                        <span>姓名:</span>
                        <span>张222三</span>
                </div>
                <div class='col'>
                        <span>姓222名:</span>
                        <span>张三</span>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    name:'UserInfo',
    data(){
        return {
            userinfo:{
                title:'个人信息',
                infoList:[
                    {name:'张三'},
                    {sex:'男'}
                ]
            }
        }
    }
}
</script>

<style lang='less' scoped>
    .userinfo{
        width: 1080px;
        margin-top: 40px; 
        h3{
            font-size: 20px;
            color: #293246;
            font-weight: 600;
            padding-bottom: 19px;
            border-bottom: 2px solid #F4F4FC;
        }
        .row-box{
            padding: 28px 0 14px;
            font-size: 14px;
            .row{
                display: flex;
                flex-wrap: wrap;
                
                .col{
                    width: 20%;
                    margin-bottom: 40px;
                    // background: red;
                    // margin-left: 10px;
                    //border: 1px solid red;
                    &>span:first-child{
                        color:#404042;
                    }
                    &>span:last-child{
                        color:#888888;
                        padding-left: 10px;
                    }
                }
            }

            // &>.el-row:not(:first-child){
            //     margin-top: 40px;
            // }
            // .el-col{
            //     //text-align: center;
            //     &>span:first-child{
            //         color:#404042;
            //     }
            //      &>span:last-child{
            //         color:#888888;
            //         padding-left: 10px;
            //     }
            // }
            // .el-row>.el-col:first-child{
            //     text-align: left;
            // }
            // .el-row>.el-col:nth-child(5){
            //     text-align: right;
            // }
        }
       
    }
</style>
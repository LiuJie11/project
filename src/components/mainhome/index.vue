<template>
    <el-row :gutter="100">
        <el-col :span='17'>
            <div class='content-left'>
                <weather/>
                <user-info/>
                <user-info/>
                <user-info/>
            </div>
        </el-col>
        <el-col :span='7'>
            <div class='content-right'>
                <user-view/>
            </div>
        </el-col>
    </el-row>
</template>


<script>
import Weather from './childs/weather'
import UserInfo from './childs/userinfo'
import UserView from './childs/userview'
export default {
    name:'MainHome',
    components:{
        Weather,
        UserInfo,
        UserView
    }
}

</script>

<style lang='less' scoped>
    .el-row{
        height: 100%;
        .el-col{
            height: 100%;
            .content-left{
               height: 100%;
               overflow-y: scroll;
               &::-webkit-scrollbar{
                    display:none;
                }
            }
            .content-right{
                height: 100%;
            }
        }
    }
   
</style>
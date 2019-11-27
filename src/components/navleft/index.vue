<template>
    <div class='nav-left'>
         <el-menu
            class="el-menu-vertical-demo"
            unique-opened
            @open="handleOpen"
            @close="handleClose"
            
            background-color="rgba(247,248,250,0.96)"
           
            :default-openeds="[currentPath]"
            :router="true"
        >
            <div v-for="(item,index) in navList" :key='index'>
                <el-menu-item v-if='!item.children' :index="item.path" :class="{'menu-active-text':$route.path===item.path}">
                    <i class="iconfont"></i>
                    <span>{{item.name}}</span>
                </el-menu-item>

                <el-submenu v-else :index="item.path">
                    <template slot="title">
                        <i class="iconfont"></i>
                        <span>{{item.name}}</span>
                    </template>
                        <el-menu-item v-for='(obj,i) in item.children' :key='i' :index="obj.path" class='menu-item-cover' :class="{'_is-active':$route.path===obj.path}">
                            {{obj.name}}
                            <!-- {{$route.path}}--{{obj.path}} -->
                        </el-menu-item>
                </el-submenu>
            </div> 
        </el-menu>
      
    </div>
</template>

<script>

export default {
    name:'NavLeft',
    data(){
        return {
            navList:[
                {
                    path:'/home/index',
                    name:'首页',
                    
                },
                {
                    path:'/home/wagesmanage',
                    name:'工资管理',
                    children:[
                        {
                            path:'/home/wagesmanage/wages1',
                            name:'月工资查询'
                        },
                        {
                            path:'/home/wagesmanage/wages2',
                            name:'工资报表'
                        },
                        {
                            path:'/home/wagesmanage/wages3',
                            name:'上班日期管理'
                        },
                         {
                            path:'/home/wagesmanage/wages4',
                            name:'月份数据管理'
                        }
                    ]
                },
                {
                    path:'/home/administration',
                    name:'行政管理',
                    component:Error,
                },
                {
                    path:'/home/system',
                    name:'系统管理',
                    children:[
                        {
                            path:'/home/system/rolemanage',
                            name:'角色管理'
                        },
                        {
                            path:'/home/system/role2',
                            name:'权限管理'
                        }
                    ]
                }
            ]
        }
    },
    computed:{
        currentPath() {
         const arr = this.$route.path.split('/')
            return `/${arr[1]}/${arr[2]}`
        }
    },
    methods:{
         handleOpen(key, keyPath) {
            this.$router.push(key)
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        }
    }
}


</script>
<style lang='less'>
 .nav-left{
    height: 100%;
    background:rgba(247,248,250,0.96);
    .el-menu{
        border:0 !important;
    };
    .el-submenu__title{
        width: 213px;
        text-align: center;
        height: 40px !important;
         padding-left: 0 !important;
        line-height: 40px !important;
        font-size: 16px !important;
        transition: all 0.2s;
        &:hover {
            background: #fff !important;
            box-shadow: 0 2px 6px 0 rgba(0,0,0,0.17);
            span {
                font-weight: 700;
                color:#3AA4FB;
            };
        };
         span{
            color:#565656;
        };
    };
    .el-menu-item {
        width: 213px;
        text-align: center;
        padding-left: 0 !important;
        height: 40px !important;
        line-height: 40px !important;
        transition: all 0.2s;
        font-size: 16px !important;
        &:hover {
            background: #fff !important;
            box-shadow: 0 2px 6px 0 rgba(0,0,0,0.17);
           span {
                font-weight: 700;
                 color:#3AA4FB;
            };
        };
        span{
            color:#565656;
        };
        &.menu-item-cover{
            border-left: 0;
            background: #F7F8FA !important;
            &:hover {
                background: #3AA4FB !important;
                box-shadow: 0 2px 6px 0 rgba(0,0,0,0.17);
                font-weight: 700 !important;
                color: #fff !important;
            }
            &._is-active {
                 background: #3AA4FB !important;
                 font-weight: 700 !important;
                 color: #fff !important;
                 box-shadow: 0 2px 6px 0 rgba(0,0,0,0.17);
            }
         }
    
    };
    
    .el-submenu__icon-arrow{
        transform: rotateZ(-90deg);
         color:#565656;
         font-size: 16px;
         font-weight: 700;
    };
    .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow {
        -webkit-transform: rotateZ(-90deg);
        transform: rotateZ(-90deg);
          color:#006FFF;
    };
    .el-submenu{
        display: flex;
    };
    .is-opened{
        width: 426px;
    };
    .el-submenu .el-menu{
        position: absolute;
        top: 0;
        left: 213px; 
        height: calc(100vh - 60px);
    };   
    .menu-active-text{
        span {
            font-weight: 700;
            color: #3AA4FB !important;
        }
    };
    .el-menu-item.is-active {
        color: #fff !important;
    }
  

  }
</style>
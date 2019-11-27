import Vue from 'vue'
import Router from 'vue-router'
import { homedir } from 'os';
const Login = () => import('views/Login') // 登录
const Home = () => import('views/Home')
const Error = () => import('components/404')
const My = () => import('components/my')
const MainHome = ()=>import('components/mainhome') //首页
const RoleManage = ()=>import('components/rolemanage') //角色管理

Vue.use(Router)

const routes = [
    {
        path:'',
        redirect:'/login' //路由重定向
    },
    {
        path:'/login',
        component:Login  //登录
    },
    {
        path:'/home',
        component:Home, //首页
        children:[
            {
                path:'',
                redirect:'/home/index'  //路由重定向
            },
            {
                path:'/home/index',
                component:MainHome,  //首页
            },
            {
                path:'/home/wagesmanage', //工资管理模块
                component:My,
                children:[
                    {
                        path:'',
                        redirect:'/home/wagesmanage/wages1' //路由重定向
                    },
                    {
                        path:'/home/wagesmanage/wages1', //月工资查询
                        component:My,
                    },
                    {
                        path:'/home/wagesmanage/wages2', //工资报表
                        component:Error,
                    },
                    {
                        path:'/home/wagesmanage/wages3', // 上班日期管理
                        component:Error,
                    },
                     {
                        path:'/home/wagesmanage/wages4', //月份数据管理
                        component:Error,
                    }
                ]
            },
            {
                path:'/home/administration', //行政管理
                component:Error,
            },
            {
                path:'/home/system', //系统管理
                component:My,
                children:[
                    {
                        path:'',
                        redirect:'/home/system/rolemanage' // 路由重定向
                    },
                    {
                        path:'/home/system/rolemanage', //角色管理
                        component:RoleManage,
                    },
                    {
                        path:'/home/system/role2', // 权限管理
                        name:'权限管理',
                        component:Error,
                    }
                ]
            }
        ]
    },
];



const router = new Router({
    routes,
    mode:'history'
})


// 路由守卫
// router.beforeEach((to,from,next)=>{
   
//     if(to.path ==='/login') return next()
//     let tokenStr = window.sessionStorage.getItem('token')
//     if(!tokenStr){
//         next('/login') 
//        return next()
//     }
//     next()
// })


export default router
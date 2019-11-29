<template>
 <div class='dialog-container'>
    <el-dialog
        :visible.sync="dialogVisible"
        :width='width'
        :show-close="false"
        :close-on-click-modal='false'
        :close-on-press-escape='false'
    >
        <span slot='title' class='dialog-title'>{{title}}</span>
        <div class="dialog-inner">
            <slot></slot>
            <div class='btns'>
                <el-button @click="handleSubmit">{{btnText1}}</el-button>
                <el-button @click='handleClose'>{{btnText2}}</el-button>
            </div>
        </div>
    </el-dialog>
 </div>
</template>

<script>
 export default {
    name: 'vdialog',
    props:{
        dialogVisible:{
            type:Boolean,
            default:false
        },
        width:String,
        title:{
            type:String,
            default:'标题'
        },
        btnText1:{
            type:String,
            default:'提交'
        },
        btnText2:{
            type:String,
            default:'取消'
        }
           
    },
   data () {
     return {
    
     }
   },
   methods:{
       // 完成按钮
       handleSubmit(){
           this.$emit('handleSubmit')
       },
       //关闭按钮
       handleClose(){
           this.$emit('handleClose')
       }
   }
 }
</script>

<style lang='less'>
.dialog-container{
    .el-dialog__header{
        padding: 0;
    }
    .dialog-title{
         padding: 5px 14px;
        background: #293246;
        font-size: 14px;
        color: #fff;
        font-weight: 500;
        display: block;
    }
    .el-dialog__body{
        padding:0;
    }
    .dialog-inner{
        background: #F8F8F8;
        padding:10px;
        .btns{
            text-align: center;
            background: #fff;
            padding: 30px 0;
            border-radius: 0 0 5px 5px;
            .el-button{
                background: #434D64;
                padding: 10px 18px;
                color: #fff;
                font-size: 20px;
                font-weight: 500;
                border-radius: 5px;
            }
            .el-button+.el-button{
                margin-left: 38px;
            }
        }
    }
}
 
</style>

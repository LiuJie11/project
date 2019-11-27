<template>
 <div class='role-box'>
    <h1>角色管理</h1>
    <div class='role-row'>
        <div class='input-row'>
          <span class='name'>姓名</span>
          <el-input v-model="name" placeholder="请输入姓名"></el-input>
        </div>
         <div class='input-row'>
          <span class='name'>性别</span>
           <el-select v-model="sex" placeholder="男/女">
            <el-option
              v-for="item in sexs"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>

        <div class='input-row'>
          <span class='name'>部门</span>
           <el-select v-model="branch" placeholder="选择部门">
            <el-option
              v-for="item in branchs"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        
        
        <p>查</p>
        <img src="~assets/imgs/home/add.png" />
        <img src="~assets/imgs/home/delete.png" />
        <img src="~assets/imgs/home/download.png" />
    </div>
     <el-table
      :data="tableData"
      style="width: 100%;border-top:1px solid #E6E6E6;margin-top:20px">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
 </div>
</template>

<script>
 export default {
    name:'rolemanage',
   data () {
     return{
       name:'',
       sexs:['男','女'],
       branchs:['技术部','人事部','运营部'],
       branch:'',
       sex:'',
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
     }
   },
   components: {

   }
 }
</script>

<style lang='less'>
  .role-box{
    width: 100%;
    h1{
      color:#293246;
      font-size: 30px;
      font-weight: 500;
    }
    .role-row{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .input-row{
        display: flex;
        align-items: center;
         .el-input__inner{
          height: 30px !important;
          line-height: 30px !important;
          width: 150px;
          border: 1px solid rgba(112,112,112,0.2);
          border-radius:4px;
        }
        .el-input__icon{
          height: 30px;
          line-height: 30px;
        }
        span.name{
          white-space: nowrap;
          padding:0 10px;
          font-size: 12px;
          color: #4D5059;
        }
      }
      p{
        width: 30px;
        height: 30px;
        background: #FFC500;
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        font-size: 12px;
        color: #fff;
        margin-left: 9px;
      }
      img{
        width: 21px;
        height: 20px;
        margin-left: 9px;
        vertical-align: middle;
      }
    }
    .el-table td, .el-table th.is-leaf {
       border-bottom: 1px solid #E6E6E6;
    }
    .el-table td, .el-table th{
      padding:27px 0;
    }
  }
 
</style>

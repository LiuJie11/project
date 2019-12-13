<template>
  <div class="role-box">
    <h1>角色管理</h1>
    <div class="role-row">
      <div class="input-row">
        <span class="name">姓名</span>
        <el-input v-model="name" placeholder="请输入姓名"></el-input>
      </div>
      <div class="input-row">
        <span class="name">性别</span>
        <el-select v-model="sex" placeholder="男/女">
          <el-option v-for="item in sexs" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </div>

      <div class="input-row">
        <span class="name">部门</span>
        <el-select v-model="branch" placeholder="选择部门">
          <el-option v-for="item in branchs" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </div>

      <p>查</p>
      <img src="~assets/imgs/home/add.png" @click='handleAddRole'/>
      <img src="~assets/imgs/home/delete.png" @click='handleDeleteRole'/>
      <img src="~assets/imgs/home/download.png" />
    </div>
    
    <el-table :data="tableData" style="width:100%;border-top:1px solid #E6E6E6;margin-top:20px">
        <el-table-column type='selection' width="55" ></el-table-column>
      <el-table-column v-for='(item,i) in tableTitle' :key='i' :label="item.label">
           <template slot-scope="scope">
              <div v-if='item.prop=="num"'>{{scope.$index+1}}</div>
              <div v-if='item.prop=="sex"'>{{scope.row[item.prop]==1?'男':'女'}}</div>
              <div v-else> {{scope.row[item.prop]}}</div>
          </template>
      </el-table-column>

      <el-table-column >
          <template slot='header' slot-scope='scope'>
              <div>
                <span style='font-size:16px; letter-spacing:5px'>...</span>
                <img style='width:20px;height:20px;margin-left:10px' src="~assets/imgs/home/edit.png" />
              </div>
          </template>
            <template slot-scope='scope'>
              <div @click='handleEdit(scope.$index,scope.row)'  style='padding-left:10px;'>
                <span style='font-size:16px; letter-spacing:5px'>...</span>
                <img style='width:20px;height:20px;margin-left:10px' src="~assets/imgs/home/edit.png" />
              </div>
          </template>
      </el-table-column>

    </el-table>
   <div style='text-align:center;margin-top:30px;'>
      <el-pagination
        background
        :pager-count='7'
        layout="prev, pager, next"
        :total="100">
      </el-pagination>
   </div>
    <Dialog width='750px' title='添加角色' :dialogVisible='dialogVisible' @handleSubmit='handleSubmit' @handleClose='handleClose'>
      <div class='add-role'>
          <el-form :model='addForm' :rules='newrules'  ref='addForm'>
            <el-col :span='12'>
                 <el-form-item label="姓名: " prop="name">
                  <el-input type='text' v-model="addForm.name"></el-input>
                </el-form-item>
                <el-form-item  label="电话: " prop='phone'>
                  <el-input type='tel' v-model="addForm.phone"></el-input>
                </el-form-item>
                <el-form-item  label="年龄: " prop='age'>
                 <el-input type='tel' v-model="addForm.age"></el-input>
               </el-form-item>
            </el-col>
            <el-col :span='12'>
                <el-form-item label="性别: " prop="sex">
                  <el-select  v-model="addForm.sex" placeholder="请选择性别">
                    <el-option label="男" :value="1"></el-option>
                    <el-option label="女" :value="0"></el-option>
                  </el-select>
                </el-form-item>

                 <el-form-item label="部门: " prop="branch">
                  <el-select  v-model="addForm.branch" placeholder="请选择部门">
                     <el-option v-for="item in branchs" :key="item" :label="item" :value="item"></el-option>
                  </el-select>
                </el-form-item>

                 <el-form-item label="职位: " prop="job">
                  <el-select  v-model="addForm.job" placeholder="请选择职位">
                       <el-option v-for="item in jobs" :key="item" :label="item" :value="item"></el-option>
                  </el-select>
                </el-form-item>

            </el-col>
          </el-form> 
      </div>
    </Dialog>

   
  </div>
</template>

<script>
import Dialog from 'components/common/Dialog'

export default {
  name: "rolemanage",
  components:{
       Dialog,
    },
  data() {
    return {
      dialogVisible:false,
      name: "",
      addForm:{ //新加角色
        name:'',
        phone:'',
        sex:'',
        age:'',
        branch:'',
        job:''
      },
      jobs:['对抗路','打野','中单','发育路','辅助'],//职位 
      newrules:{
        name:[
            { required: true, message: '请输入姓名', trigger: 'blur' },
            {min:1,max:5,message:'长度1~5个字符',trigger:'blur'}
        ],
        phone:[
            {required:true,message:'请输入手机号',trigger:'blur'},
            {pattern:/^1[345789]\d{9}$/,message:'请输入正确的手机号'}
        ],
        sex:[
          {required:true,message:'请选择性别',trigger:'blur'}
        ],
        age:[
          {pattern:/^\+?[1-9][0-9]*$/,message:'请输入正确的年龄'}
        ]
      },
      sexs: ["男", "女"],
      branchs: ["技术部", "人事部", "运营部"],
      branch: "",
      sex: "",
      
      tableTitle: [
        {prop:'num', label: "序号" },
        {prop:'name', label: "姓名" },
        {prop:'phone', label: "电话号码" },
        {prop:'sex', label: "性别" },
        {prop:'age',label:'年龄'},
        {prop:'branch', label: "部门" },
        {prop:'job', label: "职位" }
      ],
      tableData: [
       {
         name:'瑶',
         phone:'18797722653',
         sex:0,
         branch:'人事部',
         age:18,
         job:"辅助",
         id:1
       },
         {
         name:'火舞',
         phone:'18797722653',
         sex:0,
         age:19,
         branch:'技术部',
         job:"中单",
         id:2
       },
         {
         name:'貂蝉',
         phone:'18797722653',
         sex:0,
         age:20,
         branch:'技术部',
         job:"中单",
         id:3
       },
         {
         name:'李白',
         phone:'18797722653',
         sex:1,
         branch:'技术部',
         job:"打野",
         age:21,
         id:4
       },  {
         name:'凯爹',
         phone:'18797722653',
         sex:1,
         branch:'技术部',
         job:"对抗路",
         age:21,
         id:5
       },  {
         name:'大小姐',
         phone:'18797722653',
         sex:0,
         branch:'技术部',
         job:"发育路",
         age:20,
         id:6
       }
      ],
      type:0, // 0 表示新增 1 表示修改 
    };
  },
  methods:{
    // 按钮删除
    handleGetNmae(index,row){
      console.log(index,row)
        // this.tableData.splice(index,1)
    },
    // 编辑某一行
    handleEdit(index,row){
        this.index = index
        this.dialogVisible = true;
        this.type = 1;
        this.addForm.name = row.name
        this.addForm.sex = row.sex
        this.addForm.age = row.age
        this.addForm.phone = row.phone
        this.addForm.job = row.job
        this.addForm.branch = row.branch
       
    },
    // 添加角色
    handleAddRole(){
      if(!this.dialogVisible){
        this.dialogVisible = true
        this.type = 0
         console.log('添加角色')
      }
    },
    //自定义事件 提交按钮
    handleSubmit(){
      this.$refs.addForm.validate((valid)=>{
        if(valid){
          if(this.type===0){
             const obj =  JSON.parse(JSON.stringify(this.addForm))
             this.tableData.unshift(obj)
             this.$message('添加成功')
          }else{
            this.tableData[this.index].name = this.addForm.name 
            this.tableData[this.index].sex = this.addForm.sex
            this.tableData[this.index].age = this.addForm.age
            this.tableData[this.index].phone = this.addForm.phone
            this.tableData[this.index].job = this.addForm.job
            this.tableData[this.index].branch = this.addForm.branch
            // this.tableData = this.tableData;
          }
          this.dialogVisible = false
          this.restAddForm()
        }
      })

    },
    //自定义事件 关闭按钮
     handleClose(){
      this.dialogVisible = false
      this.restAddForm()
    },
    // 清空数据
    restAddForm(){
      this.addForm.name = ''
      this.addForm.sex = ''
      this.addForm.age = ''
      this.addForm.phone = ''
      this.addForm.job = ''
      this.addForm.branch = ''
    },
    // 删除角色
    handleDeleteRole(){
      console.log('删除角色')
    }
  }
};
</script>

<style lang='less'>
.role-box {
  width: 100%;
  h1 {
    color: #293246;
    font-size: 30px;
    font-weight: 500;
  }
  .role-row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    .input-row {
      display: flex;
      align-items: center;
      .el-input__inner {
        height: 30px !important;
        line-height: 30px !important;
        width: 150px;
        border: 1px solid rgba(112, 112, 112, 0.2);
        border-radius: 4px;
      }
      .el-input__icon {
        height: 30px;
        line-height: 30px;
      }
      span.name {
        white-space: nowrap;
        padding: 0 10px;
        font-size: 12px;
        color: #4d5059;
      }
    }
    p {
      width: 30px;
      height: 30px;
      background: #ffc500;
      text-align: center;
      line-height: 30px;
      border-radius: 50%;
      font-size: 12px;
      color: #fff;
      margin-left: 9px;
    }
    img {
      width: 21px;
      height: 20px;
      margin-left: 9px;
      vertical-align: middle;
    }
  }
  .el-table td,
  .el-table th.is-leaf {
    border-bottom: 1px solid #e6e6e6;
  }
  .el-table td,
  .el-table th {
    // padding: 27px 0;
    padding: 15px 0;
    // text-align: center;
  }
  .el-table thead {
    color: #333;
  }
  .el-table th div {
      line-height:20px;
  }
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    border-radius: 50%;
  }
  //表单
  .add-role{
    background: #fff;
    padding: 0 28px;
    border-radius: 5px 5px 0 0;
    .el-form-item{
      display: flex;
       margin-bottom: 10px;
       margin-top: 30px;
    }
  .el-form-item.is-required .el-form-item__label:before{
      content:"";
    } 
    .el-form-item__content{
      width: 200px;
    }
  }
 
}
</style>

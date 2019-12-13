<template>
 <div>
       <h1>权限管理</h1>
     <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        highlight-current
        ref="tree"
        :props="defaultProps">
        <span class="custom-tree-node" slot-scope="{ node, data }">
         <span>{{ node.label }}</span>
        <span>
           <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            <img style='width:20px;height:20px;' src="~assets/imgs/home/add.png"/>
            新增
          </el-button>
           <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
             <img style='width:20px;height:20px' src="~assets/imgs/home/edit.png" />
              编辑
          </el-button>
           <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
             <img style='width:20px;height:20px' src="~assets/imgs/home/delete.png"/>
            删除
          </el-button>
        </span>
      </span>
     </el-tree>


 </div>
</template>

<script>
 export default {
   data () {
     return {
          data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
     }
   },

 }
</script>

<style lang='less' scoped>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
 h1 {
    color: #293246;
    font-size: 30px;
    font-weight: 500;
  }
 
</style>

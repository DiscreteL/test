<template>
  <div>
    <el-dialog
      title="详细信息"
      :visible.sync="visible"
      width="60%"
      height="50%"
      @close="handleClose"
    >
      <div class="info">
        <div class="image1">
          <img src="../assets/doc.jpg" alt="照片信息" width=40% height=90%>  <!--后期向后端请求照片-->
        </div>
        <!--<ul>
          <li v-for="(value,Key) in dataList" :key=Key>
            {{Key}}:{{value}}
          </li>
        </ul>-->
        <ul class="list">
          <li>姓名：张三</li>
          <li>医院：复旦附院</li>
          <li>科室：皮肤科</li>
          <li>简介：我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介</li>
        </ul>  
        <!--ul对齐没做-->
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
/deep/.el-dialog{
height:50%;
}
.info{
  position:absolute;

}
.image1{
position:relative;
top:0;
right:15%;
float:left;
vertical-align:middle;
}

.list{
  position:relative;
  font-size: 15px;
  right:20%;
  margin:0;
  padding:0
}

</style>


<script>
export default {
  data() {
    return {
      visible:false,
      dataList:{}
    };
  },
  props:{
    dialogVisible:{
      type:Boolean,
      default:false
    },
    dialogData:{
      type:Object,
      default:function(){
        return {}
      }
    }
  },
  methods: {
    handleClose() {
      // this.$confirm("确认关闭？")
      //   .then((_) => {
      //     done();
      //   })
      //   .catch((_) => {});
        this.$emit('dialogClick',false)
    },
  },
  watch:{
        // 监听 addOrUpdateVisible 改变
        dialogVisible(){
            this.visible = this.dialogVisible
            },
        dialogData(){
          this.dataList = this.dialogData
        }
  }
};
</script>
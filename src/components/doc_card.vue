<template>
    <div>
        <div class="cardBox">
                <div class="image">
                    <img :src="`https://ui-avatars.com/api/?size=80&length=1&bold=true&background=409EFF&color=ffffff&rounded=true&name=${name}`" weight=80px height=80px>
                </div>
                <div class="bodyBox">
                    <span>{{name}}</span>
                    <p>{{hospital}}</p>
                    <p>{{department}}</p>
                    
                    <el-button type="primary" round @click="showDialog(),getDetail(item)">查看详情</el-button>
                    <el-button type="primary" round @click="showDialog(),getDetail(item)">查看详情</el-button>
                    <el-button type="primary" round>主要按钮</el-button>
                    <infoDialog :dialogVisible="isDialogVisible" @dialogClick="changeDialog" :dialogData="diaData"></infoDialog>
                </div>
        </div>
    </div>
</template>

<script>
import infoDialog from './dialog.vue'
export default{
    components:{
          infoDialog,
    },
    name:"doc_card",
    data(){
        return{
            name:'李三',
            hospital:'复旦附院',
            department:'皮肤',
            isDialogVisible:false,
            diaData:{},
            
        }
    },
    props:{
    dataList:{
      type:Array,
      default:function(){
        return []
      }
    }
  },
  
    methods:{
     showDialog(){
      this.isDialogVisible = true;
    },
     getDetail(item) {
      this.diaData = item.info
    },
    },
    watch: {
    dataList: function () {
      this.$nextTick(function () {
        this.currentPage = 1;
      });
    },
  },
    
}
</script>

<style>
.cardBox {
        width: 180px;
        height:300px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
        float: left;
        margin-right: 10px;
        padding: 5px;
        padding-top: 15px;
         overflow:hidden;
        }

.headerBox {
            color: #fff;
            padding: 10px;
            font-size: 15px;
            height: 60px;
        }

.bodyBox {
        padding: 10px;
        }

.bodyBox p {
            margin-left: 5px;
        }

</style>
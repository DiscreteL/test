<template>
    <div>
        <Navigation></Navigation>
        线上问诊
         <div class="box">
      <singleselect></singleselect>
    </div>
    <div class="find">
      <search></search>
    </div>
    <div class="first">
      <div class="card1">
         <doc_card></doc_card>
      </div>
      <div class="card2">
         <doc_card></doc_card>
      </div>
      <div class="card3">
         <doc_card></doc_card>
      </div>
      <div class="card4">
         <doc_card></doc_card>
      </div>
    </div>
    <div class="second">
      <div class="card1">
         <doc_card></doc_card>
      </div>
      <div class="card2">
         <doc_card></doc_card>
      </div>
      <div class="card3">
         <doc_card></doc_card>
      </div>
      <div class="card4">
         <doc_card></doc_card>
      </div>
    </div>
    <div class="page">
     <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
  </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
import doc_card from '../components/doc_card'
import hos_card from '../components/hos_card'
import commodity from '../components/commodity'
import singleselect from '../components/singleselect'
import search from '../components/search'
import Cart from '../components/cart_list.vue'
import Doc_card from '../components/doc_card.vue'
export default{
    name:"mall",
    components:{
      Navigation,
      doc_card,
      hos_card,
      singleselect,
      search,
      commodity,
      Cart,
  },
  data(){
        return{
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

<style scoped>
.box{
    position:absolute;
    top:18%;
    left:17%
}
.image{
  width:50px;
  height:50px;
}
.page{
  position:absolute;
  top:950px;
  left:900px;
}
.find{
  position:absolute;
  top:18%;
  left:50%
}
.cart{
  position:absolute;
  top:18%;
  left:90%;
  width:50px;
  height:50px;
}

.first{
   position:relative;
    top:150px;
    left:260px;
}
.second{
   position:relative;
    top:520px;
    left:260px;
}

/* 医院卡片 */
.card1{
    position:absolute;
    left:0px;
    top:70px;
}
.card2{
    position:absolute;
    left:263px;
    top:70px;
}
.card3{
    position:absolute;
    left:526px;
    top:70px;
}
.card4{
    position:absolute;
    left:789px;
    top:70px;
}
</style>
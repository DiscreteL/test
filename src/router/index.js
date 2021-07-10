import Vue from 'vue'
import VueRouter from 'vue-router'
import Navigation from '../components/Navigation.vue'
import Home from '../views/Home.vue'
import doc_card from '../components/doc_card.vue'
import hos_card from '../components/hos_card.vue'
import online from '../views/online.vue'
import offline from '../views/offline.vue'
import dialog from '../components/dialog.vue'
import mall from '../views/mall.vue'
import search from '../components/search.vue'
import singleselect from '../components/singleselect.vue'
import commodity from '../components/commodity.vue'
import cart_list from '../components/cart_list.vue'
Vue.use(VueRouter)

const routes = [
 {
   path:'/Navigation',
   name:'Navigation',
   component: Navigation
 },
 {
  path:'/cart_list',
  name:'cart_list',
  component: cart_list
},
 {
  path:'/commodity',
  name:'commodity',
  component: commodity
},
 {
  path:'/singleselect',
  name:'singleselect',
  component: singleselect
},
 {
   path:'/Home',
   name:'Home',
   component:Home
 },
 {
  path:'/search',
  name:'search',
  component:search
},
 {
  path:'/mall',
  name:'mall',
  component:mall
},
 {
  path:'/dialog',
  name:'dialog',
  component:dialog
},
 {
   path:'/doc_card',
   name:'doc_card',
   component:doc_card
 },
 {
  path:'/hos_card',
  name:'hos_card',
  component:hos_card
},
{
  path:'/online',
  name:'online',
  component:online
},
{
  path:'/offline',
  name:'offline',
  component:offline
},
]

const router = new VueRouter({
  routes
})

export default router

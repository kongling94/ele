// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false;
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.config.devtools = true;
/* eslint-disable no-new */

import goods from './components/goods/goods.vue'
import seller from './components/seller/seller.vue'
import ratings from './components/ratings/ratings.vue'
import VueRouter from 'vue-router';

let app=Vue.extend({});

// let good = Vue.extend({
//   template:'<div>我的商品出不来</div>'
// })
// let sell = Vue.extend({
//   template: '<div>测试 for 买家{{name}}</div>',
//   data(){
//     return {
//       name:''
//     }
//   },
//   created(){
//     this.name=this.$route.params.name
//   }
// })
// var rating = Vue.extend({
//   template: '<div>测试 for 评论</div>'
// })

let Router =new VueRouter({
  routes:[
    { path:'/',redirect: "/rating" },
    { path: "/goods", component: goods },
    { path: "/seller/:name", component: seller },
    { path: "/ratings", component: ratings }
  ]
})

new Vue({
  el: '#app',
  router: Router,
  components: { App },
  template: '<App/>'
})

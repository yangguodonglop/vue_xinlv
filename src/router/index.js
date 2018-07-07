import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import index1 from '@/components/index1'
import index2 from '@/components/index2'
import login from '@/components/login'
import order from '@/components/order'
import order_xq from '@/components/order_xq'
import payment from '@/components/payment'
import index_jd from '@/components/index_jd'
import index_user from '@/components/index_user'
import index_fx from '@/components/index_fx'
import index_jf from '@/components/index_jf'
import my_order from '@/components/my_order'
import address from '@/components/address'
import add_address from '@/components/add_address'
import bj_address from '@/components/bj_address'
Vue.use(Router)

export default new Router({
  routes: [
  {
      path: '/',
      name: 'index',
      component: index
   },
    
    {
//    path: '/',
//    name: 'index',
//    component: index
 			path: '/login',
      name: 'login',
      component: login
    },
     {
      path: '/index1',
      name: 'index1',
      component: index1
    },
    {
      path: '/index2',
      name: 'index2',
      component: index2
    },
     {
      path: '/order',
      name: 'order',
      component: order
    },
     {
      path: '/order_xq',
      name: 'order_xq',
      component: order_xq
    },
     {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/index_jd',
      name: 'index_jd',
      component: index_jd
    },
    {
      path: '/index_user',
      name: 'index_user',
      component: index_user
    },
      {
      path: '/index_fx',
      name: 'index_fx',
      component: index_fx
    },
      {
      path: '/index_jf',
      name: 'index_jf',
      component: index_jf
    } ,
      {
      path: '/my_order',
      name: 'my_order',
      component: my_order
    },
    {
    	path:'/address',
    	name:'address',
    	component:address
    },
    {
    	path:'/add_address',
    	name:'/add_address',
    	component:add_address
    },
     {
    	path:'/bj_address',
    	name:'/bj_address',
    	component:bj_address
    }
    
  ]
})

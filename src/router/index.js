import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import index1 from '@/components/index1'
import index2 from '@/components/index2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
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
    }
    
  ]
})

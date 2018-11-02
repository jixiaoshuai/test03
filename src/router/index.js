import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/HelloFromVux'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test03',
      name: 'test03',
      component: () => import('../pages/test03')
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/test04',
      name: 'test04',
      component: () => import('../pages/test04')
    },
    {
      path: '/test05',
      name: 'test05',
      component: () => import('../pages/test05')
    },
    {
      path: '/test06',
      name: 'test06',
      component: () => import('../pages/test06')
    },
    {
      path: '/test07',
      name: 'test07',
      component: () => import('../pages/test07')
    }
  ]
})

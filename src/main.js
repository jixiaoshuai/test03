// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import ueboot from 'ueboot'
import iView from 'iview'
import 'ueboot/dist/styles/ueboot.css'
import 'font-awesome/less/font-awesome.less'
import 'iview/dist/styles/iview.css'
FastClick.attach(document.body)

Vue.use(ueboot)
Vue.use(iView)

ueboot.Config.setConfig({
  logoImage: 'static/image/logo.png',
  sysTitle: '中台管理系统',
  page_login: {
    successRouter: { path: '/system'}
  },
  page_main: {
    logoStyle: {
      width: '300px'
    },
    logoImageStyle:{
      width: '20%'
    },
    dropdown: {
      items: [
        {name: '退出系统', disabled: false, divided: false, icon: 'md-exit'},
      ],
      avatar: {
        icon: 'ios-person',
        style: null,
        src: sessionStorage.getItem('ueboot_login_info') ? JSON.parse(sessionStorage.getItem('ueboot_login_info')).userAvatar ? JSON.parse(sessionStorage.getItem('ueboot_login_info')).userAvatar : '' : ''
      }
    },
    menuWidth: 250,
    logoutSuccessRouter: {name: 'login'}
  },
  axios: {baseURL: process.env.CONTEXT, unauthorizedUrl: process.env.CONTEXT_HTML + '/#/login'}
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App) 
}).$mount('#app-box')

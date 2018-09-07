import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import home from './components/home'
import login from './components/login'
import about from './components/about/about'
import register from './components/register'
import admin from './components/admin'
import menu from './components/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:home},
    {path:'/login',component:login},
    {path:'/about',component:about},
    {path:'/register',component:register},
    {path:'/admin',component:admin},
    {path:'/login',component:login},
    {path:'/menu',component:menu},
  ],
	mode:'history'
})

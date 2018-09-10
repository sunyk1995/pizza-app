import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import home from './components/home'
import login from './components/login'
import about from './components/about/about'
import register from './components/register'
import admin from './components/admin'
import menu from './components/menu'
//二级路由
import one from './components/about/one'
import two from './components/about/two'
import three from './components/about/three'
import four from './components/about/four/four'
//三级路由
import aaa from './components/about/four/aaa'
import bbb from './components/about/four/bbb'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:home},
    {path:'/login',component:login},
    {path:'/about',component:about,redirect:'/about/one',children:[
			{path:'/about/one',component:one},
			{path:'/about/two',component:two},
			{path:'/about/three',component:three},
			{path:'/about/four',component:four,redirect:'/about/four/aaa',children:[
				{path:'/about/four/aaa',component:aaa},
				{path:'/about/four/bbb',component:bbb},
			]}
		]},
    {path:'/register',component:register},
    {path:'/admin',component:admin},
    {path:'/login',component:login},
    {path:'/menu',component:menu},
		{path:'*',redirect:'/'}
  ],
	mode:'history'
})

<template>
	<div id="login">
		<form @submit.prevent="reset">
			<label>邮箱</label>
			<input type="email" v-model="msg.email"/>
			<label>密码</label>
			<input type="password" v-model="msg.password" />
			<button type="submit">登录</button>
		</form>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		name:'login',
		data(){
			return{
				msg:{}
			}
		},
		methods:{
			reset(){
				axios.get('/users.json').then(msg=>{
					let data = msg.data;
					let newarr = [];
					for(let key in data){
						newarr.push(data[key]);
					}
					console.log(newarr)
					const code = newarr.filter((item)=>{
						return item.email === this.msg.email && item.password === this.msg.password;
					})
					if(code&&code.length>0){
						alert('恭喜你，登录成功')
					}
					else{
						alert('账号或者密码错误')
					}
				})
			}	
		}
	}
</script>
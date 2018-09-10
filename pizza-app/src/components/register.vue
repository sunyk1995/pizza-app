<template>
	<div id="register">
		<div class="row">
			<form @submit.prevent="reset">
				<label>邮箱</label>
				<input type="email" v-model="msg.email" />
				<label>密码</label>
				<input type="password" v-model="msg.password" />
				<label>邮箱</label>
				<input type="password" v-model="msg.surepassword" />
				<button type="submit" >注册</button>
			</form>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		name:'register',
		data(){
			return{
				msg:{
					email:'',
					password:'',
					surepassword:''
				}
			}
		},
		computed:{
			
		},
		methods:{
			reset(){
				const msg = {
					eamil:this.email,
					password: this.msg.password,
					surepassword : this.msg.surepassword
				}
				if(msg.password == msg.surepassword){
					axios.post('/users.json',this.msg);
					alert('恭喜你，注册成功');
					this.$router.push('/login')			
					}else{
						alert('密码两次不一致')
					}
				
			}
		}
	}
</script>
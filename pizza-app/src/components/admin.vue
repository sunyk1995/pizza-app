<template>
	<div id="admin">
		<label>品类</label>
		<input type="text" v-model="type"/>
		<label>尺寸</label>
		<input type="text" v-model="size" />
		<label>价格</label>
		<input type="text" v-model="price" />
		<button @click="addto">添加</button>
		<div>
			<h1>产品列表</h1>
			<dl v-for="item in menu">
				<dt>{{item.type}}</dt>
				<dd>{{item.size}}</dd>
				<dd>{{item.price}}</dd>
				<dd>
					<button @click="dele(item.id)">删除</button>
				</dd>
			</dl>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		name:'admin',
		data(){
			return{
				menu:[],
				type:'',
				size:'',
				price:''
			}
		},
		methods:{
			addto(){
				let menu = {
					type:this.type,
					size:this.size,
					price:this.price
				};
				axios.post('/menu.json',menu).then(msg=>{
					this.$router.push('/menu')
				})
			},
			dele(id){
				axios.delete('/menu/'+id+'.json');
			}
		},
		created:function(){
			axios.get('/menu.json').then(msg=>{
				let data = msg.data
				for(var attr in data){
					data[attr].id = attr;
					this.menu.push(data[attr])
				}
				console.log(this.menu)
			})
		}
	}
</script>
<template>
	<div>
		<div class="row">
			<div class="col-8">
				<div class="single" v-for="item in menu">
					<h1>{{item.type}}</h1>
					<p>{{item.size}}</p>
					<p>{{item.price}}</p>
					<button @click="join(item.price,item.type,item.size)">+</button>
				</div>
			</div>
			<div class="col-4">
				<h2>结算</h2>
				<div class="jiesuan" v-for="item in shopping">
					<button @click="add(item)">+</button>
					<span>{{item.num}}</span>
					<button @click="reduce(item)">-</button>
					<a href="javascript:;">{{item.type}}</a>
					<a>{{item.price}}</a>
				</div>
				<p>总价格：</p>
				<a>{{allprice}}</a>
				
			</div>
		</div>
		
	</div>
</template>
<script>
	import axios from 'axios'
	export default{

		data(){
			return{
				shopping:[],
				menu:[],
			}
		},
		created:function(){
			axios.get('/menu.json').then(msg=>{
				let data = msg.data;
				for(let attr in data){
					data[attr].id = attr;
					this.menu.push(data[attr]);
				}
			})
		},
		methods:{
			join(price,type,size){
				let code = this.shopping.find(item=>{
					return item.type === type;
				})
				if(code){
					code.num ++;
				}else{
					this.shopping.push({
						type,
						size,
						price,
						num:1
					})
				}
				console.log(this.shopping)
			},
			add(item){
				item.num ++;
			},
			reduce(item){
				item.num--;
				if(item.num == -1 ){
					this.shopping.splice(this.shopping.indexOf(item),1)
				}
			}
		},
		computed:{
			allprice(){
				let money = 0;
				this.shopping.forEach(item=>{
					money+= item.price * item.num;
				})
				return money;
			}
		}
	}
</script>
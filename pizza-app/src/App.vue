<template>
  <div id="app">
   <div class="container">
		 <appHeader></appHeader>
		 <router-view></router-view>
	 </div>
  </div>
</template>
<script>
	import header from './components/header'
	export default{
		name:'app',
		components:{
			appHeader:header
		}
	}
</script>
<style>

</style>

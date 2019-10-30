<template>
	<div>
		<h2>我的宝贝信息</h2>
	
		<div></div>
	</div>

	
	
</template>

<script>
	export default {
		created(){
			console.log(this.$route.params.id);
			
			// 根据id去请求网络  获取宝贝详情信息
			
			// 假数据
			this.goodinfo ={
				
			}
		},
		data() {
			return {
				goodinfo:null,
			};
		}
	}
</script>

<style>

</style>

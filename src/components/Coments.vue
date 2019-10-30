<template>
	<div>
		<h1>评论信息</h1>
		
		<div></div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				commentInfo:null
			}
		},
		created(){
			console.log(this.$route.params.id);
			// 真实评论信息需要请求服务器 
			
			// 假数据
			this.commentInfo = {
				
			}
		}
	}
</script>

<style>

</style>

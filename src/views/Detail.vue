<template>
	<div class="detail">
		<h2>商品:{{this.$route.params.id}}</h2>
		<img src="../assets/logo.png" alt="">
		<p>详情</p>
		<p>评论</p>
	</div>
</template>

<script>
	export default {
		created(){
			// 此处应获取了商品id
			// 通过这个id去请求服务对应的商品的数据库信息
			console.log(this.$route.params.id);
		}
	}
</script>

<style>

</style>

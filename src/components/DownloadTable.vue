<template>
	<div class="container">
		<h2>  <slot></slot> </h2>
		<table cellpadding="" cellspacing="" border="">
			<tr>  <th>版本号</th> <th>更新日期</th> <th>操作</th> </tr>
			
			<tr v-for="item in items">  <th>{{item.version}}</th> <th>{{item.updateTime}}</th> <th> <a href="#">下载</a> </th> </tr>
		</table>
		
		
	</div>
	
	
</template>

<script>
	export default {
		props:["items"]
	}
</script>



<style scoped>

.container{
	text-align: center;
}

.container table{
	width: 600px;
	margin: 0 auto;
}
</style>

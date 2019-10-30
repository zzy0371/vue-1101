<template>
	<div class="cart">
		<h1>购物车</h1>
		<div class="container">
			
			
			<table cellpadding="" cellspacing="" border="">
				<tr>  <th>商品名</th>  <th>商品单价</th> <th>商品数量</th> </tr>
				
				<tr v-for="item in $store.state.goods"> 
					<td>{{item.title}}</td>  
					<td>{{item.price}} </td> 
					<td> 
						<button type="primary">-</button>  
						<span>  {{item.num}}  </span> 
						<button type="primary">+</button>
					</td> 
				</tr>
				
			</table>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="less">
	
	.container{
		display:flex;
		justify-content: center;
		
		table{
			width: 600px;
		}
	}

</style>

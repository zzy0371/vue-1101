<template>
	<div class="detail">
		<h2>{{good.title}}</h2>
		<img :src="good.image" alt="">
		<br>
		<button @click="num--" :disabled="num==1">-</button> {{num}} <button @click="num++">+</button>  <button>购买</button>
		<br>
		<router-link :to="`/detail/${this.$route.params.id}/baby`">宝贝详情</router-link> <router-link :to="`/detail/${this.$route.params.id}/comments`">评论</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				good:null,
				num:1,
			}
		},		
		
		
		created(){
			// 此处应获取了商品id
			// 通过这个id去请求服务对应的商品的数据库信息
			console.log(this.$route.params.id);
			

			
			
			
			this.good = {
					id:this.$route.params.id,
					title:`商品${this.$route.params.id}`,
					image:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=250&h=250&f=webp&q=90",				
				}
		}
	}
</script>

<style scoped>

a.router-link-exact-active,a.router-link-active{
	background-color: #2B81AF;
}

</style>




<!-- 
1.给每一个商品添加超级链接    router-link  to 使用  为    "`/detail/item.id`" 
2.添加商品详情页路由     {path:"/detail/:id" ,name:'detail', component:  }
3.提取路由参数  this.$route.params.id
 
 
 
 -->
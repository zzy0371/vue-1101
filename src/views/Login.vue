<template>
	<div class="login">
		<h1>登录页面</h1>
			
		用户名： <input type="text" v-model="user.name">	
		<br>
		密码: <input type="password" v-model="user.pwd">
		<br>
		<button type="primary" @click="login">登录</button>
			
	</div>
</template>

<script>
	export default {
		data(){
			return{
				user:{
					name:"zzy0371",
					pwd:"zzy0371"
				}
			}
		},
		methods:{
			login(){
				console.log("向服务器发起请求")
				this.$http({
					url:'http://www.520mg.com/member/index_login.php',
					method:'post',
					data:`fmdo=login&dopost=login&userid=${this.user.name}&pwd=${this.user.pwd}`,
					// 将Cookie将至上传服务器
					withCredentials:true,
				}).then(res=>{
					console.log("得到服务器响应",res.data);
					if(res.data.status==1){
						console.log('登录成功');
						// 设置登录状态为true
						this.$store.commit("setLog",true);
						
						// 要考虑以下 从哪儿来
						console.log(`我在进入登录页面之前从${this.$route.query.redirect} 所以登录成功之后我要回到该页面`);
						if(this.$route.query.redirect){
							this.$router.push(this.$route.query.redirect)
						}
						else{
							this.$router.push('/')
						}
						
						
					}
					else
					{
						console.log('登录失败')
					}
					
				})
				
			}
		}
	}
</script>

<style>

</style>

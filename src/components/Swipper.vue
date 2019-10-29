<template>
	<div class="container" @mouseover="stop" @mouseleave="resume">
		
		<img v-for="(item,index) in items" v-show="index==currentIndex" :key="item" :src="item" alt="">

		<div class="point" :class="{active:currentIndex==index}" v-for="(item,index) in items" @click="currentIndex=index"></div>
			
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				currentIndex:0,
				playing:true,
				interval:null
			}
		},
		created(){
			this.play();
		},
		destroyed(){
			clearInterval(this.interval);
		},
		methods:{
			play(){
				this.interval = setInterval( ()=>{
					if(this.playing)
					{
						this.currentIndex++;
						if(this.currentIndex>=this.items.length){
							this.currentIndex=0;
						}
					}
				},3000 )
			},
			stop(){
				this.playing=false;
				console.log(this.playing);
			},
			resume(){
				this.playing=true;
			}
		},
		props:["items"]
	}
</script>


<!--样式中使用less  预处理 需要在style标签中表名 lang=less -->
<!-- scoped代表样式只在当前组件生效 -->
<style>

.container img{
	width: 100%;
}

.container .point{
	display: inline-block;
	width: 10px;
	height: 10px;
	border-radius: 10px;
	margin: 5px;
	position: relative;
	top: -50px;
	background-color: #2B81AF;
	z-index: 10;
}

.container .active{
	background-color: white;
}
</style>

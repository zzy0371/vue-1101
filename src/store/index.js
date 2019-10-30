import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	//  State  相当于VUE data
	// 获取数据  this.$store.state.age
  state: {
		goods:[],
		isLog:false
  },
	
	// mutations 相当于VUE methods
	// 调用方法 this.$store.commit("函数名",参数列表)
  mutations: {
		setLog(state,log){
			state.isLog=log;
		},
		
		
		// 第一个参数必须为state
		addToCart(state,item){
			// console.log(item);
			let canAdd = true;
			state.goods.forEach(good=>{				
				if(good.id == item.id)
				{
					good.num+=item.num;
					canAdd = false;
				}
			})
			// console.log("执行");
			if(canAdd){
				state.goods.push(item)
			}
			
		}
  },
	
	
  actions: {
  },
  modules: {
  },
})

//  VUEX  数据状态管理器





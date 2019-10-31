import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DownLoad from '../views/DownLoad.vue'
import Detail from '../views/Detail.vue'
import Carts from '../views/Carts.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import LogOut from '../views/LogOut.vue'



import Baby from '@/components/Baby.vue'
import Coments from '@/components/Coments.vue'
Vue.use(VueRouter)

// 当前项目中的所有路由的列表集合
// 每个路由由几部分构成
// path: 路由路径  匹配使用
// name: 路由名字
// component： 路由对应的组件
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/joke',
    name: 'joke',
		// 当前路由需要授权
		meta:{
			auth:true
		},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Joke.vue')
  },
	{
		path:"/download",
		name:"download",
		component:DownLoad
	},
	{
		path:"/login",
		name:"login",
		component:Login
	},
	{
		path:"/logout",
		name:"logout",
		component:LogOut
	},
	{
		path:"/regist",
		name:"regist",
		component:Regist
	},
	{
		path:"/carts",
		name:"carts",
		component:Carts,
		// 当前路由需要授权
		meta:{
			auth:true
		}
	},
	{
		
		// 路由参数  能够匹配   /detail/101
		path:"/detail/:id",
		name:"detail",
		component:Detail,
		children:[
			{
				path:"baby",
				name:"baby",
				component:Baby
			},
			{
				path:"comments",
				name:"comments",
				component:Coments
			}
		]
	}
]

const router = new VueRouter({
  routes
})


// 在路由中修改vuex的变量需要重新导入 不能使用this 
import store from '../store'

// 导航守卫 拦截非法请求
router.beforeEach( (toRouter,fromRouter,next )=>{
	console.log(toRouter,fromRouter);
	console.log(toRouter.meta.auth)
	
	if(toRouter.meta.auth)
	{
		// 需要授权 请进入login
		// console.log(toRouter.path);
		// redirect 意思是 重定向
		// 处理如果登录成功该怎么办

		// 判断用户是否登陆过
		// TODO 添加逻辑
		// 如果登录过了 直接next
		// 如果没有登录 进入登录页面
		
		
		// this 不能够代表vue 
		if(store.getters.getLog){
			next();
		}
		else{
			console.log(`本来想进入${toRouter.path} 结果应为该页面需要登录  而现在又没有登录`)
			next(`/login?redirect=${toRouter.path}`)
		}
		
		
	}
	else
	{
		next()
	}

})


// 导出了路由对象
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DownLoad from '../views/DownLoad.vue'

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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
	{
		path:"/download",
		name:"download",
		component:DownLoad
	}
]

const router = new VueRouter({
  routes
})


// 导出了路由对象
export default router

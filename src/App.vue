<template>
  <div id="app">
    <div id="nav">
			
			<!-- router-link  会渲染成a 标签   to等同href -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
			<router-link to="/download">DownLoad</router-link>
			
    </div>
		
		<!-- 将当前路由所对应的组件显示在router-view下方 -->
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
	<div class="download">
		
		<download-table :items="pyCharm"> Pycharm </download-table>
		
		<download-table :items="hBuilderX"> Hbuilder </download-table>
	</div>
	
</template>

<script>
	import DownloadTable from '@/components/DownloadTable.vue'
	export default {
		data() {
			return {
				pyCharm:[
					{
						version:"2018.6",
						updateTime:"2018-06"
					},
					{
						version:"2018.9",
						updateTime:"2018-09"
					},
					{
						version:"2019.6",
						updateTime:"2019-06"
					}
				],
				hBuilderX:[
					{
						version:"1.3.2",
						updateTime:"2018-09"
					},
					{
						version:"1.1.1",
						updateTime:"2017-09"
					},
					{
						version:"0.9.5",
						updateTime:"2016-06"
					},
					{
						version:"0.1.0",
						updateTime:"2015-06"
					}
				]
			};
		},
		components:{
			DownloadTable
		}
	}
</script>

<style>

</style>

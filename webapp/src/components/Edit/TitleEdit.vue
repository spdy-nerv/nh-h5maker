<template>
	<div class="te-wrap">
		<div>
			<label>组件名称</label>
			<input type="text" name="name" placeholder="请输入组件名称" v-model="element.name"/>
		</div>
	</div>
</template>

<script>
export default {
	props: ['element']	
}

</script>


<style lang='less' scoped>
</style>

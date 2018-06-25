<template>
	<div class="te-wrap">
		<div>
			<label>组件名称</label>
			<input type="text" name="name" placeholder="请输入组件名称" v-model="element.name"/>
		</div>
		<div>
			<label>默认提示</label>
			<input type="text" name="placeholder" placeholder="请输入默认提示文字" v-model="element.placeholder" />
		</div>
		<div>
			<label>绑定属性</label>
			<input type="text" name="placeholder" placeholder="请输入绑定的属性名称" v-model="element.attrName" />
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

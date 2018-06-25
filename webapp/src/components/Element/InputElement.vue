<template>
	<div class="ie-wrap">
    <Operate class="operate" v-show="element === editingElement" :element="element" />
		<label class="ie-label">{{element.name}}</label>
		<input class="ie-input" type="text" :placeholder="element.placeholder" :name="element.attrName" />
	</div>
</template>

<script>
  import Operate from './../OperateNew'
 	export default {
    props: ['element'],
    computed: {
      editingElement () {
        return this.$store.getters['editingElement']
      }
    },
    methods: {},
    components: { Operate }
  }
</script>

<style lang='less' scoped>
  .ie-wrap {
		position: relative;
    width: 100%;
    cursor: move;
  }

  .operate {
    z-index: 2;
  }

</style>

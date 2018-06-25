<template>
	<div class="be-wrap">
    <Operate class="operate" v-show="element === editingElement" :element="element" />
		<button>{{element.name}}</button>
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
  .be-wrap {
		position: relative;
    width: 100%;
    cursor: move;
  }

  .operate {
    z-index: 2;
  }

</style>

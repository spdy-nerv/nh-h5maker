<template>
	<div class="te-wrap">
    <Operate class="operate" v-show="element === editingElement" :element="element" />
		<label class="te-label">{{element.name}}</label>
		<textarea class="te-input" :placeholder="element.placeholder" :name="element.attrName"></textarea>
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
  .te-wrap {
		position: relative;
    width: 100%;
    cursor: move;
  }

  .operate {
    z-index: 2;
  }

</style>

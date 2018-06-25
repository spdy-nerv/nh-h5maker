<template>
	<div class="cc-wrap">
    <div class="clearfix">
      <span class="panel" :class="{ active: viewState === 0 }" @click="function () { viewState = 0 }">组件配置</span>
      <span class="panel" :class="{ active: viewState === 1 }" @click="function () { viewState = 1 }">页面配置</span>
    </div>
		<div class="list custom-scroller" style="z-index: 1;">
			<TitleEdit v-if="element && element.type == 'title'" :element="element"></TitleEdit>
			<InputEdit v-if="element && element.type == 'input'" :element="element"></InputEdit>
			<TextareaEdit v-if="element && element.type == 'textarea'" :element="element"></TextareaEdit>
			<ButtonEdit v-if="element && element.type == 'button'" :element="element"></ButtonEdit>
		</div>
		<div class="list custom-scroller" style="z-index: 2;" v-show="viewState == 1">
			tab2222
		</div>
	</div>
</template>

<script>
import InputEdit from '../../components/Edit/InputEdit'
import TitleEdit from '../../components/Edit/TitleEdit'
import TextareaEdit from '../../components/Edit/TextareaEdit'
import ButtonEdit from '../../components/Edit/ButtonEdit'
export default {
	data () {
		return {
			viewState: 0
		}
	},

	computed: {
		element () {
			let ele = this.$store.state.editor.editorElement
			return ele || {}
		}
	},

	watch: {
		element () {
			let ele = this.$store.state.editor.editorElement
			if (ele && ele.type) {
				this.viewState = 0
			} else {
				this.viewState = 1
			}
		}
	},

	components: {
		TitleEdit, InputEdit, TextareaEdit, ButtonEdit
	}
}

</script>

<style lang="less" scoped>
  .cc-wrap {
    position: relative;
    border-right: 1px solid #d6d6d6;
    background-color: #ececec;
    height: 100%;
    .panel {
      float: left;
      line-height: 40px;
      width: 50%;
      text-align: center;
      background-color: #d6d6d6;
      cursor: pointer;
      &.active {
        background-color: transparent;
      }
    }
    .list {
      background-color: #ececec;
      position: absolute;
      top: 40px;
      bottom: 50px;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
	}
</style>

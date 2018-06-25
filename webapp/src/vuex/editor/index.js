import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import appConst from '../../util/appConst'

const state = {
  editorElement: {}, // 正在编辑的元素
  editorPage: {
    elements: []
  }, // 正在编辑的页面
  themeList: [], // 用户所有主题列表
  editorTheme: {
    title: '',
    description: '',
    canvasHeight: 504
  }, // 正在编辑的主题
  picList: [], // 图片列表
	elementTypeList: [
		{
			name: '标题',
			type: appConst.ELE_TITLE
		}, {
			name: '单行输入',
			type: appConst.ELE_INPUT
		}, {
			name: '多行输入',
			type: appConst.ELE_TEXTAREA
		}, {
			name: '按钮',
			type: appConst.ELE_BUTTON
		}
	]
}

export default{
  state,
  getters,
  actions,
  mutations
}

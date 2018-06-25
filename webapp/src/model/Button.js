/**
 * @Author aloysious
 * @Date   2018.6.20
 */
import Element from './Element'
import appConst from '../util/appConst'

export default class Button extends Element {
	constructor (ele = {}) {
		super(ele)
		this.type = appConst.ELE_BUTTON
	}	
}

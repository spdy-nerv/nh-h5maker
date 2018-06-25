
let BACKEND_DOMAIN = 'http://localhost:3000'
if (process.env.NODE_ENV === 'production') {
  BACKEND_DOMAIN = 'http://h5.limesoftware.cn'
} else if (process.env.NODE_ENV === 'development') {
  BACKEND_DOMAIN = 'http://localhost:3000'
}
export default {
  BACKEND_DOMAIN,
	ELE_TITLE: 'title',
	ELE_INPUT: 'input',
	ELE_TEXTAREA: 'textarea',
	ELE_BUTTON: 'button'
}

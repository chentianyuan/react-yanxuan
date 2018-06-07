import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import '@/static/font/iconfont.css'
import '@/static/css/reset.css'
// import '@/static/css/common.less'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

import { createSSRApp } from 'vue'
import App from './App.vue'

import Vconsole from 'vconsole'

// 引入pinia
import { setupStore } from '@/store/index.js'

//引入svg注册脚本
import 'virtual:svg-icons-register'

// 引入vant
import { vant } from '@/components/index.js'
import 'vant/lib/index.css'


// 引入全局scss
import '@/styles/index.scss'
import '@/styles/custom-style.scss'

const NODE_ENV = import.meta.env.MODE

export function createApp() {
	const app = createSSRApp(App)
	setupStore(app) // 注册store
	vant(app) // 注册vant组件
	if (NODE_ENV === 'dev') {
		// 提交前需要注释  本地调试使用
		const vConsole = new Vconsole()
		app.use(vConsole)
	} else { // production
		// 去掉所有console.log
		window.console.log = function () { }
	}
	return {
		app,
	};
}

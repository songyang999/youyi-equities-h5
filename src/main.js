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

export function createApp() {
	const app = createSSRApp(App)
	setupStore(app) // 注册store
	vant(app) // 注册vant组件
	const vConsole = new Vconsole()
	app.use(vConsole)
	return {
		app,
	};
}

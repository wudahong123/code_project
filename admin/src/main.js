import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from 'vue3-particles'
import store from './store'

//创建应用，并指定应用的首页为App.vue
const app = createApp(App)

app.use(ElementPlus)
app.use(Particles)

//全局注册了store
app.use(store)

app.use(createPinia())

//全局注册路由
app.use(router)

app.mount('#app')

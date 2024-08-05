import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 添加了三行
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from "vue3-particles";

const app = createApp(App)

// 添加了两行
app.use(ElementPlus)
app.use(Particles)

app.use(createPinia())
app.use(router)

app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import antd from 'ant-design-vue'

const app = createApp(App)

app.use(router)
app.use(antd)

app.mount('#app')

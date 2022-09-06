import { createApp } from 'vue'
import 'normalize.css'
import './style.css'
import './assets/iconfont.css'
import App from './App.vue'
import router from './router/index'
const app = createApp(App)
app.use(router)
app.mount('#app')

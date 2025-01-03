import { createApp } from 'vue'
import microApp from '@micro-zoe/micro-app'
import './style.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
microApp.start({
  'router-mode': 'pure'
})

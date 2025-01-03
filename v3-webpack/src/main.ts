import { createApp, App as VueApp } from 'vue'
import { createPinia } from 'pinia'
import './public-path'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
const pinia = createPinia()

let app: VueApp<Element> | null = null
;(window as any).mount = () => {
  app = createApp(App)
  app.use(router)
  app.use(pinia)
  app.mount('#app')
}
;(window as any).unmount = () => {
  app?.unmount()
  app = null
}

if (!(window as any).__MICRO_APP_ENVIRONMENT__) {
  ;(window as any).mount()
}

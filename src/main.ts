import './index.css'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(ToastPlugin)

app.mount('#app')

import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vue, { createApp } from '@vue/compat'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/assets/main.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
const app = createApp(App)
app.use(router)
app.mount('#app')

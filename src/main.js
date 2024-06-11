import '@/assets/plugins/bootstrap/dist/css/bootstrap.min.css'
import '@/assets/plugins/bootstrap/dist/js/bootstrap.bundle.min.js'
import $ from 'jquery'
// import '@/assets/plugins/chosen/chosen.min.css'
// import '@/assets/plugins/chosen/chosen.min.js'
// import '@/assets/js/js_script.js'
import '@/assets/scss/main.min.css'

import axios from 'axios'

window.$ = $

window.axios = axios

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(router)

app.mount('#app')

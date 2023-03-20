import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueYandexMetrika from 'vue-yandex-metrika'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueYandexMetrika, {
    id: 92865274,
    router: router,
    env: process.env.NODE_ENV
    // other options
})

app.mount('#app')


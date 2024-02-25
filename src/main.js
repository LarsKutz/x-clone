import './assets/main.css'
import './components/icons/icons.js'
import 'primevue/resources/themes/aura-dark-noir/theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

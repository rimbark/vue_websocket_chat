import App from './App.vue'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import './style.scss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
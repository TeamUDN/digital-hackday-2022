import { createApp } from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import router from './router.js'

const app = createApp(App)
app.use(VueParticles)
app.use(router)
app.mount('#app')

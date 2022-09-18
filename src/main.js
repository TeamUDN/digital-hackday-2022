import { createApp } from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import router from './router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCopy)

const app = createApp(App)
app.use(VueParticles)
app.use(router)
app.component('fa', FontAwesomeIcon )
app.mount('#app')

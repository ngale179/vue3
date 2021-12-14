// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import router from './routes.js';
import { VuesticPlugin } from 'vuestic-ui'
const app = createApp(App);
app.use(router)
app.use(VuesticPlugin)
app.mount('#app')

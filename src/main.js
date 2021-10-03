import { createApp } from 'vue'
import App from './App.vue'
import './style/main.css'
import router from './router/index'
import { VueDapp } from 'vue-dapp'
import 'virtual:windi.css'

const isDev = import.meta.env.DEV
const infuraId = import.meta.env.VITE_INFURA_ID // get VITE_INFURA_ID=<infura_id> from .env file in the project root.

const app = createApp(App)

app
  .use(VueDapp, {
    infuraId: isDev ? infuraId : 'ff6a249a74e048f1b413cba715f98d07',
  })
  .use(router)
  .mount('#app')

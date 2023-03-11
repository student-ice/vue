import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "./assets/base.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'
import { NavBar } from "vant";
import 'vant/lib/index.css';


const app = createApp(App)
const pina = createPinia()
app.use(router)
app.use(NavBar)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pina)
app.use(naive)
app.mount('#app')

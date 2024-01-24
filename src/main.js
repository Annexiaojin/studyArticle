import './assets/main.scss'

import { createApp } from 'vue'
/*引入elementPlus*/
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
/*引入路由router*/
import router from '@/router'
import App from './App.vue'
/*引入pinia 持久化*/
import {createPinia} from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'
/*elementPlus的中文包*/
import locale from 'element-plus/dist/locale/zh-cn.js'

const app = createApp(App);
const pinia = createPinia();
const persist = createPersistedState();
pinia.use(persist)
app.use(pinia)
app.use(router)
app.use(ElementPlus,{locale});
app.mount('#app')

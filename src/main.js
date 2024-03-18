import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdDeleteforeverOutlined, MdModeeditoutlineOutlined } from "oh-vue-icons/icons";

addIcons(MdDeleteforeverOutlined, MdModeeditoutlineOutlined);

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.use(MotionPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')

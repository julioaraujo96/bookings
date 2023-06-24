import App from './App.vue'
import { createApp } from 'vue'
import './style.css'
import router from './router';
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

createApp(App)
.use(router)
.use(VueTailwindDatepicker)
.mount('#app')

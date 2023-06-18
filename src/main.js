import App from './App.vue'
import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import './style.css'
import  Flights  from './Views/Flights.vue'


const routes = [
    {
        path: '/',
        redirect: '/flights' // Add the redirect route
    },
    {
        path: '/flights', component: Flights
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')

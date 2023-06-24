import { createWebHistory, createRouter } from 'vue-router'
import  Flights  from './Views/Flights.vue'

const routes = [
    {
        path: '/',
        redirect: '/flights',
    },
    {
        path: '/flights', component: Flights
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
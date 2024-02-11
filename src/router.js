import { createRouter, createWebHistory } from 'vue-router'
import Lots from './Pages/Lots/Index.vue'
import Welcome from './Pages/Welcome.vue'

const routes = [
    { path: '/', component: Welcome },
    { path: '/welcome', component: Welcome },
    { path: '/lots', component: Lots },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

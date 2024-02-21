import { createRouter, createWebHistory } from 'vue-router'
import Lots from './Pages/Lots/Index.vue'
import Login from './Pages/Auth/Login.vue'
import Register from './Pages/Auth/Register.vue'
import Welcome from './Pages/Welcome.vue'

const routes = [
    { path: '/', component: Welcome },
    { path: '/welcome', component: Welcome },
    { path: '/lots', component: Lots },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

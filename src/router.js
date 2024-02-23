import { createRouter, createWebHistory } from 'vue-router'
import Lots from './Pages/Lots/Index.vue'
import Lot from './Pages/Lots/Show.vue'
import Login from './Pages/Auth/Login.vue'
import Register from './Pages/Auth/Register.vue'
import VerifyEmail from './Pages/Auth/VerifyEmail.vue'
import Welcome from './Pages/Welcome.vue'

const routes = [
    { path: '/', component: Welcome },
    { path: '/welcome', component: Welcome },
    { path: '/lots', component: Lots },
    { path: '/lots/:id', component: Lot },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/verify-email', component: VerifyEmail },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

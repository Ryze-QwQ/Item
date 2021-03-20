import { Login } from './pages/login/login'
import { Home } from './pages/home/home'

export const routes = [
    { path: '/', component: Home, exact: true },
    { path: '/login', component: Login }
]


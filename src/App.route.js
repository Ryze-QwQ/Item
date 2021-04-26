import { Login } from './pages/login/login'
import Home from './pages/home/home'

export const routes = [
    { path: '/', component: Login, exact: true },
    { path: '/home', component: Home }
]
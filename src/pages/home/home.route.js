import Person from './person/person';
import Dashboard from './dashboard/dashboard';

export const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/person', component: Person }
]
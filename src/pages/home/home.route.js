import Person from './person/person';
import Dashboard from './dashboard/dashboard';
import Project from './projects/project';
import Total from './total/total';
import Default from './default/default';

export const routes = [
    { path: '/home', component: Default, exact: true },
    { path: '/home/dashboard', component: Dashboard },
    { path: '/home/person', component: Person },
    { path: '/home/project', component: Project },
    { path: '/home/total', component: Total },
]
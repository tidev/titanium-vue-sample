import { routes as controlsRoutes } from './modules/controls';
import { routes as homeRoutes } from './modules/home';
import { routes as introRoutes } from './modules/intro';

export default [
    ...controlsRoutes,
    ...homeRoutes,
    ...introRoutes
];

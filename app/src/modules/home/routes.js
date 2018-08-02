import Home from './components/Home';

export const routes = [
    {
        path: '/',
        component: Home,
        beforeEnter: (to, from, next) => {
            const isFirstLaunch = Ti.App.Properties.getBool('firstLaunch', false);
            if (isFirstLaunch) {
                Ti.App.Properties.setBool('firstLaunch', false);
                return next('/intro');
            }

            next();
        }
    }
];

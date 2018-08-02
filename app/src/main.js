/* global Ti */

import Vue from 'titanium-vue';
import VueRouter from 'vue-router';

import App from './App';
import routes from './routes';

import './components/globals';

Vue.use(VueRouter);

const router = new VueRouter({
	windowRouting: true,
	routes
});

try {
	new Vue({
		name: 'Main',
		router,
		render: h => h(App)
	}).$start();

	router.push('/');
} catch (e) {
	Ti.API.debug(e);
	Ti.API.debug(e.stack);
}

/* global Ti */

import Vue from 'titanium-vue';
import App from './App.vue';

try {
	new Vue({
		render: h => h(App)
	}).$start();
} catch (e) {
	Ti.API.debug(e);
	Ti.API.debug(e.stack);
}

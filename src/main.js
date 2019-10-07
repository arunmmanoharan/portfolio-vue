import Vue from 'vue';
import App from './App.vue';
import Fragment from 'vue-fragment';
import VueCarousel from 'vue-carousel';

import './assets/styles/scss/default.scss';
import './assets/styles/scss/layout.scss';
import './assets/styles/scss/media-queries.scss';

Vue.use(Fragment.Plugin);
Vue.use(VueCarousel);

Vue.config.productionTip = false;

export const serverBus = new Vue();

new Vue({
	render: h => h(App),
}).$mount('#app');

/**
 * @ 入口文件
 * @author shan-er
 */
import Vue from 'vue';
import App from './app.vue';
import router from './routes.js';
require('./assets/scss/common.scss');
require('./assets/css/md.css');

new Vue({
	router,
	el: '#app',
	render: h => h(App)
});

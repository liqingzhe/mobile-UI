/**
 * @ 路由跳转
 * @author shan-er
 */
import Vue from 'vue';
import Router from 'vue-router';
const aboutPage = () => import ('./pages/about.vue');
const toast = () => import ('./pages/toast.md');

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: aboutPage
    },{
        path: '/toast',
        component: toast
    }
]
});
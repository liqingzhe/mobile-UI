/**
 * @ 路由跳转
 * @author shan-er
 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: resolve => require(['./pages/README.md'], resolve)
    }, {
        path: '/toast',
        component: resolve => require(['./pages/toast.md'], resolve)
    }, {
        path: '/repositories',
        component: resolve => require(['./pages/repositories.md'], resolve)
    }, {
        path: '/quickstart',
        component: resolve => require(['./pages/quickstart.md'], resolve)
    }, {
        path: '/indicator',
        component: resolve => require(['./pages/indicator.md'], resolve)
    }, {
        path: '/loadmore',
        component: resolve => require(['./pages/loadmore.md'], resolve)
    }, {
        path: '/infinite-scroll',
        component: resolve => require(['./pages/infinite-scroll.md'], resolve)
    }, {
        path: '/message-box',
        component: resolve => require(['./pages/message-box.md'], resolve)
    }, {
        path: '/action-sheet',
        component: resolve => require(['./pages/action-sheet.md'], resolve)
    }, {
        path: '/popup',
        component: resolve => require(['./pages/popup.md'], resolve)
    }, {
        path: '/swipe',
        component: resolve => require(['./pages/swipe.md'], resolve)
    }, {
        path: '/lazyload',
        component: resolve => require(['./pages/lazyload.md'], resolve)
    }, {
        path: '/range',
        component: resolve => require(['./pages/range.md'], resolve)
    }, {
        path: '/progress',
        component: resolve => require(['./pages/progress.md'], resolve)
    }, {
        path: '/picker',
        component: resolve => require(['./pages/picker.md'], resolve)
    }, {
        path: '/datetime-picker',
        component: resolve => require(['./pages/datetime-picker.md'], resolve)
    }, {
        path: '/index-list',
        component: resolve => require(['./pages/index-list.md'], resolve)
    }, {
        path: '/palette-button',
        component: resolve => require(['./pages/palette-button.md'], resolve)
    }, {
        path: '/header',
        component: resolve => require(['./pages/header.md'], resolve)
    }, {
        path: '/tabbar',
        component: resolve => require(['./pages/tabbar.md'], resolve)
    }, {
        path: '/navbar',
        component: resolve => require(['./pages/navbar.md'], resolve)
    }, {
        path: '/button',
        component: resolve => require(['./pages/button.md'], resolve)
    }, {
        path: '/cell',
        component: resolve => require(['./pages/cell.md'], resolve)
    }, {
        path: '/cell-swipe',
        component: resolve => require(['./pages/cell-swipe.md'], resolve)
    }, {
        path: '/spinner',
        component: resolve => require(['./pages/spinner.md'], resolve)
    }, {
        path: '/tab-container',
        component: resolve => require(['./pages/tab-container.md'], resolve)
    }, {
        path: '/search',
        component: resolve => require(['./pages/search.md'], resolve)
    }, {
        path: '/switch',
        component: resolve => require(['./pages/switch.md'], resolve)
    }, {
        path: '/checklist',
        component: resolve => require(['./pages/checklist.md'], resolve)
    }, {
        path: '/radio',
        component: resolve => require(['./pages/radio.md'], resolve)
    }, {
        path: '/field',
        component: resolve => require(['./pages/field.md'], resolve)
    }, {
        path: '/badge',
        component: resolve => require(['./pages/badge.md'], resolve)
    }, ]
});
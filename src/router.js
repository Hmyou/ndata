import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    base: '/',
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import(/* webpackChunkName: "tasklist" */ './views/Index.vue')
        },
        {
            path: '*',
            redirect: {
                name: 'index'
            }
        }
    ],
    // 刷新或切换页面后置顶
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0}
        }
    }
})

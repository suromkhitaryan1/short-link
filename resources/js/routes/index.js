import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

// Vuex Store
const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "Home" */'../pages/Home.vue')
        },
        {
            path: '/:shortLink',
            name: 'shortLink',
            component: () => import(/* webpackChunkName: "ShortLink" */'../pages/ShortLink.vue')
        },

    ]
})
router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware
    const context = {
        to,
        from,
        next,
    }
    return middleware[0]({
        ...context

    })
})
export default router;
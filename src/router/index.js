import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Views */
import test from '@/views/test'

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/:id',
                component: test,
                name: 'test',
                meta: {title: 'test', affix: true}
            }
        ]
    }
]

export const asyncRoutes = []

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router

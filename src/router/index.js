import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Symptoms from '../views/Symptoms.vue'
import Prevention from '../views/Prevention.vue'
import Treatment from '../views/Treatment.vue'
import FAQ from '../views/FAQ.vue'
import News from '../views/News.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About,
        meta: { title: 'About Crona' }
    },
    {
        path: '/Symptoms',
        name: 'Symptoms',
        component: Symptoms,
        meta: { title: 'Symptoms' }
    },
    {
        path: '/Prevention',
        name: 'Prevention',
        component: Prevention,
        meta: { title: 'Prevention' }
    },
    {
        path: '/Treatment',
        name: 'Treatment',
        component: Treatment,
        meta: { title: 'Treatment' }
    },
    {
        path: '/FAQ',
        name: 'FAQ',
        component: FAQ,
        meta: { title: 'FAQ' }
    },
    {
        path: '/News',
        name: 'News',
        component: News,
        meta: { title: 'News' }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});
export default router
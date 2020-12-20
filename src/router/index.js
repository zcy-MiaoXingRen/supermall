import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Cate.vue')
const Shopping = () => import('views/shopping/Shop.vue')
const Profile = () => import('views/profile/Profile.vue')

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    { 
        path: '/home',
        name: Home,
        component: Home
    },
    { 
        path: '/category',
        name: Category,
        component: Category
    },
    { 
        path: '/shopping',
        name: Shopping,
        component: Shopping
    },
    { 
        path: '/profile',
        name: Profile,
        component: Profile
    }
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router
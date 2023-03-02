import {createRouter, createWebHistory} from "vue-router"
import HomePage from "../views/HomePage"
import AboutPage from '@/views/AboutPage'

const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/about",
        component: AboutPage
    }
]

const router = createRouter({
    /*
        createWebHistory
            home: http://localhost:8080/
            about: http://localhost:8080/about
    */
   /*
        createWebHashHistory
            home: http://localhost:8080/#/
            about: http://localhost:8080/#/about
    */
    history: createWebHistory(),
    routes
})

export default router;
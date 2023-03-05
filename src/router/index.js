import {createRouter, createWebHistory} from "vue-router"
//import homePage from "../components/layout/HomePage"

const routes = [
    {
        path: '/', 
        redirect: '/home',
        meta: {
            title: 'ice music'
        }
    },
    {
        path: "/home",
        component: () => import("../views/homeView"),
        meta: {
            title: 'ice music'
        }
    },
    {
        path: "/ranking",
        component: () => import("../views/rankingList")
    },
    {
        path: "/musicList",
        component: () => import("../views/musicList")
    },
    {
        path: "/mv",
        component: () => import("../views/mvView")    },
    {
        path: "/signer",
        component: () => import("../views/signerView")
    },
    {
        path: "/favourite",
        component: () => import("../views/favouriteView")
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
import {createRouter, createWebHistory} from "vue-router"
//import homePage from "../components/layout/HomePage"
import homeView from "../views/homeView.vue"
import musicList from "../views/musicList.vue"
import mv from "../views/MV.vue"
import signer from "../views/signeR.vue"
import mylove from "../views/myLove.vue"

const routes = [
    {
        path: '/', 
        redirect: '/home'
    },
    {
        path: "/home",
        component: homeView
    },
    {
        path: "/ranking",
        component: () => import("../views/rankingList")
    },
    {
        path: "/musicList",
        component: musicList
    },
    {
        path: "/mv",
        component: mv
    },
    {
        path: "/signer",
        component: signer
    },
    {
        path: "/mylove",
        component: mylove
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
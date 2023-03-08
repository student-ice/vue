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
        name: "home",
        component: () => import("../views/homeView"),
        meta: {
            title: 'ice music'
        }
    },
    {
        path: "/phone",
        name: "phone",
        component: () => import("../components/layout/m_HomePage")
    },
    {
        path: "/ranking",
        name: "ranking",
        component: () => import("../views/rankingList")
    },
    {
        path: "/musicList",
        name: "musicList",
        component: () => import("../views/musicList")
    },
    {
        path: "/mv",
        name: "MV",
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

router.beforeEach((to, from, next) => {
    // console.log(to.path)
    if (to.path === '/') {
      if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        next({path: '/phone'})
      } else {
        next({path: '/home'})
      }
    }
   }
)
export default router;
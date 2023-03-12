import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import("../components/layout/HomePage"),
        rediret: '/home',
        meta: {
            title: 'ice music'
        },
        children: [
            {
                path: "home",
                name: "home",
                component: () => import("../views/homeView")
            },

            {
                path: "ranking",
                name: "ranking",
                component: () => import("../views/rankingList")
            },
            {
                path: "musicList",
                name: "musicList",
                component: () => import("../views/musicList")
            },
            {
                path: "mv",
                name: "MV",
                component: () => import("../views/mvView")
            },
            {
                path: "signer",
                component: () => import("../views/signerView")
            },
            {
                path: "favourite",
                component: () => import("../views/favouriteView")
            },
            {
                path: "musiclistdetail",
                name: "musiclistdetail",
                component: () => import("../views/musicListView")
            }
        ]

    },
    {
        path: "/phone",
        name: "phone",
        rediret: "/phone/home",
        component: () => import("../components/layout/m_HomePage"),
        children: [
            {
                path: "home",
                name: "home",
                component: () => import("../views/phone/m_homeView")
            }
        ]
    },
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
            next({ path: '/phone/home' })
        } else {
            next({path: '/home'})
        }
    }else  {
        next()
    }
}
)
export default router;
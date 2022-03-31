import { createRouter, createWebHashHistory } from "vue-router"
import Main from "@/pages/Main"
import PostPage from "@/pages/PostPage"
import About from "@/pages/About"
import PostIdPage from "@/pages/PostIdPage"
import PostPageCompositionApi from "@/pages/PostPageCompositionApi"
const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    },
]   

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router   
import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutUs from './components/AboutUs.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import post from './components/Post.vue'
Vue.use(VueRouter)
export const routes=[
    {
        path:"/",component:Home
    },
    {
        path:"/aboutus",component:AboutUs
    },
    {
        path:"/contact",component:Contact
    },
    {
        path:"/post:id",component:post
    },
]

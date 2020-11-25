import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: "/index",
    component: Home,
    children:[
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/My.vue')
      },{
        path: '/index',
        name: 'index',
        component: () => import('../views/Index.vue')
      }
    ]
  },

]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router

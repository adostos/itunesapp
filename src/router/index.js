import Vue from 'vue'
import VueRouter from 'vue-router'

//views
import Home from '../views/Home.vue'
import Tunes from '../views/Tunes.vue'
//import Songs from '../views/Songs.vue'
//import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tunes',
    name: 'Tunes',
    component: Tunes
  },
  /* {
    path: '/songs',
    name: 'Songs',
    component: Songs
  }, */
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

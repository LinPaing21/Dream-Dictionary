import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue';
import Alphabets from '../components/Alphabets.vue';
import SingleTitle from "../components/SingleTitle.vue";
import NotFound from '../components/NotFound.vue';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/alphabets',
      name: 'alphabets',
      component: Alphabets
    },
    {
      path: '/alphabets/:id',
      component: SingleTitle
    },
    {
      path: '*',
      component: NotFound 
    }
  ]
})

export default router

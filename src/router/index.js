import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import store from '../store'

import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Homepage from '../views/Homepage.vue'
// import { Store } from 'vuex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage,
    // meta: {
    //   requiresAuth: true
    // }
    beforeEach (to, from, next){
      if(store.state.idToken){
        next();
      }else{
        next('/signin')
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if (requiresAuth && !currentUser) next('signin')
//   else if (!requiresAuth && currentUser) next('homepage')
//   else next()
// })

export default router

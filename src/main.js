import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueFire from 'vuefire'
// import firebase from 'firebase/app'
// import 'firebase/firestore'
import store from './store'


Vue.config.productionTip = false


// firebase.initializeApp({
//   apiKey: "AIzaSyAizwKKXANWZp4Exv-LUkDr4ylAldB2Kvo",
//   authDomain: "myvuejs-blog.firebaseapp.com",
//   databaseURL: "https://myvuejs-blog.firebaseio.com",
//   projectId: "myvuejs-blog",
//   storageBucket: "myvuejs-blog.appspot.com",
//   messagingSenderId: "1083431136921",
//   appId: "1:1083431136921:web:894a33c406e52c82c71208",
//   measurementId: "G-SHHCQG81F0"
// });

// export const db = firebase.firestore()

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

// Vue.use(VueFire)
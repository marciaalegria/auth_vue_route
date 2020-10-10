import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDke7X3LhkZAYf5BI4jG9a6tr84ksAqT_g",
  authDomain: "vueauth-edb55.firebaseapp.com",
  databaseURL: "https://vueauth-edb55.firebaseio.com",
  projectId: "vueauth-edb55",
  storageBucket: "vueauth-edb55.appspot.com",
  messagingSenderId: "367114484948",
  appId: "1:367114484948:web:061dda1e950fcf3b6ccf41"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

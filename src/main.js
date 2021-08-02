import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import firebase from 'firebase/app'
import 'firebase/auth'

library.add(faCaretDown)
const firebaseConfig = {
  apiKey: 'AIzaSyB2fKkMv60-G7abR5r8St86p93poLGXG6Q',
  authDomain: 'aspire-fe-test.firebaseapp.com',
  projectId: 'aspire-fe-test',
  storageBucket: 'aspire-fe-test.appspot.com',
  messagingSenderId: '545208365970',
  appId: '1:545208365970:web:9fdd45b56112db70acc74b',
  measurementId: 'G-GPVEF34E67',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import myDebitCards from '@/views/my-debit-cards'
import loan from '@/views/loan'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'myDebitCards',
    component: myDebitCards,
  },
  {
    path: '/loan',
    name: 'loan',
    component: loan,
  },
]

const router = new VueRouter({
  routes,
})

export default router

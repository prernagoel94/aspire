/* eslint-disable no-undef */
import { createLocalVue, shallowMount } from '@vue/test-utils'
// import { expect } from 'chai'
import Links from '@/components/links'
import myDebitCards from '@/views/my-debit-cards'
import loan from '@/views/loan'
import VueRouter from 'vue-router'

describe('Links.vue', () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
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

  const wrapper = shallowMount(Links, { localVue, router })
  beforeEach(function () {})

  test('Should set router as myDebitCards by default', () => {
    expect(wrapper.vm.showRouter).toBe(routes[0].name)
  })
  test('Should add class activeRouter to myDebitCardsrouter', () => {
    expect(wrapper.find('.cards-link').classes()).toContain('activeRouter')
  })
})

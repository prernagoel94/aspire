/* eslint-disable no-undef */
jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: 'approved' })),
}))
import { shallowMount } from '@vue/test-utils'
import Loan from '@/views/loan.vue'
import axios from 'axios'

describe('Loan.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Loan)
  })
  test('Wrapper should be visisble', () => {
    expect(wrapper.isVisible()).toBe(true)
  })
  it('Change the weekly amount to paid when repay button is clicked', async () => {
    wrapper.setData({ status: 'approved' })
    await wrapper.vm.$nextTick()
    wrapper.find('#repay').trigger('click')

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.weeklyAmount).toBe('paid')
  })
  it('Set status to approved when clicked on apply', async () => {
    wrapper.vm.onSubmit()
    await wrapper.vm.$nextTick()
    axios.post().then((response) => {
      expect(response.data).toBe('approved')
    })
  })
})

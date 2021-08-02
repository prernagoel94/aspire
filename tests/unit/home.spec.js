/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  test('Wrapper should be visisble', () => {
    const wrapper = mount(Home)
    expect(wrapper.isVisible()).toBe(true)
  })
  test('isMobile computed property should return true when full width is less than or equal to 1203', () => {
    const wrapper = mount(Home)
    wrapper.setData({ fullWidth: 1022 })
    expect(wrapper.vm.isMobile).toBe(true)
  })
  test('isMobile computed property should return false when full width is greather than 1203', async () => {
    const wrapper = mount(Home)
    wrapper.setData({ fullWidth: 1024 })
    expect(wrapper.vm.isMobile).toBe(false)
  })
  test('set full width to screen width', async () => {
    jest.spyOn(screen, 'width', 'get').mockReturnValue(1000)
    const wrapper = mount(Home)
    expect(wrapper.vm.fullWidth).toBe(1000)
  })
})

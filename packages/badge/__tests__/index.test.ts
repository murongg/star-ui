import { mount } from '@vue/test-utils'
import mountTest from '../../../tests/share/mountTest'
import Badge from '../src/index'

describe("Badge Component", () => {
  mountTest(Badge)
  describe('test props', () => {
    it('prop: type test', () => {
      const wrapper = mount(Badge, {
        props: {
          value: 1000
        },
      })
      expect(wrapper.find('.star-badge__content').text()).toEqual("1000")
    })
    it('prop: shape test', async () => {
      const wrapper = mount(Badge, {
        props: {
          shape: 'horn',
          value: 1000
        }
      })
      expect(wrapper.find('.star-badge__content').classes()).toContain("star-badge--horn")
      await wrapper.setProps({ shape: 'circle' })
      expect(wrapper.find('.star-badge__content').classes()).toContain("star-badge--circle")
    })
    it('prop: shape/max numberType', async () => {
      const wrapper = mount(Badge, {
        props: {
          numberType: 'overflow',
          value: 1000,
          max: 999
        }
      })
      expect(wrapper.find('.star-badge__content').text()).toEqual("999+")
      await wrapper.setProps({ max: 99 })
      expect(wrapper.find('.star-badge__content').text()).toEqual("99+")
      await wrapper.setProps({ max: 0 })
      expect(wrapper.find('.star-badge__content').text()).toEqual("1000")
      await wrapper.setProps({ numberType: 'ellipsis', max: 99 })
      expect(wrapper.find('.star-badge__content').text()).toEqual("...")
      await wrapper.setProps({ numberType: 'limit' })
      expect(wrapper.find('.star-badge__content').text()).toEqual("1k")
      await wrapper.setProps({ value: 10000, numberType: 'limit' })
      expect(wrapper.find('.star-badge__content').text()).toEqual("1w")
    })
    it('prop: dot test', async () => {
      const wrapper = mount(Badge, {
        props: {
          dot: true,
          value: 1000
        }
      })
      expect(wrapper.find('.star-badge__content').classes()).toContain("star-badge--dot")
    })
  })
})
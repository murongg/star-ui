import mountTest from '../../../tests/share/mountTest'
import Col from '../src/index'
import { mount } from '@vue/test-utils'

describe('Col Component', () => {
  mountTest(Col)
  describe('test props', () => {
    it('prop: tag test', () => {
      const wrapper = mount(Col, {
        props: {
          tag: 'span',
        },
      })
      expect(wrapper.element.tagName.toLocaleLowerCase()).toBe('span')
    })
    it('prop: span test', () => {
      const wrapper = mount(Col, {
        props: {
          span: 10,
        },

      })
      expect(wrapper.classes()).toContain('star-col-col-10')
    })
    it('prop: offset test', () => {
      const wrapper = mount(Col, {
        props: {
          offset: 10,
        },

      })
      expect(wrapper.classes()).toContain('star-col-offset-10')
    })
  })
})

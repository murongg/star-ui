import { mount } from '@vue/test-utils'
import mountTest from '../../../tests/share/mountTest'
import Transition from '../src/index'

describe("Transition Component", () => {
  mountTest(Transition)
  describe('test props', () => {
    test('prop: duration test', () => {
      const wrapper = mount(Transition, {
        props: {
          duration: 500,
        },
      })
      expect(wrapper.find('.star-transition').attributes('style')).toContain('animation-duration: 500ms')
    })
    test('prop: modelValue test', () => {
      const wrapper = mount(Transition, {
        props: {
          modelValue: false,
        },
      })
      expect(wrapper.find('.star-transition').attributes('style')).toContain('display: none')
    })
  })
})

import { mount, shallowMount } from '@vue/test-utils'
import mountTest from '../../../tests/share/mountTest'
import Button from '../index'

describe('Button Component', () => {
  mountTest(Button)
  describe('test props', () => {
    test('prop: type test', () => {
      const wrapper = mount(Button, {
        props: {
          type: 'danger'
        }
      })
      expect(wrapper.classes()).toContain('star-button--danger')
    })

    test('prop: size test', () => {
      const wrapper = mount(Button, {
        props: {
          size: 'mini'
        }
      })
      expect(wrapper.find('.star-button--mini').exists()).toBeTruthy()
    })

    test('prop: shape test', () => {
      const wrapper = mount(Button, {
        props: {
          shape: 'round'
        }
      })
      expect(wrapper.classes()).toContain('star-button--round')
    })

    test('prop: icon test', () => {
      const wrapper = mount(Button, {
        props: {
          icon: 'heart',
          iconSize: '10px',
          iconColor: '#fff'
        }
      })
      expect(wrapper.find('.star-button__icon').exists()).toBeTruthy()
      expect(wrapper.find('.star-icon-heart').exists()).toBeTruthy()
      expect(wrapper.find('.star-button__icon').attributes('style')).toContain('color: rgb(255, 255, 255); font-size: 10px;')
    })

    test('prop: plain test', () => {
      const wrapper = mount(Button, {
        props: {
          plain: true
        }
      })
      expect(wrapper.classes()).toContain('star-button--plain')
    })

    test('prop: disabled test', async () => {
      const wrapper = mount(Button, {
        props: {
          disabled: true
        }
      })
      const handleClick = jest.fn();
      await wrapper.trigger('click');
      expect(handleClick).not.toBeCalled();
    })
    test('prop: loading test', async () => {
      const wrapper = mount(Button, {
        props: {
          loading: true,
          loadingText: "自定义加载",
          loadingSize: "10px"
        }
      })
      const handleClick = jest.fn();
      await wrapper.trigger('click');
      expect(handleClick).not.toBeCalled();
      expect(wrapper.text()).toEqual("自定义加载")
      expect(wrapper.find('.star-button--loading').attributes('style')).toContain("font-size: 10px")
    })


    test('prop: shadow test', async () => {
      const wrapper = mount(Button, {
        props: {
          shadow: true,
          shadowStyle: "10px 10px 10px #ccc"
        }
      })
      expect(wrapper.classes()).toContain('star-button--shadow')
      expect(wrapper.attributes('style')).toContain('box-shadow: 10px 10px 10px #ccc')
    })
  })
})


import { mount } from '@vue/test-utils'
import Grid from '../src/index'
import GridItem from '../../grid-item/src/index'
import mountTest from '../../../tests/share/mountTest'
import { defineComponent, h, nextTick, ref } from 'vue'
describe('Grid Component', () => {
  mountTest(Grid)
  describe('test props', () => {

    it('prop: cols test', () => {
      const wrapper = mount(Grid, {
        props: {
          cols: 10,
        },
      })
      expect(wrapper.attributes('style')).toContain('grid-template-columns: repeat(10, minmax(0px, 1fr))')
    })

    it('prop: xGap/yGap test', () => {
      const wrapper = mount(Grid, {
        props: {
          xGap: 10,
          yGap: 2,
        },

      })
      expect(wrapper.attributes('style')).toContain('gap: 2px 10px')
    })

    it('prop: border test', async () => {
      const yGap = ref(0)
      const app = defineComponent({
        render() {
          return h(Grid, {
            border: true,
            yGap: yGap.value,
          }, {
            default: () => {
              return h(GridItem)
            },
          })
        },
      })
      const wrapper = mount(app)
      expect(wrapper.find('.star-grid').classes()).toContain('star-hairline')
      expect(wrapper.find('.star-grid-item').classes()).toContain('star-hairline')
      yGap.value = 10
      await nextTick()
      expect(wrapper.find('.star-grid-item').classes()).toContain('star-hairline-all')
    })

    it('prop: center test', async () => {
      const app = defineComponent({
        render() {
          return h(Grid, {
            center: true,
          }, {
            default: () => {
              return h(GridItem)
            },
          })
        },
      })
      const wrapper = mount(app)
      expect(wrapper.find('.star-grid-item').classes()).toContain('star-grid-item--center')
    })
  })
})

import { mount } from '@vue/test-utils'
import GridItem from '../src/index'
import mountTest from '../../../tests/share/mountTest'
import { nextTick } from 'vue'

describe('GridItem Component', () => {
  mountTest(GridItem)
  describe('test props', () => {

    it('prop: span  test', async () => {

      const wrapper = mount(GridItem, {
        props: {
          span: 10,
        },
      })
      await nextTick()
      expect(wrapper.find('.star-grid-item').attributes('style')).toContain('grid-column: span 10 / span 10')
    })
    it('prop: offset test', async () => {

      const wrapper = mount(GridItem, {
        props: {
          offset: 10,
        },
      })
      await nextTick()
      expect(wrapper.find('.star-grid-item').attributes('style')).toContain('grid-column: span 11 / span 11')
    })
  })
})

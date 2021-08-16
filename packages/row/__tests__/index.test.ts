import mountTest from '../../../tests/share/mountTest'
import Row from '../src/index'
import Col from '../../col/src/index'
import { mount } from '@vue/test-utils'
import { nextTick, h, ref } from 'vue'
describe('Row Component', () => {
  mountTest(Row)
  describe('test props', () => {
    it('prop: tag test', () => {
      const wrapper = mount(Row, {
        props: {
          tag: 'span',
        },
      })
      expect(wrapper.element.tagName.toLocaleLowerCase()).toBe('span')
    })
    it('prop: gutter test', () => {
      const TestComponent = {
        template: `<star-row :gutter="20">
          <star-col ref="col"></star-col>
        </star-row>`,
        components: {
          'star-col': Col,
          'star-row': Row,
        },
      }
      const wrapper = mount(TestComponent)
      const col = wrapper.findComponent({ ref: 'col' }).element as HTMLElement
      expect(col.style.paddingLeft === '10px').toBe(true)
      expect(col.style.paddingRight === '10px').toBe(true)
    })
    it('prop: justify test', () => {
      const wrapper = mount(Row, {
        props: {
          justify: 'end',
        },

      })
      expect(wrapper.classes()).toContain('star-row--justify-end')
    })
    it('prop: align test', () => {
      const wrapper = mount(Row, {
        props: {
          align: 'top',
        },

      })
      expect(wrapper.classes()).toContain('star-row--align-top')
    })
  })
  it('change gutter value', async () => {
    const outer = ref(20)
    const App = {
      setup() {
        return () => {
          return h(Row, {
            gutter: outer.value,
          }, {
            default: () => {
              return h(Col, {
                span: 12,
                ref: 'col',
              })
            },
          })
        }
      },
    }

    const wrapper = mount(App)
    const col = wrapper.findComponent({ ref: 'col' }).element as HTMLElement
    expect(col.style.paddingLeft === '10px').toBe(true)
    expect(col.style.paddingRight === '10px').toBe(true)

    outer.value = 40 // change gutter value
    await nextTick()
    expect(col.style.paddingLeft === '20px').toBe(true)
    expect(col.style.paddingRight === '20px').toBe(true)
  })
})

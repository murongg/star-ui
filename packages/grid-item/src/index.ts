import { defineComponent, ComponentCustomProps, h, inject, computed, CSSProperties, toRefs, ref, nextTick } from 'vue'

export interface IGridItemProps extends ComponentCustomProps {
  offset: number
  span: number
}
const classPrefix = 'star-grid-item'

export default defineComponent({
  name: 'StarGridItem',
  props: {
    offset: {
      type: Number,
      default: 0,
    },
    span: {
      type: Number,
      default: 1,
    },
  },
  setup(props: IGridItemProps) {
    const { offset, span } = toRefs(props)
    const { center, yGap, border, cols, parent } = inject('star-grid', {
      center: {
        value: true,
      },
      yGap: {
        value: 0,
      },
      border: {
        value: true,
      },
      cols: {
        value: 3,
      },
      parent: {
        value: null,
      },
    })

    const parentDOM = computed<HTMLElement | null>(() => {
      return parent.value
    })

    const styles = ref<CSSProperties | null>(null)

    const setStyles = () => {
      styles.value = {
        gridColumn: `${`span ${span.value + offset.value}`
        } / span ${span.value + offset.value}`,
        marginLeft: offset.value
          ? `calc(((${parentDOM.value?.offsetWidth}px - ${yGap.value}px) / ${cols.value})*${offset.value})`
          : '',
      }
    }
    nextTick(() => {
      setStyles()
    })

    const classes = computed(() => {
      return [
        classPrefix,
        border.value ? yGap.value > 0 ? 'star-hairline-all' : 'star-hairline' : '',
        center.value ? `${classPrefix}--center` : '',
      ]
    })

    return {
      classes,
      styles,
    }
  },
  render() {
    return h('div', {
      class: this.classes,
      style: this.styles,
    }, this.$slots.default?.())
  },
})

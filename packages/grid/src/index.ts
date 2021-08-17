import { defineComponent, ComponentCustomProps, h, computed, toRefs, provide, CSSProperties, ref } from 'vue'

export interface IGridProps extends ComponentCustomProps {
  cols: number
  xGap: number
  yGap: number
  border: boolean
  center: boolean
}
const classPrefix = 'star-grid'

export default defineComponent({
  name: 'StarGrid',
  props: {
    cols: {
      type: Number,
      default: 3,
    },
    xGap: {
      type: Number,
      default: 0,
    },
    yGap: {
      type: Number,
      default: 0,
    },
    border: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: true,
    },
  },
  setup(props: IGridProps) {
    const { cols, xGap, yGap, border, center } = toRefs(props)
    const gridRef = ref<HTMLElement | null>(null)

    provide('star-grid', {
      cols,
      yGap,
      border,
      center,
      parent: gridRef,
    })
    const classes = computed(() => {
      return [classPrefix, border.value && xGap.value <= 0 ? 'star-hairline' : null]
    })
    const styles = computed<CSSProperties>(() => {
      return {
        gap: `${yGap.value}px ${xGap.value}px`,
        gridTemplateColumns: `repeat(${cols.value}, minmax(0px, 1fr))`,
      }
    })


    return {
      classes,
      styles,
      gridRef,
    }
  },
  render() {
    return h('div', {
      class: this.classes,
      style: this.styles,
      ref: 'gridRef',
    }, this.$slots.default?.())
  },
})

import { defineComponent, ComponentCustomProps, h, inject, computed, PropType, toRefs } from 'vue'

export type IColProps = ComponentCustomProps
const classPrefix = 'star-col'

export default defineComponent({
  name: 'StarCol',
  props: {
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const { span, offset } = toRefs(props)

    const { gutter } = inject('star-layout', { gutter: { value: 0 } })
    const styles = computed(() => {
      if (gutter && gutter.value) {
        return {
          paddingLeft: `${gutter.value / 2}px`,
          paddingRight: `${gutter.value / 2}px`,
        }
      }
      return null
    })

    const classes = computed(() => {
      return [
        classPrefix,
        `${classPrefix}-col-${span.value}`,
        `${classPrefix}-offset-${offset.value}`,
      ]
    })
    return {
      styles,
      classes,
    }
  },
  render() {
    return h(this.tag, {
      style: this.styles,
      class: this.classes,
    }, this.$slots.default?.())
  },
})

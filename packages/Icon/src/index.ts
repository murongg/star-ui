import { defineComponent, ComponentCustomProps, computed, toRefs, h } from 'vue'

export interface IIconProps extends ComponentCustomProps {
  name: string
  size: string | number
  color: string
}

export default defineComponent({
  name: 'StarIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: 20,
    },
    color: {
      type: String,
    },
  },
  setup(props) {
    const { name, size, color } = toRefs(props)
    const classes = computed(() => {
      return ['star-icon', `star-icon-${name.value}`]
    })
    const styles = computed(() => {
      return {
        fontSize: typeof size.value === 'number' ? `${size.value}px` : size.value,
        color: color.value,
      }
    })
    return {
      classes,
      styles,
    }
  },
  render() {
    return h('i', {
      class: this.classes,
      style: this.styles,
    })
  },
})

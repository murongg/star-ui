import { defineComponent, ComponentCustomProps, Transition, vShow, h, withDirectives, toRefs, watch, ref } from "vue";

const classPrefix = 'star-transition'

export interface ITransitionProps extends ComponentCustomProps {
  name: string,
  duration: string | number,
  modelValue: boolean
}

export default defineComponent({
  name: 'star-transition',
  props: {
    name: {
      type: String,
      default: 'fade'
    },
    duration: {
      type: [Number, String],
      default: 500
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modelValue, duration } = toRefs(props)

    watch(modelValue, () => {
      emit('update:modelValue', modelValue.value)
    })

    const animationDuration = typeof duration.value === "number" ? ref(`${duration.value}ms`) : duration
    return {
      animationDuration
    }
  },
  render() {
    return h(Transition, {
      name: `${classPrefix}-${this.name}`
    }, {
      default: () => withDirectives(
        h('div', {
          class: `${classPrefix}`,
          style: `animation-duration: ${this.animationDuration};`
        }, [this.$slots.default?.()]),
        [[vShow, this.modelValue]]
      )
    })
  }
})
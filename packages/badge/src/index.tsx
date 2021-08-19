import { defineComponent, ComponentCustomProps, PropType, computed, CSSProperties, toRefs, ref, watch } from 'vue'
import { isNumeric } from '../../utils'
const classPrefix = 'star-badge'
export type IBadgeNumberType = PropType<'overflow' | 'limit' | 'ellipsis'>
export type IBadgeNumberShape = PropType<'circle' | 'horn'>
export interface IBadgeProps extends ComponentCustomProps {
  value: string | number
  color: string
  numberType: IBadgeNumberType
  max: number
  dot: boolean
  shape: IBadgeNumberShape
}

function getRealValue(value: number, max: number, type: string): string {
  const isMax = value > max
  let result = ''
  switch (type) {
    case 'overflow':
      result = isMax ? `${max}+` : value.toString()
      break
    case 'ellipsis':
      result = isMax ? `...` : value.toString()
      break
    case 'limit':
      result = value > 999 ? value >= 9999 ? Math.floor(value / 10000 * 100) / 100 + 'w' : Math.floor(value / 1000 * 100) / 100 + 'k' : value.toString()
      break
    default:
      result = value.toString()
      break
  }

  return result
}

export default defineComponent({
  name: 'StarBadge',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    color: String,
    shape: {
      type: String as IBadgeNumberShape,
      default: 'circle',
      validator: (val: string) => {
        return [
          'circle',
          'horn',
        ].includes(val)
      },
    },
    numberType: {
      type: String as IBadgeNumberType,
      default: 'overflow',
      validator: (val: string) => {
        return [
          'overflow',
          'limit',
          'ellipsis',
        ].includes(val)
      },
    },
    max: {
      type: Number,
      default: 0,
    },
    dot: Boolean,
  },
  setup(props, { slots }) {
    const { color, dot, value, max, numberType, shape } = toRefs(props)
    const classes = computed(() => {
      return [classPrefix]
    })
    const contentClasses = computed(() => {
      return [
        `${classPrefix}__content`,
        slots.default?.() ? `${classPrefix}--fixed` : '',
        dot.value ? `${classPrefix}--dot` : `${classPrefix}--${shape.value}`,
      ]
    })
    const contentStyle = computed<CSSProperties>(() => {
      return {
        backgroundColor: color.value,
      }
    })
    const contentValue = ref<string | number | null>(null)
    const setContentValue = () => {
      if (isNumeric(value.value) && (max.value > 0 || numberType.value === 'limit')) {
        contentValue.value = getRealValue(+value.value, max.value, numberType.value)
      } else {
        contentValue.value = value.value
      }
    }
    setContentValue()

    watch([numberType, value, max], () => {
      setContentValue()
    })

    return {
      classes,
      contentClasses,
      contentStyle,
      contentValue,
    }
  },
  render() {
    const content = () => {
      if (this.$slots.content?.()) {
        return <div class={this.contentClasses} style={this.contentStyle}>
          {this.$slots.content?.()}
        </div>
      }
      if (this.dot || this.contentValue) {
        return <div class={this.contentClasses} style={this.contentStyle}>
          {this.dot || this.contentValue}
        </div>
      }
    }
    return (
      <div class={this.classes}>
        {this.$slots.default?.()}
        {content()}
      </div>
    )
  },
})

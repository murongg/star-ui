import { computed, defineComponent, PropType, toRefs, ComponentCustomProps } from 'vue'

const classPrefix = 'star-button'
export type IButtonType = PropType<'primary' | 'success' | 'danger' | 'warning' | 'info' | 'default'>;
export type IButtonSize = PropType<'mini' | 'small' | 'normal' | 'large' | 'long'>;
export type IButtonShape = PropType<'square' | 'round' | 'semicircle' | 'circle'>;

export interface IButtonProps extends ComponentCustomProps {
  type: IButtonType
  size: IButtonSize
  shape: IButtonShape
  icon: string
  iconSize: string | number
  iconColor: string
  plain: boolean
  disabled: boolean
  loading: boolean
  loadingSize: string | number
  loadingText: string
  shadow: boolean
  shadowStyle: string
  color: string
  textColor: string
}
export default defineComponent({
  name: 'StarButton',
  props: {
    type: {
      type: String as IButtonType,
      default: 'default',
      validator: (val: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
        ].includes(val)
      },
    },
    size: {
      type: String as IButtonSize,
      default: 'normal',
      validator: (val: string) => {
        return [
          'mini',
          'small',
          'normal',
          'large',
          'long',
        ].includes(val)
      },
    },
    shape: {
      type: String as IButtonShape,
      default: 'round',
      validator: (val: string) => {
        return [
          'square',
          'round',
          'semicircle',
          'circle',
        ].includes(val)
      },
    },
    icon: {
      type: String,
    },
    iconSize: {
      type: [String, Number],
    },
    iconColor: {
      type: String,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingSize: {
      type: [String, Number],
    },
    loadingText: {
      type: String,
      default: '加载中...',
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    shadowStyle: {
      type: String,
    },
    color: {
      type: String,
    },
    textColor: {
      type: String,
    },
  },
  setup(props) {
    const { type, size, shape, textColor, plain, shadow, color, shadowStyle } = toRefs(props)
    const classes = computed(() => {
      return [
        `${classPrefix}`,
        `${classPrefix}--${type.value}`,
        `${classPrefix}--${size.value}`,
        `${classPrefix}--${shape.value}`,
        plain.value ? `${classPrefix}--plain` : '',
        shadow.value ? `${classPrefix}--shadow` : '',
      ]
    })
    const styles = computed(() => {
      return {
        color: textColor.value,
        backgroundColor: color.value,
        boxShadow: shadowStyle.value,
      }
    })
    return {
      classes,
      styles,
    }
  },
  render() {
    const iconJsx = (
      this.icon ? <i
        class={[`${classPrefix}__icon`, 'star-icon', `star-icon-${this.icon}`]}
        style={{
          color: this.iconColor,
          fontSize: typeof this.iconSize === 'number' ? `${this.iconSize}px` : this.iconSize,
          marginRight: this.shape !== 'circle' && this.$slots.default?.() ? '5px' : '',
        }}
      ></i> : null
    )
    const loadingJsx = (
      <>
        <i
          class={[`${classPrefix}__icon`, `${classPrefix}--loading`, 'star-icon', `star-icon-loading`]}
          style={{
            fontSize: typeof this.loadingSize === 'number' ? `${this.loadingSize}px` : this.loadingSize,
            marginRight: this.shape !== 'circle' && this.$slots.default?.() ? '5px' : '',
          }}
        ></i>
        {this.shape != 'circle' ? this.loadingText : null}
      </>
    )

    const buttonContentJsx = (
      <>
        {iconJsx}
        {this.shape != 'circle' ? this.$slots.default?.() : null}
      </>
    )
    return (
      <button class={this.classes} style={this.styles} disabled={this.disabled || this.loading}>
        {this.loading ? loadingJsx : buttonContentJsx}
      </button>
    )
  },
})

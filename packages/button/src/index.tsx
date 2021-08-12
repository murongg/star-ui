import { computed, defineComponent, PropType, toRefs, ComponentCustomProps, SetupContext } from 'vue'

const classPrefix = 'star-button'
export type IButtonType = PropType<'primary' | 'success' | 'danger' | 'warning' | 'info' | 'default'>;
export type IButtonSize = PropType<'mini' | 'small' | 'normal' | 'large' | 'long'>;
export type IButtonShape = PropType<'square' | 'round' | 'semicircle' | 'circle'>;

export interface IButtonProps extends ComponentCustomProps {
  type: IButtonType
  size: IButtonSize
  shape: IButtonShape
  plain: boolean
  disabled: boolean
  shadow: boolean
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
  setup(props, ctx: SetupContext) {
    const { type, size, shape, textColor, plain, disabled, shadow, icon, iconColor, iconSize, loading, loadingSize, loadingText, color, shadowStyle } = toRefs(props)
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
    const iconJsx = () => {
      return (
        icon.value ? <i
          class={[`${classPrefix}__icon`, 'star-icon', `star-icon-${icon.value}`]}
          style={{
            color: iconColor.value,
            fontSize: typeof iconSize.value === 'number' ? `${iconSize.value}px` : iconSize.value,
            marginRight: shape.value !== 'circle' && ctx.slots.default?.() ? '5px' : '',
          }}
        ></i> : null
      )
    }
    const loadingJsx = () => {
      return (
        <>
          <i
            class={[`${classPrefix}__icon`, `${classPrefix}--loading`, 'star-icon', `star-icon-loading`]}
            style={{
              fontSize: typeof loadingSize.value === 'number' ? `${loadingSize.value}px` : loadingSize.value,
              marginRight: shape.value !== 'circle' && ctx.slots.default?.() ? '5px' : '',
            }}
          ></i>
          {shape.value != 'circle' ? loadingText.value : null}
        </>
      )
    }

    const buttonContentJsx = () => {
      return (
        <>
          {iconJsx()}
          {shape.value != 'circle' ? ctx.slots.default?.() : null}
        </>
      )
    }
    return () => {
      return (
        <button class={classes.value} style={styles.value} disabled={disabled.value || loading.value}>
          {loading.value ? loadingJsx() : buttonContentJsx()}
        </button>
      )
    }
  },
})

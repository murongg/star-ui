import { defineComponent, ComponentCustomProps, computed, toRefs } from "vue";

export interface IIconProps extends ComponentCustomProps {
  name: string
  size: string | number
  color: string
}

export default defineComponent({
  name: 'star-icon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: 20
    },
    color: {
      type: String
    }
  },
  setup(props) {
    const { name, size, color } = toRefs(props)
    const classes = computed(() => {
      return ['star-icon', `star-icon-${name.value}`]
    })
    const styles = computed(() => {
      return {
        fontSize: typeof size.value === 'number' ? `${size.value}px` : size.value,
        color: color.value
      }
    })
    return () => {
      return (
        <i class={classes.value} style={styles.value}></i>
      )
    }
  }
})
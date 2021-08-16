import { defineComponent, ComponentCustomProps, computed, h, provide, toRefs, PropType } from 'vue'
export type IRowJustify = PropType<'start' | 'center' | 'end' | 'space-between' | 'space-around'>;
export type IRowAlign = PropType<'top' | 'middle' | 'end'>;

export interface IRowProps extends ComponentCustomProps {
  tag: keyof HTMLElementTagNameMap
  gutter: number
  justify: IRowJustify
  align: IRowAlign
}

const classPrefix = 'star-row'
export default defineComponent({
  name: 'StarRow',
  props: {
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String as IRowJustify,
      default: 'start',
      validator: (val: string) => {
        return [
          'start',
          'center',
          'end',
          'space-between',
          'space-around',
        ].includes(val)
      },
    },
    align: {
      type: String as IRowAlign,
      default: 'top',
      validator: (val: string) => {
        return [
          'top',
          'middle',
          'end',
        ].includes(val)
      },
    },
  },
  setup(props) {
    const { gutter, justify, align } = toRefs(props)
    provide('star-layout', {
      gutter,
    })

    const classes = computed(() => {
      return [
        classPrefix,
        `${classPrefix}--justify-${justify.value}`,
        `${classPrefix}--align-${align.value}`,
      ]
    })

    return {
      classes,
    }

  },
  render() {
    return h(this.tag, {
      class: this.classes,
    }, this.$slots.default?.())
  },
})

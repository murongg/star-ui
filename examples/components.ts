export interface ComponentStruct {
  title: string
  link?: string
}

export interface Component {
  title: string
  type: string
  children: ComponentStruct[]
}

export const components: Component[] = [
  {
    title: '基础组件',
    type: 'base',
    children: [
      {
        title: 'Button 按钮',
        link: 'button',
      },
      {
        title: 'Icon 图标',
        link: 'icon',
      },
      {
        title: 'Transition 过渡',
        link: 'transition',
      },
    ],
  },
  {
    title: '布局组件',
    type: 'layout',
    children: [
      {
        title: 'Layout 布局',
        link: 'layout',
      },
    ],
  },
]


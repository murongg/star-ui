const path = require('path')
module.exports = {
  lang: 'zh-CN',
  title: 'Star UI',
  description: '这是我的第一个 VuePress 站点',

  themeConfig: {
    navbar: [
      {
        text: '组件',
        link: '/components/',
      },
    ],
    sidebar: {
      '/components/': [
        {
          text: '开发指南',
          link: '/foo/',
          children: [
            {
              text: '介绍',
              link: '/components/',
            },
            {
              text: '快速上手',
              link: '/components/quickstart',
            },
          ],
        }, {
          text: '基础组件',
          link: '/components/base/button',
          children: [
            {
              text: 'Button 按钮',
              link: '/components/base/button',
            },
            {
              text: 'Icon 图标',
              link: '/components/base/icon',
            },
            {
              text: 'Transition 过渡',
              link: '/components/base/transition',
            },
          ],
        }, {
          text: '布局组件',
          link: '/components/layout/layout',
          children: [
            {
              text: 'Layout 布局',
              link: '/components/layout/layout',
            },
            {
              text: 'Grid 宫格',
              link: '/components/layout/grid',
            },
          ],
        }
      ]
    }
  },

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],

}

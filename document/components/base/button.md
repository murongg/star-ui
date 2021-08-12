---
lang: zh-CN
title: Button 按钮
description: Button 按钮
---
# Button 按钮

<card>

### 介绍
常用的操作按钮。
</card>

<card>

### 引入
```js
import { createApp } from 'vue'
import { Button } from 'star-ui';
import App from './App.vue';

createApp(App).use(Button)
```
</card>

## 代码演示

<card>

### 按钮类型

按钮支持 `default`、`primary`、`error`、`warning`、`danger` 五种类型，默认为 `default`。


```html
<star-button>默认按钮</star-button>
<star-button type="primary">主要按钮</star-button>
<star-button type="danger">错误按钮</star-button>
<star-button type="success">成功按钮</star-button>
<star-button type="warning">警告按钮</star-button>
<star-button type="info">信息按钮</star-button>
```
</card>


<card>

### 按钮尺寸

按钮支持 `mini`、`small`、`normal`, `large` 四种大小，默认为 `normal`。


```html
<star-button size="mini">迷你按钮</star-button>
<star-button size="small">小型按钮</star-button>
<star-button size="normal">普通按钮</star-button>
<star-button size="large">大号按钮</star-button>
```
</card>

<card>

### 按钮形状

按钮支持 `square`、`round`、`semicircle`、`circle` 四种形状，默认为 `round`。  
`circle` 只支持图标按钮。

```html
<star-button shape="square">方形按钮</star-button>
<star-button shape="round">圆弧按钮</star-button>
<star-button shape="semicircle">半圆按钮</star-button>
<star-button shape="circle"></star-button>
```
</card>

<card>

### 镂空按钮

设置 `plain` 属性为 `true` 为镂空按钮，默认值为 `false`。

```html
<star-button plain>镂空按钮</star-button>
```
</card>

<card>

### 禁用按钮

设置 `disabled` 属性为 `true` 为禁用按钮，默认值为 `false`。

```html
<star-button disabled>禁用按钮</star-button>
```
</card>

<card>

### 加载按钮

设置 `loading` 属性为 `true` 为按钮加载状态，默认值为 `false`。  
设置 `loading-text` 属性可修改加载文本，默认值为 `加载中...`。  
设置 `loading-size` 属性可修改加载图标大小，默认值为 `14px`。  

```html
<star-button loading></star-button>
```
</card>

<card>

### 图标按钮

通过 `icon` 属性设置按钮图标，支持 `Icon` 组件里的所有图标。  
设置 `icon-size` 和 `icon-color` 属性可更改图标大小和图标颜色。

```html
<star-button type="primary" icon="heart">默认按钮</star-button>
<star-button shape="circle" icon="heart" type="primary"></star-button>
<star-button icon="heart" icon-size="30px" icon-color="#f39c12" type="primary">自定义按钮</star-button>
```
</card>

<card>

### 按钮阴影

设置 `shadow` 属性为 `true` 按钮显示阴影，默认值为 `false`。  
通过 `shadow-style` 属性设置阴影样式。

```html
<star-button shadow>按钮阴影</star-button>
<star-button shadow shadow-style="10px 10px 10px #ccc" type="primary">自定义按钮阴影</star-button>
```
</card>

<card>

### 自定义颜色

设置 `color` 属性设置按钮颜色。  
设置 `text-color` 属性设置按钮文字颜色。

```html
<star-button color="#867a49" text-color="#faf6e6">自定义颜色</star-button>
```
</card>

## API

<card>

### Props

| 参数         | 说明         | 类型           | 可选值                                                       | 默认值    |
| ------------ | ------------ | -------------- | ------------------------------------------------------------ | --------- |
| type         | 按钮类型     | String         | `default`、`primary`、`success`、`danger`、`warning`、`info` | default   |
| size         | 按钮尺寸     | String         | `mini`、`small`、`normal`, `large`                           | normal    |
| shape        | 按钮形状     | String         | `square`、`round`、`semicircle`、`circle`                    | round     |
| plain        | 是否镂空     | Boolean        |                                                              | false     |
| disabled     | 是否禁用     | Boolean        |                                                              | false     |
| loading      | 是否加载     | Boolean        |                                                              | false     |
| loading-text | 加载文字     | String         |                                                              | 加载中... |
| loading-size | 加载图标大小 | String、Number |                                                              | false     |
| icon         | 图标名称     | String         | `Icon`  组件下所有图标                                       |           |
| icon-size    | 图标大小     | String、Number |                                                              | 10px      |
| icon-color   | 图标颜色     | String         |                                                              |           |
| shadow       | 是否显示阴影 | Boolean        |                                                              | false     |
| shadow-style | 阴影样式     | String         |                                                              |           |
| color        | 按钮颜色     | String         |                                                              |           |
| text-color   | 按钮文字颜色 | String         |                                                              |           |

</card>


<card>

### Events

| 事件名     | 说明                                     | 回调参数          |
| ---------- | ---------------------------------------- | ----------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | event: Event      |
| touchstart | 开始触摸按钮时触发                       | event: TouchEvent |

</card>

<card>

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 按钮内容       |
| icon    | 自定义图标     |
| loading | 自定义加载图标 |

</card>

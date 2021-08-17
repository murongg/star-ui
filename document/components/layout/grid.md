---
lang: zh-CN
title: Grid 宫格
description: Grid 宫格
---
# Grid 宫格


<card>

### 介绍
基于 CSS Grid 的宫格组件
</card>

<card>

### 引入
```js
import { createApp } from 'vue'
import { Grid, GridItem } from 'star-ui';
import App from './App.vue';

createApp(App).use(Grid).use(GridItem)
```
</card>


## 代码演示

以下 `class` 为 `block` 的 css 样式均为以下内容：

::: tip 代码详情
```css
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  color: #666;
  background: #fff;
}
```
:::

<card>


### 基本使用

通过设置 `Grid` 组件 `cols` 属性来确定宫格所占列数，默认值为 `3`。


```html
<star-grid :cols="3">
  <star-grid-item>
    <div class="block">
      <star-icon name="delete"></star-icon>
      图标
    </div>
  </star-grid-item>
 ...
</star-grid>
```

</card>


<card>


### 宫格边框

通过设置 `Grid` 组件 `border` 属性开启宫格边框，默认值为 `false`。

```html
<star-grid border>
  <star-grid-item>
    <div class="block">
      <star-icon name="delete"></star-icon>
      图标
    </div>
  </star-grid-item>
  ...
</star-grid>
```
</card>

<card>

### 宫格间隔

通过设置 `Grid` 组件 `x-gap`、`y-gap` 属性修改宫格间隔，两者默认值均为 `0`。  
- `x-gap`：横向间隔槽
- `y-gap`：纵向间隔槽

```html
<star-grid :x-gap="10" :y-gap="10">
  <star-grid-item>
    <div class="block">
      <star-icon name="delete"></star-icon>
      图标
    </div>
  </star-grid-item>
  ...
</star-grid>
```
</card>


<card>

### 宫格偏移

通过设置 `GridItem` 组件 `offset` 属性设置宫格向左偏移，默认值为 `0`。  


```html
<star-grid :cols="5">
  <star-grid-item :offset="1">
    <div class="block">
      <star-icon name="delete"></star-icon>
      图标
    </div>
  </star-grid-item>
  <star-grid-item :offset="1">
    <div class="block">
      <star-icon name="delete"></star-icon>
      图标
    </div>
  </star-grid-item>
</star-grid>
```
</card>


<card>

### 宫格所占列数

通过设置 `GridItem` 组件 `span` 属性设置宫格所占列数，默认值为 `1`。  


```html
<star-grid :cols="5">
  <star-grid-item :span="2">
    <div class="block">
      <star-icon name="delete"></star-icon>
      图标
    </div>
  </star-grid-item>
  <star-grid-item>
    <div class="block">
      <star-icon name="delete"></star-icon>
      图标
    </div>
  </star-grid-item>
</star-grid>
```
</card>




## API

<card>

### Grid Props

| 参数   | 说明                        | 类型    | 可选值 | 默认值 |
| ------ | --------------------------- | ------- | ------ | ------ |
| cols   | 每行显示的宫格数目          | Number  |        | 3      |
| x-gap  | 横向间隔槽，默认单位为 `px` | Number  |        | 0      |
| y-gap  | 纵向间隔槽，默认单位为 `px` | Number  |        | 0      |
| border | 是否显示所有的边框          | Boolean |        | false  |
| center | 是否将格子内容居中显示      | Boolean |        | true   |

</card>

<card>

### Grid Item Props

| 参数   | 说明               | 类型   | 可选值 | 默认值 |
| ------ | ------------------ | ------ | ------ | ------ |
| span   | 宫格所占格数       | Number |        | 1      |
| offset | 宫格左侧的间隔格数 | Number |        | 0      |

</card>


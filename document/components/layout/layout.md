---
lang: zh-CN
title: Layout 布局
description: Layout 布局
---
# Layout 布局


<card>

### 介绍
通过 24 分栏，迅速创建布局。
</card>

<card>

### 引入
```js
import { createApp } from 'vue'
import { Row, Col } from 'star-ui';
import App from './App.vue';

createApp(App).use(Row).use(Col)
```
</card>

## 代码演示
<card>

### 基本使用


`Layout` 组件分为 24 栅格，设置 `Col` 组件 `span` 属性设置栅格数，范围为 1～24。。


```html
<star-row><star-col :span="24"><div class="col">span: 24</div></star-col></star-row>
<star-row>
  <star-col :span="8"><div class="col">span: 8</div></star-col>
  <star-col :span="8"><div class="col light">span: 8</div></star-col>
  <star-col :span="8"><div class="col">span: 8</div></star-col>
</star-row>
<star-row>
  <star-col :span="6"><div class="col">span: 6</div></star-col>
  <star-col :span="6"><div class="col light">span: 6</div></star-col>
  <star-col :span="6"><div class="col">span: 6</div></star-col>
  <star-col :span="6"><div class="col light">span: 6</div></star-col>
</star-row>
```
</card>

<card>

### 栅格间隔

设置 `Row` 组件 `gutter` 属性设置栅格间隔，单位为 `px`。


```html
<star-row :gutter="10">
  <star-col :span="8"><div class="col">span: 8</div></star-col>
  <star-col :span="8"><div class="col light">span: 8</div></star-col>
  <star-col :span="8"><div class="col">span: 8</div></star-col>
</star-row>
```
</card>

<card>

### 栅格偏移

设置 `Col` 组件 `offset` 属性设置栅格偏移，范围为 1～24。


```html
<star-row>
  <star-col :span="8"><div class="col">span: 8</div></star-col>
  <star-col :span="10" :offset="4"><div class="col">span: 10 offset: 4</div></star-col>
</star-row>
<star-row>
  <star-col :span="10" :offset="4"><div class="col">span: 10 offset: 4</div></star-col>
  <star-col :span="6"><div class="col">span: 6</div></star-col>
</star-row>
```
</card>

<card>

### 对齐方式

设置 `Row` 组件 `justify`、`align` 属性设置对齐方式。  
`justify` 属性可选值为 `start`、`end`、`center`、`space-between`、`space-around`。  
`align` 属性可选值为 `top`、`bottom`、`middle`。


```html
<star-row justify="center">
  <star-col :span="6"><div class="col">span: 6</div></star-col>
  <star-col :span="6"><div class="col light">span: 6</div></star-col>
  <star-col :span="6"><div class="col">span: 6</div></star-col>
</star-row>
<star-row justify="end">
  <star-col :span="6"><div class="col">span: 6</div></star-col>
  <star-col :span="6"><div class="col light">span: 6</div></star-col>
  <star-col :span="6"><div class="col">span: 6</div></star-col>
</star-row>
<star-row justify="space-between">
  <star-col :span="6"><div class="col">span: 6</div></star-col>
  <star-col :span="6"><div class="col light">span: 6</div></star-col>
  <star-col :span="6"><div class="col">span: 6</div></star-col>
</star-row>
<star-row justify="space-around">
  <star-col :span="6"><div class="col">span: 6</div></star-col>
  <star-col :span="6"><div class="col light">span: 6</div></star-col>
  <star-col :span="6"><div class="col">span: 6</div></star-col>
</star-row>
```
</card>


## API

<card>

### Row Props

| 参数    | 说明                      | 类型   | 可选值                                                    | 默认值 |
| ------- | ------------------------- | ------ | --------------------------------------------------------- | ------ |
| gutter  | 栅格间隔，单位为 `px`     | Number |                                                           |        |
| justify | flex 布局下的水平排列方式 | String | `start`、`end`、`center`、`space-between`、`space-around` |        |
| align   | flex 布局下的垂直排列方式 | String | `top`、`bottom`、`middle`                                 |        |
| tag     | 自定义元素标签            | String |                                                           | div    |


</card>

<card>

### Col Props

| 参数   | 说明               | 类型   | 可选值 | 默认值 |
| ------ | ------------------ | ------ | ------ | ------ |
| span   | 栅格占据的列数     | Number | 1~24   | 24     |
| offset | 栅格左侧的间隔格数 | Number | 1~24   | 0      |
| tag    | 自定义元素标签     | String |        | div    |

</card>



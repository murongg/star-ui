---
lang: zh-CN
title: Icon 图标
description: Icon 图标
---
# Icon 图标


<card>

### 介绍
常用的图标集合。
</card>

<card>

### 引入
```js
import { createApp } from 'vue'
import { Icon } from 'star-ui';
import App from './App.vue';

createApp(App).use(Icon)
```
</card>

## 代码演示

<card>

### 图标类型

通过设置 `name` 属性修改图标类型。

:::warning
`name` 为必传属性！！！
:::

```html
<star-icon name="heart"></star-icon>
```
</card>


<card>

### 图标大小

通过设置 `size` 属性修改图标大小。

```html
<star-icon name="heart" :size="30"></star-icon>
```
</card>


<card>

### 图标颜色

通过设置 `color` 属性修改图标颜色。

```html
<star-icon name="heart" color="#faf6e6"></star-icon>
```
</card>


## API

<card>

### Props

| 参数  | 说明     | 类型           | 可选值 | 默认值 |
| ----- | -------- | -------------- | ------ | ------ |
| name  | 图标类型 | String         |        |        |
| size  | 图标尺寸 | String、Number |        | 30     |
| color | 图标形状 | String         |        |        |


</card>



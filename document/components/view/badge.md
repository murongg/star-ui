---
lang: zh-CN
title: Badge 徽标
description: Badge 徽标
---
# Badge 徽标


<card>

### 介绍
出现在按钮、图标旁的数字或文字标记。
</card>

<card>

### 引入
```js
import { createApp } from 'vue'
import { Badge } from 'star-ui';
import App from './App.vue';

createApp(App).use(Badge)
```
</card>


## 代码演示

以下 `class` 为 `demo-content` 的 css 样式均为以下内容：

::: tip 代码详情
```css
.demo-content {
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 4px;
}
```
:::
<card>

### 基本使用

通过设置 `value` 属性设置徽标内容，该属性支持 `String`、`Number` 两种类型。

```html
<star-badge :value="123" class="demo-badge">
  <div class="demo-content"></div>
</star-badge>
<star-badge :value="123" :max="99" class="demo-badge">
  <div class="demo-content"></div>
</star-badge>
<star-badge value="Max" class="demo-badge">
  <div class="demo-content"></div>
</star-badge>
<star-badge dot class="demo-badge">
  <div class="demo-content"></div>
</star-badge>
```
</card>

<card>

### 徽标形状

通过设置 `shape` 属性设置徽标形状，该属性可选值为 `circle` `horn` ，默认为 `circle`。

```html
<star-badge :value="123" class="demo-badge">
  <div class="demo-content"></div>
</star-badge>
<star-badge :value="123" shape="horn" class="demo-badge">
  <div class="demo-content"></div>
</star-badge>
```
</card>

<card>

### 数字显示方式

通过设置 `number-type` 属性设置数字显示方式，该属性可选值为 `overflow` `ellipsis` `limit` ，默认为 `overflow`。

- `overflow`：超过 `max` 会显示为 `${max}+` 。通过 `max` 属性修改数字最大值，`max` 默认值为0。
- `ellipsis`：超过 `max` 会显示为 `...` 。通过 `max` 属性修改数字最大值，`max` 默认值为0。
- `limit`：数字大于 1000 显示为 `${value/1000}k`，大于 10000 显示为 `${value/10000}w`。

```html
<star-badge :value="123" class="demo-badge">
  <div class="demo-content"></div>
</star-badge>
<star-badge :value="123" shape="horn" class="demo-badge">
  <div class="demo-content"></div>
</star-badge>
```
</card>

<card>

### 点状徽标

通过设置 `dot` 属性设置点状徽标，默认为 `false`。

```html
<star-badge :value="123" class="demo-badge" dot>
  <div class="demo-content"></div>
</star-badge>
```
</card>

<card>

### 徽标颜色

通过设置 `color` 属性设置点状徽标，默认为 `#ee0a24`。

```html
<star-badge :value="123" :max="99" color="#0999e6" class="demo-badge">
  <div class="demo-content"></div>
</star-badge>
```
</card>

<card>

### 自定义徽标内容

通过 `content` 插槽可以自定义徽标的内容。

```html
<star-badge :value="123" :max="99" class="demo-badge">
  <div class="demo-content"></div>
  <template #content> 
    <star-icon name="eye" size="20"></star-icon> 
  </template>
</star-badge>
```
</card>
<card>

### 独立展示

当 `Badge` 没有子元素时，会作为一个独立的元素进行展示。

```html
<star-badge :value="123" :max="99" class="demo-badge"> </star-badge>
<star-badge :value="10023" number-type="limit" class="demo-badge"> </star-badge>
```

</card>

## API

<card>

### Badge Props

| 参数        | 说明                                                  | 类型           | 可选值                  | 默认值   |
| ----------- | ----------------------------------------------------- | -------------- | ----------------------- | -------- |
| value       | 徽标内容                                              | String、Number |                         | -        |
| color       | 徽标背景颜色                                          | String         |                         | #ee0a24  |
| shape       | 徽标形状                                              | String         | circle/horn             | -        |
| number-type | 数字的显示方式                                        | String         | overflow/limit/ellipsis | overflow |
| max         | 最大值，超过最大值会显示 {max}+，仅当内容为数字时有效 | Number         |                         | -        |
| dot         | 是否为红点徽标                                        | String         | Boolean                 | false    |

</card>



<card>

### Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 徽标包裹的子元素 |
| content | 自定义徽标内容   |

</card>


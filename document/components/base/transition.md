---
lang: zh-CN
title: Transition 过渡
description: Transition 过渡
---
# Transition 过渡

<card>

### 介绍
常用的过渡动画。  
此组件引入了 `animation.css` 的常用动画
</card>

<card>

### 引入
```js
import { createApp } from 'vue'
import { Transition } from 'star-ui';
import App from './App.vue';

createApp(App).use(Transition)
```
</card>

## 代码演示
<card>

### 基础使用
通过设置 `name` 属性修改动画类型。

```vue
<template>
  <star-button size="large" shape="semicircle" @click="handleClickShow">切换显示/隐藏</star-button>
  <star-transition name="fade" v-model="show">
    <div class="block"></div>
  </star-transition>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    handleClickShow() {
      this.show = !this.show;
    },
  },
};
</script>
```

### 动画时长

通过设置 `duration` 属性修改动画时长，单位 `ms`。
```vue
<star-transition name="fade" :duration="500">
  <div class="block" v-show="show"></div>
</star-transition>
```
</card>


## API

<card>

### Props

| 参数                  | 说明          | 类型           | 可选值 | 默认值 |
| --------------------- | ------------- | -------------- | ------ | ------ |
| model-value / v-model | 动画显示/隐藏 | Boolean        |        | false  |
| name                  | 动画类型      | String         |        | fade   |
| duration              | 动画时长      | String、Number |        | 500    |


</card>




## 动画列表

<card>

### Back

| 名称       | 说明       |
| ---------- | ---------- |
| back-down  | 从下方退出 |
| back-up    | 从上方退出 |
| back-left  | 从左侧退出 |
| back-right | 从右侧退出 |

</card>


<card>

### Fading

| 名称       | 说明           |
| ---------- | -------------- |
| fade       | 淡入淡出       |
| fade-down  | 从下方淡入淡出 |
| fade-up    | 从上方淡入淡出 |
| fade-left  | 从左侧淡入淡出 |
| fade-right | 从右侧淡入淡出 |

</card>

<card>

### Sliding

| 名称        | 说明       |
| ----------- | ---------- |
| slide-down  | 从下方滑出 |
| slide-up    | 从上方滑出 |
| slide-left  | 从左侧滑出 |
| slide-right | 从右侧滑出 |

</card>

<card>

### Zooming

| 名称       | 说明         |
| ---------- | ------------ |
| zoom       | 变焦         |
| zoom-down  | 从下方变焦出 |
| zoom-up    | 从上方变焦出 |
| zoom-left  | 从左侧变焦出 |
| zoom-right | 从右侧变焦出 |

</card>

<card>

### Bouncing

| 名称         | 说明       |
| ------------ | ---------- |
| bounce       | 跳跃       |
| bounce-down  | 从下方跳出 |
| bounce-up    | 从上方跳出 |
| bounce-left  | 从左侧跳出 |
| bounce-right | 从右侧跳出 |


</card>

<card>

### Rotating

| 名称              | 说明           |
| ----------------- | -------------- |
| rotate            | 旋转           |
| rotate-down-left  | 从左下方旋转出 |
| rotate-down-right | 从右下方旋转出 |
| rotate-up-left    | 从左上方旋转出 |
| rotate-up-right   | 从右上方旋转出 |

</card>
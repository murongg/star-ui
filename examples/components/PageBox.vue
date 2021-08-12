<template>
  <div class="container">
    <div class="list-box">
      <h4>
        {{ title }}
      </h4>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PageBox',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  h4 {
    margin: 0;
    padding: 16px 0;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>

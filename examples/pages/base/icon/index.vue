<template>
  <Page title="Icon 图标">
    <page-box title="按钮类型">
      <div class="demo-icon-wrapper">
        <div v-for="item in icons" :key="item">
          <star-icon :name="item">默认按钮</star-icon>
          <span>{{ item }}</span>
        </div>
      </div>
    </page-box>
  </Page>
</template>
<script>
import icons from './icons';
export default {
  setup() {
    return {
      icons,
    };
  },
};
</script>

<style scoped>
.demo-icon-wrapper {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  /* grid-template-rows: 100px 100px 100px; */
  /* grid-gap: 20px 20px; */
  text-align: center;
}
.demo-icon-wrapper div {
  height: 100px;
  display: flex;
  flex-direction: column;
}
</style>

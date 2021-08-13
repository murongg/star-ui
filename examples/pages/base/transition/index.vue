<template>
  <Page title="Transition 过渡">
    <page-box title="动画展示">
      <star-button size="large" shape="semicircle" @click="handleClickShow"
        >切换显示/隐藏</star-button
      >
    </page-box>
    <star-transition name="fade" v-model="show" duration="0.5s">
      <div class="block"></div>
    </star-transition>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleClickShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.block {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  width: 100px;
  height: 100px;
  background: blue;
}
</style>
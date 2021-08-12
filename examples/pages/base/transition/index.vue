<template>
  <Page title="Transition 过渡">
    <page-box title="动画展示">
      <star-button size="large" shape="semicircle" @click="handleClickShow">默认按钮</star-button>
    </page-box>
    <transition name="slide-fade">
      <div class="block" v-if="show"></div>
    </transition>
  </Page>
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
<template>
  <router-view v-slot="{ Component }">
    <transition name="page-move">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
export default {
  name: 'View',
}
</script>

<style lang="scss" scoped>
.page-move-enter-from,
.page-move-leave-active {
  transform: translate(100%, 0);
}
.page-move-enter-active,
.page-move-leave-active {
  transition: transform 0.3s;
}
</style>

<template>
  <div class="l-container">
    <header class="l-bar">
      <h1>Star UI</h1>
    </header>
    <section class="l-content">
      <list-box
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :list="item.children"
        :type="item.type"
      />
    </section>
    <View />
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { components } from './components'
export default {
  setup() {
    const router = useRouter()
    const handleClick = () => {
      router.push('/button')
    }
    const list = reactive(components)
    return {
      handleClick,
      list,
    }
  },
}
</script>

<style lang="scss" scoped>
.l-container {
  width: 100vw;
  height: 100vh;
  background: #efeff4;
  .l-bar {
    z-index: 10;
    position: absolute;
    right: 0;
    left: 0;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #f3f5f7;
    box-shadow: 0 2px 1px #e9eaea;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .l-content {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
}
</style>

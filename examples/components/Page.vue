<template>
  <div class="l-page" :class="type">
    <header class="header">
      <h1>{{ title }}</h1>
      <star-icon name="left" class="lic-back" @click="back"></star-icon>
      <!-- <i>返回</i> -->
    </header>
    <div class="wrapper">
      <section v-show="desc" class="desc">
        <slot name="desc">
          {{ desc }}
        </slot>
      </section>
      <main class="content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  name: 'Page',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    type: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
  setup() {
    const router = useRouter();
    const back = () => {
      router.back();
    };
    return {
      back,
    };
  },
};
</script>

<style lang="scss" scoped>
.l-page {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #efeff4;
  .header {
    position: relative;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #edf0f4;
    box-shadow: 0 1px 6px #ccc;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 5;
    h1 {
      font-size: 16px;
      font-weight: 700;
    }
    .lic-back {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0 15px;
      color: #5680f9;
    }
  }
  > .wrapper {
    height: calc(100% - 44px);
    overflow-x: hidden;
    overflow-y: auto;

    // -webkit-overflow-scrollg: touch
    .desc {
      padding: 10px;
      margin: 10px 0;
      line-height: 20px;
      font-size: 14px;
    }

    .content {
      margin: 10px;
    }
  }
}
</style>

<template>
  <div class="page-display">
    <div class="display-wrapper" v-if="type === 'components'">
      <section class="mofang-demo">
        <iframe
          :src="DEMO_URL + ifrSrc"
          frameborder="0"
          width="100%"
          height="100%"
          scrolling="no"
        ></iframe>
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import config from '../../../build/config';
export default {
  setup() {
    const ifrSrc = ref('');
    const route = useRoute();
    const substr = route.path.match(/\/(\S*).html/);
    const type = ref(null);
    if (substr && substr.length !== 0) {
      const pathArr = substr[1].split('/');
      type.value = pathArr[0];
      const componentPath = route.path.match(/\/components(\S*).html/);
      ifrSrc.value = componentPath[1];
    }

    return {
      ifrSrc,
      type,
      DEMO_URL: config.DEMO_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
:root {
  .display-wrapper {
    width: 330px;
    height: 645px;
    background: url('../images/iphoneX.png') no-repeat center 0;
    background-size: 100%;
  }
}
html.dark {
  .display-wrapper {
    width: 330px;
    height: 716px;
    background: url('../images/phone.png') no-repeat center 0;
    background-size: 100%;
  }
}

@media (max-width: 1000px) {
  .page-display {
    display: none;
  }
}
.page-display {
  position: fixed;
  top: 100px;
  right: 50px;
}
.display-wrapper {
  position: relative;
  margin: 0 56px 0 26px;
}
.mofang-demo {
  position: absolute;
  top: 64px;
  left: 21px;
  right: 23px;
  bottom: 22px;
  overflow: hidden;
  border-radius: 0 0 35px 35px;
  border: 1px solid var(--phone-bg-color);
  border-top: none;
  background-color: var(--phone-bg-color);
  /* background: red; */
}
.mofang-demo iframe {
  width: 0;
  max-width: 100%;
  min-width: 100%;
}
</style>
<template>
  <Layout>
    <template #page-bottom>
      <phone></phone>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Phone from '../../components/Phone.vue';
export default {
  components: {
    Layout,
    Phone,
  },
};
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
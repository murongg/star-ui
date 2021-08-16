<template>
  <Page title="Layout 布局">
    <page-box title="基本使用">
      <star-row>
        <star-col :span="24">
          <div class="col">span: 24</div>
        </star-col>
      </star-row>
      <star-row>
        <star-col :span="8">
          <div class="col">span: 8</div>
        </star-col>
        <star-col :span="8">
          <div class="col light">span: 8</div>
        </star-col>
        <star-col :span="8">
          <div class="col">span: 8</div>
        </star-col>
      </star-row>
      <star-row>
        <star-col :span="6">
          <div class="col">span: 6</div>
        </star-col>
        <star-col :span="6">
          <div class="col light">span: 6</div>
        </star-col>
        <star-col :span="6">
          <div class="col">span: 6</div>
        </star-col>
        <star-col :span="6">
          <div class="col light">span: 6</div>
        </star-col>
      </star-row>
    </page-box>
    <page-box title="栅格间隔">
      <star-row :gutter="10">
        <star-col :span="8">
          <div class="col">span: 8</div>
        </star-col>
        <star-col :span="8">
          <div class="col light">span: 8</div>
        </star-col>
        <star-col :span="8">
          <div class="col">span: 8</div>
        </star-col>
      </star-row>
    </page-box>
    <page-box title="栅格偏移">
      <star-row>
        <star-col :span="8">
          <div class="col">span: 8</div>
        </star-col>
        <star-col :span="10" :offset="4">
          <div class="col">span: 10 offset: 4</div>
        </star-col>
      </star-row>
      <star-row>
        <star-col :span="10" :offset="4">
          <div class="col">span: 10 offset: 4</div>
        </star-col>
        <star-col :span="6">
          <div class="col">span: 6</div>
        </star-col>
      </star-row>
    </page-box>
    <page-box title="对齐方式">
      <star-row justify="center">
        <star-col :span="6">
          <div class="col">span: 6</div>
        </star-col>
        <star-col :span="6">
          <div class="col light">span: 6</div>
        </star-col>
        <star-col :span="6">
          <div class="col">span: 6</div>
        </star-col>
      </star-row>
      <star-row justify="end">
        <star-col :span="6">
          <div class="col">span: 6</div>
        </star-col>
        <star-col :span="6">
          <div class="col light">span: 6</div>
        </star-col>
        <star-col :span="6">
          <div class="col">span: 6</div>
        </star-col>
      </star-row>
      <star-row justify="space-between">
        <star-col :span="6">
          <div class="col">span: 6</div>
        </star-col>
        <star-col :span="6">
          <div class="col light">span: 6</div>
        </star-col>
        <star-col :span="6">
          <div class="col">span: 6</div>
        </star-col>
      </star-row>
      <star-row justify="space-around">
        <star-col :span="6">
          <div class="col">span: 6</div>
        </star-col>
        <star-col :span="6">
          <div class="col light">span: 6</div>
        </star-col>
        <star-col :span="6">
          <div class="col">span: 6</div>
        </star-col>
      </star-row>
    </page-box>
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
.col {
  height: 30px;
  background: #5680f9;
  opacity: 0.8;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  margin-bottom: 5px;
}
.col.light {
  opacity: 0.6;
}
</style>



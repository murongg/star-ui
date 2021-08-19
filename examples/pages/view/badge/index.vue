<template>
  <Page title="Badge 徽标">
    <page-box title="基础用法">
      <star-badge :value="123" class="demo-badge">
        <div class="demo-content"></div>
      </star-badge>
      <star-badge :value="123" :max="99" class="demo-badge">
        <div class="demo-content"></div>
      </star-badge>
      <star-badge value="Max" class="demo-badge">
        <div class="demo-content"></div>
      </star-badge>
      <star-badge dot class="demo-badge">
        <div class="demo-content"></div>
      </star-badge>
    </page-box>
    <page-box title="徽标形状">
      <star-badge :value="123" class="demo-badge">
        <div class="demo-content"></div>
      </star-badge>
      <star-badge :value="123" shape="horn" class="demo-badge">
        <div class="demo-content"></div>
      </star-badge>
    </page-box>
    <page-box title="数字显示方式">
      <star-badge :value="123" :max="99" class="demo-badge">
        <div class="demo-content"></div>
      </star-badge>
      <star-badge :value="123" number-type="ellipsis" :max="100" class="demo-badge">
        <div class="demo-content"></div>
      </star-badge>
      <star-badge :value="10023" number-type="limit" class="demo-badge">
        <div class="demo-content"></div>
      </star-badge>
    </page-box>
    <page-box title="点状徽标">
      <star-badge :value="123" class="demo-badge" dot>
        <div class="demo-content"></div>
      </star-badge>
    </page-box>
    <page-box title="徽标颜色">
      <star-badge :value="123" :max="99" color="#0999e6" class="demo-badge">
        <div class="demo-content"></div>
      </star-badge>
    </page-box>
    <page-box title="自定义徽标内容">
      <star-badge :value="123" :max="99" class="demo-badge">
        <div class="demo-content"></div>
        <template #content> <star-icon name="eye" size="20"></star-icon> </template>
      </star-badge>
    </page-box>
    <page-box title="独立展示">
      <star-badge :value="123" :max="99" class="demo-badge"> </star-badge>
      <star-badge :value="10023" number-type="limit" class="demo-badge"> </star-badge>
    </page-box>
  </Page>
</template>



<style scoped>
.demo-badge {
  margin-right: 25px;
}
.demo-content {
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 4px;
}
</style>



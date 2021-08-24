<template>
  <Page title="Button 按钮">
    <page-box title="按钮类型">
      <div class="demo-button-wrapper">
        <star-button>默认按钮</star-button>
        <star-button type="primary">主要按钮</star-button>
        <star-button type="danger">错误按钮</star-button>
        <star-button type="success">成功按钮</star-button>
        <star-button type="warning">警告按钮</star-button>
        <star-button type="info">信息按钮</star-button>
      </div>
    </page-box>
    <page-box title="按钮大小">
      <star-button size="large" type="primary" style="margin-bottom: 10px">大号按钮</star-button>
      <div class="demo-button-wrapper">
        <star-button size="normal" type="primary">普通按钮</star-button>
        <star-button size="small" type="primary">小型按钮</star-button>
        <star-button size="mini" type="primary">迷你按钮</star-button>
      </div>
    </page-box>
    <page-box title="按钮形状">
      <div class="demo-button-wrapper">
        <star-button shape="square" type="primary">方形按钮</star-button>
        <star-button shape="round" type="primary">圆弧按钮</star-button>
        <star-button shape="semicircle" type="primary">半圆按钮</star-button>
        <star-button shape="circle" icon="favor" type="primary" />
      </div>
    </page-box>
    <page-box title="镂空按钮">
      <div class="demo-button-wrapper">
        <star-button type="default" plain>默认按钮</star-button>
        <star-button type="primary" plain>主要按钮</star-button>
        <star-button type="danger" plain>错误按钮</star-button>
        <star-button type="success" plain>成功按钮</star-button>
        <star-button type="warning" plain>警告按钮</star-button>
        <star-button type="info" plain>信息按钮</star-button>
      </div>
    </page-box>
    <page-box title="禁用按钮">
      <div class="demo-button-wrapper">
        <star-button type="default" disabled>默认按钮</star-button>
        <star-button type="primary" disabled>主要按钮</star-button>
        <star-button type="danger" disabled>错误按钮</star-button>
        <star-button type="success" disabled>成功按钮</star-button>
        <star-button type="warning" disabled>警告按钮</star-button>
        <star-button type="info" disabled>信息按钮</star-button>
      </div>
    </page-box>
    <page-box title="加载按钮">
      <div class="demo-button-wrapper">
        <star-button type="primary" loading>加载按钮</star-button>
        <star-button
          type="primary"
          loading
          loading-text="自定义"
          loading-size="30px"
        >
          加载按钮
        </star-button>
        <star-button type="primary" shape="circle" loading>加载按钮</star-button>
      </div>
    </page-box>
    <page-box title="图标按钮">
      <div class="demo-button-wrapper">
        <star-button type="primary" icon="favor">默认按钮</star-button>
        <star-button shape="circle" icon="favor" type="primary" />
        <star-button
          icon="favor"
          icon-size="30px"
          icon-color="#f39c12"
          type="primary"
        >
          自定义按钮
        </star-button>
        <star-button icon="favor" type="primary" />
      </div>
    </page-box>
    <page-box title="按钮阴影">
      <div class="demo-button-wrapper">
        <star-button shadow>按钮阴影</star-button>
        <star-button shadow type="primary">按钮阴影</star-button>
        <star-button shadow type="danger">错误按钮</star-button>
        <star-button shadow type="success">成功按钮</star-button>
        <star-button shadow type="warning">警告按钮</star-button>
        <star-button shadow type="info">信息按钮</star-button>
        <star-button
          shadow
          shadow-style="10px 10px 10px #ccc"
          type="primary"
        >
          自定义按钮阴影
        </star-button>
      </div>
    </page-box>
    <page-box title="自定义颜色">
      <div class="demo-button-wrapper">
        <star-button color="#867a49" text-color="#faf6e6">自定义颜色</star-button>
      </div>
    </page-box>
  </Page>
</template>



<style scoped>
.demo-button-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.demo-button-wrapper .star-button {
  margin-right: 20px;
  margin-bottom: 10px;
}
</style>

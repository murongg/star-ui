<template>
  <Page title="Grid 宫格">
    <page-box title="基本使用">
      <star-grid>
        <star-grid-item>
          <div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div>
        </star-grid-item>
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
      </star-grid>
    </page-box>
    <page-box title="栅格边框">
      <star-grid border>
        <star-grid-item>
          <div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div>
        </star-grid-item>
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
      </star-grid>
    </page-box>
    <page-box title="栅格间隔">
      <star-grid :x-gap="10" :y-gap="10">
        <star-grid-item>
          <div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div>
        </star-grid-item>
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
        <star-grid-item
          ><div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div></star-grid-item
        >
      </star-grid>
    </page-box>
    <page-box title="栅格列数">
      <star-grid :cols="4">
        <star-grid-item>
          <div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div>
        </star-grid-item>
        <star-grid-item>
          <div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div>
        </star-grid-item>
        <star-grid-item>
          <div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div>
        </star-grid-item>
        <star-grid-item>
          <div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div>
        </star-grid-item>
      </star-grid>
    </page-box>
    <page-box title="栅格偏移">
      <star-grid :cols="5">
        <star-grid-item :offset="1">
          <div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div>
        </star-grid-item>
        <star-grid-item :offset="1">
          <div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div>
        </star-grid-item>
      </star-grid>
    </page-box>

    <page-box title="栅格所占列数">
      <star-grid :cols="5">
        <star-grid-item :span="2">
          <div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div>
        </star-grid-item>
        <star-grid-item>
          <div class="block">
            <star-icon name="delete"></star-icon>
            图标
          </div>
        </star-grid-item>
      </star-grid>
    </page-box>
  </Page>
</template>


<style scoped>
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  color: #666;
  background: #fff;
}
</style>
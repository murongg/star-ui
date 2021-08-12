declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  var component: ComponentOptions
  export default component
}

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}
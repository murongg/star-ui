import { mount } from '@vue/test-utils';

export default function mountTest(Component, options) {
  describe(`mount and unmount`, () => {
    // https://github.com/ant-design/ant-design/pull/18441
    it(`component could be updated and unmounted without errors`, () => {
      const wrapper = mount(
        Component,
        options
      );
      expect(() => {
        wrapper.vm.$forceUpdate();
        wrapper.unmount();
      }).not.toThrow();
    });
  });
}



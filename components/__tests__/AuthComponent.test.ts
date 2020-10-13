import { mount, createLocalVue, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';

import AuthComponent from '@/components/AuthComponent.vue';

describe('AuthComponent.vue', () => {
  let wrapper: any;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuetify);
    wrapper = mount(AuthComponent, {
      localVue,
    });
  });
});

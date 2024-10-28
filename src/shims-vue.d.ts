/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

import { Store } from '@/store';
import { Router } from 'vue-router';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    store: Store;
    $router: Router
  }
}
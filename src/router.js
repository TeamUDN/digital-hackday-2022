import { createRouter, createWebHistory } from 'vue-router';

import View from './View.vue';
import NotFound from './components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/view/:id', component:View },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'example-active',
  linkExactActiveClass: 'example-exact-active',
});

export default router;
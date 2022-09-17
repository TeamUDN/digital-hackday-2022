
// import { createRouter, createWebHistory } from 'vue-router';

// import TestPage01 from './components/TestPage01.vue';
// import TestPage02 from './components/TestPage02.vue';
// import NotFound from './components/NotFound.vue';

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: '/', redirect: '/test-page02' },
//     { name: 'test1', path: '/test-page01', component: TestPage01 },
//     { name: 'test2', path: '/test-page02', component: TestPage02 },

//     { path: '/:notFound(.*)', component: NotFound }
//   ],
//   linkActiveClass: 'example-active',
//   linkExactActiveClass: 'example-exact-active',
// });

// export default router;

import { createRouter, createWebHistory } from 'vue-router';

import MakeQuestion from './components/pages/MakeQuestion.vue'
import View from './View.vue';
import NotFound from './components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/make-question', component:MakeQuestion },
    { path: '/view/:id', component:View },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'example-active',
  linkExactActiveClass: 'example-exact-active',
});

export default router;

// import Vue from "vue";
// import VueRouter from "vue-router";

// import View from "./View";

// Vue.use(VueRouter);

// const routes = [
//   {
//     // ":id"が異なるルートにマッチングします。
//     path: "/view/:id",
//     component: View,
//   },
// ];

// const router = new VueRouter({
//   mode: "history",
//   routes: routes,
// });

// export default router;

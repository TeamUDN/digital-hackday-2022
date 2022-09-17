import { createRouter, createWebHistory } from 'vue-router';

import Top from './components/pages/Top.vue'
import MakeQuestion from './components/pages/MakeQuestion.vue'
import CreateUrl from './components/pages/CreateUrl.vue'
import Question from './components/pages/Question.vue'
import UserList from './components/pages/UserList.vue'
import View from './View.vue';
import NotFound from './components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component:Top },
    { path: '/make-question', component: MakeQuestion },
    { path: '/create-url', component: CreateUrl },
    { path: '/question/:id', component: Question },
    { path: '/user-list/:id', component: UserList },
    { path: '/view/:id', component:View },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'example-active',
  linkExactActiveClass: 'example-exact-active',
});

export default router;

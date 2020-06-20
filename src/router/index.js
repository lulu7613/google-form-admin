import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: '/pass/:id',
        name: 'Pass',
        component: () => import('@/views/Pass.vue'),
      },
    ],
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/views/Create.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

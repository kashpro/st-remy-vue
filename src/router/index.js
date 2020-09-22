import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: "HomeLayout", headerPos: "abs",},
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/start',
    name: 'Start',
    meta: {layout: null,},
    component: () => import('@/views/Start.vue'),
  },
  {
    path: '/gallery',
    name: 'Gallery',
    meta: {layout: "HomeLayout",},
    component: () => import('@/views/Gallery.vue'),
  },
  {
    path: '/winners',
    name: 'Winners',
    meta: {layout: "HomeLayout",},
    component: () => import('@/views/Winners.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: "HomeLayout",},
    component: () => import('@/views/Profile.vue'),
  },
  { 
    path: '*',
    meta: {layout: null,},
    component: () => import('@/views/404.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;

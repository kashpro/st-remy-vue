import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: "HomeLayout", headerPos: "abs"},
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/start',
    name: 'Start',
    meta: {layout: null},
    component: () => import('@/views/Start.vue'),
  },
  {
    path: '/gallery',
    name: 'Gallery',
    meta: {layout: "HomeLayout"},
    component: () => import('@/views/Gallery.vue'),
  },
  {
    path: '/winners',
    name: 'Winners',
    meta: {layout: "HomeLayout"},
    component: () => import('@/views/Winners.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: "HomeLayout", auth: true},
    component: () => import('@/views/Profile.vue'),
  },
  {
    path: '/story/:id',
    props: true,
    name: 'Story',
    meta: {layout: "HomeLayout"},
    component: () => import('@/views/SingleStory.vue'),
  },
  {
    path: '*',
    meta: {layout: null,},
    component: () => import('@/views/Page404.vue'),
  },
];

const router = new VueRouter({
  routes,
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } 
    return {x: 0, y: 0};
  },
});

// router.beforeEach( (to, from, next) => {
//   const currentUser = store.getters.userInfo;
//   const requireAuth = to.matched.some(record => record.meta.auth);
//   if (requireAuth && !currentUser) {
//     next(from);
//   } else {
//     next();
//   }
// });

router.beforeEach( async (to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.auth);
  if (!localStorage.getItem("token") && requireAuth) {
    next("/");
  } else {
    next();
    // try {
      // const userInfo = await store.dispatch("getUserInfo", localStorage.getItem("token"));
      // next();
    // } catch(err) {
      // if (requireAuth) {
      //   next("/");
      // }
      // next();
    // }
  }
  
});

export default router;


// router.beforeEach( async (to, from, next) => {
//   const requireAuth = to.matched.some(record => record.meta.auth);
//   if (!localStorage.getItem("token") && requireAuth) {
//     next("/");
//   } else {
//     try {
//       const userInfo = await store.dispatch("getUserInfo", localStorage.getItem("token"));
//       next();
//     } catch(err) {
//       if (requireAuth) {
//         next("/");
//       }
//       next();
//     }
//   }
  
// });
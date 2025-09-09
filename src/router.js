import { createRouter, createWebHashHistory } from "vue-router";
import { getAuth } from "firebase/auth";
import RequestBanner from './components/RequestBanner.vue'
import RequestRetouch from './components/RequestRetouch.vue'
import ManagerPage from './components/ManagerPage.vue'
import Login from './components/Login.vue'

export const router = new createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: RequestBanner,
            meta: { requiresAuth: true }
        },
        {
            path: '/retouch',
            name: 'retouch',
            component: RequestRetouch,
            meta: { requiresAuth: true }
        },
        {
            path: '/manager-page',
            name: 'manager-page',
            component: ManagerPage,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { requiresAuth: false, showNav: false }
        },
    ]
})

router.beforeEach(async (to, from) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = new Promise((resolve) => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user ? true : false); // userだったらtrue、違ったらfalseを返す
    });
  });
  if (requiresAuth && !(await isAuthenticated)) {
    return '/login';
  }
  if (to.name == 'login' && await isAuthenticated) {
    return '/';
  }
});
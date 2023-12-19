import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import RequestBanner from './components/RequestBanner.vue'
import RequestRetouch from './components/RequestRetouch.vue'
import ManagerPage from './components/ManagerPage.vue'
import Login from './components/Login.vue'

export const router = new createRouter({
    history: createWebHistory(),
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
            meta: { requiresAuth: false }
        },
    ]
})
const firebaseConfig = {
  apiKey: "AIzaSyBOdd12L5VTc_1QuyuE5vO4EBeR_rQ3sSQ",
  authDomain: "test-request-form.firebaseapp.com",
  databaseURL: "https://test-request-form-default-rtdb.firebaseio.com",
  projectId: "test-request-form",
  storageBucket: "test-request-form.appspot.com",
  messagingSenderId: "491893541154",
  appId: "1:491893541154:web:67718278b1dc6666d6bd7b"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

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
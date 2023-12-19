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
  apiKey: "AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",
  authDomain: "nicoro-request-form.firebaseapp.com",
  databaseURL: "https://nicoro-request-form-default-rtdb.firebaseio.com",
  projectId: "nicoro-request-form",
  storageBucket: "nicoro-request-form.appspot.com",
  messagingSenderId: "771124177365",
  appId: "1:771124177365:web:d19a5c49a3a5750bb4b55c"
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
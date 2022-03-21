import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView";
import DashboardView from "@/views/DashboardView";
import CityDetailsView from "@/views/CityDetailsView";
import store from '@/store'
import PageNotFoundView from "@/views/PageNotFoundView";
import LogoutView from "@/views/LogoutView";

const isLoggedInGuard = (to, from, next) => {
  if (!store.getters['authentication/isUserLoggedIn']) {
    return next('/login');
  }
  next();
};

const isNotLoggedInGuard = (to, from, next) => {
  if (store.getters['authentication/isUserLoggedIn']) {
    return next('/dashboard');
  }
  next();
};

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: isNotLoggedInGuard,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    beforeEnter: isLoggedInGuard,
  },
  {
    path: '/cityDetails',
    name: 'citydetails',
    component: CityDetailsView,
    beforeEnter: isLoggedInGuard,
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView,
    beforeEnter: isLoggedInGuard,
  },
  {
    path: "/:catchAll(.*)",
    name: 'page-not-found',
    component: PageNotFoundView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import Auth from '@/layout/Auth.vue';
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import Admin from '@/layout/Admin.vue';
import HomeView from '@/views/HomeView.vue';
import AddTransactionView from '@/views/AddTransactionView.vue';

const routes = [
  {
    path: '/',
    name: 'admin',
    component: Admin,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { title: 'Inicio' },
      },
      {
        path: '/add-transaction',
        name: 'add-transaction',
        component: AddTransactionView,
        meta: { title: 'Nuevo movimiento' },
      },
    ],
  },
  {
    path: '/auth/',
    redirect: '/auth/login',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginView,
      },
      {
        path: 'register',
        name: 'register',
        component: RegisterView,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

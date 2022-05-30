import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'
import HelpView from '../views/HelpView.vue'
import SetupView from '../views/SetupView.vue'
import FrameView from '../views/FrameView.vue'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    // 入口重定向到login
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LoginView
  },
  {
    path: '/frame',
    name: 'frame',
    meta: {
      requireAuth: true
    },
    /* redirect:'/login', */ /* 重定向 */
    component: FrameView,
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView,
      },
      {
        path: '/help',
        name: 'help',
        component: HelpView,
      },
      {
        path: '/setup',
        name: 'setup',
        component: SetupView,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 需要拿到token来判断是否为true
    if (localStorage.token) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next();
  }
})

export default router

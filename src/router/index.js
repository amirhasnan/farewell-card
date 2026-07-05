import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/emily', component: () => import('@/views/EmilyView.vue') },
  { path: '/matul', component: () => import('@/views/MatulView.vue') },
  { path: '/razzaq', component: () => import('@/views/RazzaqView.vue') },
  { path: '/bazil', component: () => import('@/views/BazilView.vue') },
  { path: '/leena', component: () => import('@/views/LeenaNailongView.vue') },
  { path: '/leena-1', component: () => import('@/views/LeenaView.vue') },
  { path: '/muazz', component: () => import('@/views/MuazzView.vue') },
  { path: '/khairi', component: () => import('@/views/KhairiView.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

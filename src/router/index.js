import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/view/Error.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/view/Home.vue'),
  },

  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// notfound
router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href // '/not/found'

export default router

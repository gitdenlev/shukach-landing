import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Privacy from './views/Privacy.vue'
import Terms from './views/Terms.vue'
import About from './views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/privacy', component: Privacy },
  { path: '/terms', component: Terms },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router

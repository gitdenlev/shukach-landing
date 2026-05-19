import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Privacy from './views/Privacy.vue'
import Terms from './views/Terms.vue'
import About from './views/About.vue'

const routes = [
  { 
    path: '/', 
    component: Home,
    meta: { 
      title: 'Шукач — Telegram-бот для моніторингу цін та реальних знижок',
      description: 'Відстежуй ціни в топ-10 магазинах України 24/7. Автономний трекер у Telegram надішле пуш, коли товар реально подешевшає.'
    }
  },
  { 
    path: '/privacy', 
    component: Privacy,
    meta: { 
      title: 'Політика конфіденційності | Шукач',
      description: 'Політика конфіденційності сервісу Шукач. Дізнайтеся, як ми обробляємо та захищаємо ваші дані при використанні нашого Telegram-бота.'
    }
  },
  { 
    path: '/terms', 
    component: Terms,
    meta: { 
      title: 'Умови використання сервісу | Шукач',
      description: 'Умови використання сервісу Шукач. Правила та обов\'язки при роботі з Telegram-ботом для моніторингу цін.'
    }
  },
  { 
    path: '/about', 
    component: About,
    meta: { 
      title: 'Про Шукач — Ваш розумний трекер цін',
      description: 'Шукач — це автономний Telegram-бот для моніторингу цін та знижок в українських магазинах. Дізнайтеся більше про наш проект.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  
  if (to.meta.description) {
    let metaTag = document.querySelector('meta[name="description"]')
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute('name', 'description')
      document.head.appendChild(metaTag)
    }
    metaTag.setAttribute('content', to.meta.description as string)
  }
  
  next()
})

export default router

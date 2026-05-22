<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { PhX, PhTelegramLogo } from '@phosphor-icons/vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

// Блокуємо скролл коли меню відкрите
watch(mobileMenuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

const closeMenu = () => { mobileMenuOpen.value = false }

const navLinks = [
  { to: '/#how-it-works', label: 'Як це працює' },
  { to: '/#features', label: 'Можливості' },
  { to: '/#pricing', label: 'Тарифи' },
  { to: '/#faq', label: 'FAQ' },
]

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled || mobileMenuOpen ? 'header-scrolled' : 'header-transparent'">
    <nav class="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex justify-between items-center">

      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3 group cursor-pointer" @click="closeMenu">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border shadow-sm group-hover:shadow-md transition-all"
          :class="scrolled ? 'border-border-subtle' : 'border-white/20'">
          <img src="/favicon.svg" alt="Логотип Telegram-бота Шукач для моніторингу цін та знижок" width="40"
            height="40" class="w-full h-full object-cover" />
        </div>
        <span class="font-extrabold text-2xl text-text-heading tracking-tight">Шукач</span>

      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8 text-base font-medium text-text-body">
        <router-link v-for="link in navLinks" :key="link.to" :to="link.to" class="hover:text-brand transition-colors">
          {{ link.label }}
        </router-link>
      </div>

      <!-- Desktop CTA -->
      <div class="hidden md:flex items-center gap-4">
        <a href="https://t.me/shukach_ua_bot" target="_blank" rel="noopener noreferrer"
          class="px-6 py-2.5 text-sm font-semibold rounded-full border border-brand-dark text-brand-dark bg-transparent hover:bg-brand-dark hover:text-white transition-colors duration-300">
          Спробувати
        </a>
      </div>

      <!-- Mobile: Hamburger -->
      <div class="flex md:hidden items-center gap-3">
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="hamburger-btn" :class="{ 'is-open': mobileMenuOpen }"
          aria-label="Меню">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>

    </nav>
  </header>

  <!-- Mobile Menu Overlay -->
  <Teleport to="body">
    <Transition name="overlay">
      <div v-if="mobileMenuOpen" class="mobile-overlay" @click="closeMenu"></div>
    </Transition>

    <!-- Side Menu -->
    <Transition name="side">
      <div v-if="mobileMenuOpen" class="mobile-side flex flex-col">

        <!-- Top Header for Side Menu -->
        <div class="flex items-center justify-end px-6 pt-6 pb-2">
          <button @click="closeMenu"
            class="w-8 h-8 flex items-center justify-center rounded-full bg-border-subtle/50 text-text-body hover:bg-border-subtle transition-colors">
            <PhX :size="18" weight="bold" />
          </button>
        </div>

        <!-- Nav Links -->
        <nav class="px-4 py-8 space-y-2 flex-1 overflow-y-auto flex flex-col justify-center">
          <router-link v-for="(link, i) in navLinks" :key="link.to" :to="link.to" class="mobile-nav-item justify-center"
            :style="{ transitionDelay: mobileMenuOpen ? `${i * 40}ms` : '0ms' }" @click="closeMenu">
            <span class="font-semibold text-text-heading text-xl">{{ link.label }}</span>
          </router-link>
        </nav>

        <!-- Bottom CTA -->
        <div class="px-4 pb-8 pt-4 border-t border-border-subtle mt-auto">
          <a href="https://t.me/shukach_ua_bot" target="_blank" rel="noopener noreferrer"
            class="btn-primary w-full justify-center text-base py-4" @click="closeMenu">
            <PhTelegramLogo :size="20" weight="fill" />
            Відкрити в Telegram
          </a>
          <p class="text-center text-xs text-text-body/80 mt-3 font-medium">
            Безкоштовно · Без реєстрації
          </p>
          <div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-6 text-center px-4">
            <router-link to="/terms"
              class="text-xs font-semibold text-text-body/80 hover:text-text-heading transition-colors whitespace-nowrap"
              @click="closeMenu">
              Умови використання
            </router-link>
            <span class="text-text-body/40 text-[10px] sm:inline">•</span>
            <router-link to="/privacy"
              class="text-xs font-semibold text-text-body/80 hover:text-text-heading transition-colors whitespace-nowrap"
              @click="closeMenu">
              Політика конфіденційності
            </router-link>
            <span class="text-text-body/40 text-[10px] sm:inline">•</span>
            <router-link to="/about"
              class="text-xs font-semibold text-text-body/80 hover:text-text-heading transition-colors whitespace-nowrap"
              @click="closeMenu">
              Про нас
            </router-link>
          </div>
        </div>

      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ── Header states ── */
.header-transparent {
  background: transparent;
  border-bottom: 1px solid transparent;
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-subtle);
  box-shadow: 0 4px 24px -8px rgba(15, 23, 42, 0.06);
}

/* ── Hamburger ── */
.hamburger-btn {
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-card);
  cursor: pointer;
  transition: background 0.2s ease;
  padding: 0;
}

.hamburger-btn:hover {
  background: var(--bg-main);
}

.bar {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--text-heading);
  border-radius: 2px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
  transform-origin: center;
}

.hamburger-btn.is-open .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger-btn.is-open .bar:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger-btn.is-open .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Overlay ── */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 90;
  background: rgba(15, 23, 42, 0.35);
  backdrop-filter: blur(2px);
}

/* ── Side Menu ── */
.mobile-side {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 100%;
  z-index: 100;
  background: #fff;
  box-shadow: none;
  will-change: transform;
}

/* ── Nav Items ── */
.mobile-nav-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 16px;
  transition: background 0.15s ease;
  text-decoration: none;
}

.mobile-nav-item:hover,
.mobile-nav-item:active {
  background: var(--bg-main);
}



/* ── Transitions ── */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.28s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.side-enter-active {
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1);
}

.side-leave-active {
  transition: transform 0.28s cubic-bezier(0.4, 0, 1, 1);
}

.side-enter-from,
.side-leave-to {
  transform: translateX(100%);
}
</style>

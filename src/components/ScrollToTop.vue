<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  // Show button when page is scrolled down 400px
  isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="fade-slide">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-slate-100 shadow-xl shadow-brand/10 text-slate-500 hover:text-brand hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 focus:outline-none"
      aria-label="Повернутися нагору"
    >
      <i class="ph-bold ph-caret-up text-xl"></i>
    </button>
  </Transition>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}
</style>

<script setup>
import { ref, onMounted } from 'vue'

const isAccepted = ref(true)

onMounted(() => {
  if (!localStorage.getItem('shukach_cookie_consent')) {
    isAccepted.value = false
  }
})

function acceptCookies() {
  localStorage.setItem('shukach_cookie_consent', 'true')
  isAccepted.value = true
}

function declineCookies() {
  localStorage.setItem('shukach_cookie_consent', 'false')
  isAccepted.value = true
}
</script>

<template>
  <transition name="slide-up">
    <!-- Mobile: full-width bar pinned to bottom. md+: floating card in bottom-right corner -->
    <div
      v-if="!isAccepted"
      class="fixed bottom-0 left-0 right-0 z-50
             md:bottom-6 md:left-auto md:right-6 md:max-w-md md:w-full"
    >
      <div
        class="bg-white/90 backdrop-blur-md border-t border-slate-100 shadow-xl shadow-slate-200/50 p-5
               md:rounded-3xl md:border md:border-slate-100"
      >
        <!-- Content stack: Heading -> Description -> Buttons Row -->
        <div class="flex flex-col gaap-4">
          <!-- Text content -->
          <div class="text-left">
            <p class="text-sm font-bold text-slate-900 tracking-tight mb-1.5">
              🍪 Налаштування cookie-файлів
            </p>
            <p class="text-xs text-slate-600 font-medium leading-relaxed">
              Ми використовуємо файли cookie для покращення вашого досвіду.
              Дізнайтесь більше в нашій
              <router-link
                to="/privacy"
                class="text-[#8B5CF6] hover:underline font-semibold"
              >Політиці конфіденційності</router-link>.
            </p>
          </div>

          <!-- Actions row -->
          <div class="flex items-center gap-6">
            <button
              @click="declineCookies"
              class="text-xs font-bold text-slate-600 hover:text-slate-800 transition-colors"
            >
              Відхилити
            </button>
            <button
              @click="acceptCookies"
              class="flex-1 sm:flex-none rounded-full px-8 py-2.5 text-xs font-bold text-white
                     bg-gradient-to-r from-[#8B5CF6] to-[#C084FC]
                     hover:shadow-md hover:shadow-purple-500/20 transition-all whitespace-nowrap"
            >
              Прийняти
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 0.35s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(120%);
  opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>

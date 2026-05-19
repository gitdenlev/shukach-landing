<script setup>
import {
  PhBellRinging, PhClockCountdown, PhPackage,
  PhTarget, PhDevices, PhShieldCheck
} from '@phosphor-icons/vue'

const features = [
  {
    icon: PhBellRinging,
    color: 'brand',
    title: 'Миттєві сповіщення',
    description: 'Отримуйте push-сповіщення прямо в Telegram, щойно ціна зміниться. Ніяких затримок — ніяких пропущених знижок.',
  },
  {
    icon: PhClockCountdown,
    color: 'brand',
    title: 'Моніторинг 24/7',
    description: 'Шукач не спить. Автоматичне сканування ведеться кожну годину — навіть вночі та у вихідні.',
  },
  {
    icon: PhPackage,
    color: 'accent',
    title: 'Наявність товару',
    description: "Стежте не лише за ціною, але й за наявністю. Отримайте сповіщення, коли товар з'явиться на складі.",
  },
  {
    icon: PhTarget,
    color: 'brand',
    title: 'Цільова ціна',
    description: 'Встановіть власну ціну, нижче якої хочете купити. Бот повідомить вас лише тоді, коли вона досягне вашої мети.',
  },
  {
    icon: PhDevices,
    color: 'brand',
    title: 'Будь-який пристрій',
    description: 'Telegram працює на iOS, Android, Mac та Windows. Шукач — скрізь, де є ваш месенджер.',
  },
  {
    icon: PhShieldCheck,
    color: 'success',
    title: 'Без реєстрації',
    description: 'Жодних паролів, підтверджень пошти чи номерів телефонів. Швидкий старт через Telegram та безпечні розрахунки за допомогою Stars.',
  },
]
</script>

<template>
  <section id="features" class="py-24 relative overflow-hidden">
    <div class="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%); transform: translateX(40%);">
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <div class="text-center mb-16">
       
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-text-heading">
          Все, що потрібно для <span class="text-gradient">розумної економії</span>
        </h2>
        <p class="text-lg text-text-body max-w-2xl mx-auto font-medium">
          Шукач — це автономний інструмент, створений для точного моніторингу цін без зайвого шуму та складних налаштувань.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="feature-card p-8 rounded-3xl group"
        >
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
            :class="`feature-icon-${feature.color}`"
          >
            <component :is="feature.icon" :size="24" weight="bold" :class="`icon-color-${feature.color}`" />
          </div>

          <h3 class="text-lg font-extrabold text-text-heading mb-3">{{ feature.title }}</h3>
          <p class="text-text-body leading-relaxed font-medium text-[15px]">{{ feature.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -16px rgba(139, 92, 246, 0.1);
}

.feature-icon-brand { background: rgba(139, 92, 246, 0.1); }
.feature-icon-success { background: rgba(34, 197, 94, 0.1); }
.feature-icon-accent { background: rgba(250, 204, 21, 0.12); }

.icon-color-brand { color: var(--brand) !important; }
.icon-color-success { color: var(--success) !important; }
.icon-color-accent { color: #ca8a04 !important; }
</style>

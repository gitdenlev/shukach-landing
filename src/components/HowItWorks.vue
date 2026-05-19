<script setup>
import { PhMagnifyingGlass, PhLink, PhBellRinging, PhArrowDown } from '@phosphor-icons/vue'

const steps = [
  {
    number: '01',
    icon: PhMagnifyingGlass,
    title: 'Знайдіть товар',
    description: 'Відкрийте будь-який магазин та знайдіть товар, який хочете відстежити.',
    color: 'brand',
  },
  {
    number: '02',
    icon: PhLink,
    title: 'Надішліть посилання',
    description: 'Скопіюйте посилання на сторінку товару та надішліть його боту.',
    color: 'accent',
  },
  {
    number: '03',
    icon: PhBellRinging,
    title: 'Отримайте сповіщення',
    description: "Шукач відслідковує ціну 24/7 та миттєво сповіщає вас, щойно вона впаде або товар з'явиться в наявності.",
    color: 'success',
  },
]
</script>

<template>
  <section id="how-it-works" class="py-24 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style="background: radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%);">
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Почати за <span class="text-gradient">3 кроки</span>
        </h2>
        <p class="text-lg text-text-body max-w-2xl mx-auto font-medium">
          Жодних реєстрацій та завантажень. Якщо у вас є Telegram — ви вже готові до старту.
        </p>
      </div>

      <!-- Steps -->
      <div class="relative">
        <!-- Connecting line (desktop) -->
        <div
          class="hidden lg:block absolute top-[72px] left-1/2 -translate-x-1/2 w-[calc(66%-80px)] h-[2px] connector-line">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div v-for="(step, index) in steps" :key="step.number"
            class="step-card relative flex flex-col items-center text-center p-8 rounded-3xl">
            <!-- Step Number Chip -->
            <div class="absolute -top-4 left-8 step-number">{{ step.number }}</div>

            <!-- Icon Container -->
            <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 icon-ring shadow-lg"
              :class="`icon-${step.color}`">
              <component :is="step.icon" :size="32" weight="bold" :class="`icon-color-${step.color}`" />
            </div>

            <h3 class="text-xl font-extrabold text-text-heading mb-3">{{ step.title }}</h3>
            <p class="text-text-body leading-relaxed font-medium text-[15px]">{{ step.description }}</p>

            <!-- Arrow between steps (mobile) -->
            <div v-if="index < steps.length - 1" class="md:hidden mt-8 flex justify-center">
              <PhArrowDown :size="24" weight="bold" class="text-brand/30" />
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-20 text-center">
        <a href="https://t.me/shukach_ua_bot" target="_blank" rel="noopener noreferrer" class="btn-primary group">
          Спробувати зараз — це безкоштовно
        </a>
        <p class="mt-4 text-sm text-text-body font-medium">Перший крок займе менше хвилини</p>
      </div>
    </div>
  </section>
</template>



<style scoped>
.step-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: visible;
}

.step-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px -16px rgba(139, 92, 246, 0.12);
}

.step-number {
  background: var(--brand-gradient);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
}

.icon-brand {
  background: rgba(139, 92, 246, 0.1);
}

.icon-brand i {
  color: var(--brand);
}

.icon-accent {
  background: rgba(250, 204, 21, 0.12);
}

.icon-accent i {
  color: #ca8a04;
}

.icon-success {
  background: rgba(34, 197, 94, 0.1);
}

.icon-success i {
  color: var(--success);
}

.icon-color-brand {
  color: var(--brand);
}

.icon-color-accent {
  color: #ca8a04;
}

.icon-color-success {
  color: var(--success);
}

.connector-line {
  background: linear-gradient(90deg, rgba(139, 92, 246, 0.2), rgba(192, 132, 252, 0.3), rgba(139, 92, 246, 0.2));
}
</style>

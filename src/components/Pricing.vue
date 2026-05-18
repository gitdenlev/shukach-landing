<script setup>
const plans = [
  {
    name: 'Базовий',
    price: '0 ₴',
    description: 'Для легкого старту',
    features: [
      { text: '3 активних слоти', status: true },
      { text: 'Оновлення кожні 12 год', status: true },
      { text: 'Загальна черга', status: true },
      { text: 'Будь-яка знижка', status: true },
      { text: 'Моніторинг наявності', status: false },
    ],
    button: 'Почати безкоштовно',
    popular: false
  },
  {
    name: 'Скаут',
    price: '149 ⭐️',
    period: '/ міс',
    description: 'Для справжніх мисливців',
    features: [
      { text: '15 активних слотів', status: true },
      { text: 'Оновлення щогодини ⚡', status: true },
      { text: 'Пріоритет №1 🚀', status: true },
      { text: 'Цільова ціна ✅', status: true },
      { text: 'Моніторинг наявності', status: true },
    ],
    button: 'Отримати Premium',
    popular: true
  },
  {
    name: 'Слоти',
    price: '49 ⭐️',
    period: '/ раз',
    description: 'Коли треба більше',
    features: [
      { text: '+3 до поточних слотів', status: true },
      { text: 'Без терміну дії', status: true },
      { text: 'Загальна черга', status: true },
      { text: 'Будь-яка знижка', status: true },
      { text: 'Без моніторингу', status: false },
    ],
    button: 'Купити слоти',
    popular: false
  }
]
</script>

<template>
  <section id="pricing" class="py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Прості та прозорі <span class="text-gradient">тарифи</span>
        </h2>
        <p class="text-lg text-slate-500 max-w-2xl mx-auto">
          Обирайте план, який підходить саме вам. Економія стає ще приємнішою, коли ви контролюєте кожну гривню.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <div v-for="plan in plans" :key="plan.name"
          class="relative flex flex-col p-8 card-premium rounded-none md:rounded-3xl"
          :class="{ 'border-brand/30 shadow-brand/10': plan.popular }">
          
          <!-- Popular Badge -->
          <div v-if="plan.popular"
            class="absolute -top-4 left-1/2 -translate-x-1/2 highlight-badge shadow-lg">
            Найпопулярніший
          </div>

          <div class="mb-8">
            <h3 class="text-xl font-bold mb-2">{{ plan.name }}</h3>
            <p class="text-text-body text-sm font-medium">{{ plan.description }}</p>
          </div>

          <div class="flex items-baseline gap-1 mb-8">
            <span class="text-4xl font-extrabold text-text-heading">{{ plan.price }}</span>
            <span v-if="plan.period" class="text-text-body font-medium">{{ plan.period }}</span>
          </div>

          <ul class="space-y-4 mb-10 flex-grow">
            <li v-for="feature in plan.features" :key="feature.text" class="flex items-center gap-3 text-sm font-medium"
              :class="feature.status ? 'text-text-heading' : 'text-text-body/50'">
              <i v-if="feature.status" class="ph-bold ph-check-circle text-brand text-lg"></i>
              <i v-else class="ph-bold ph-minus-circle text-slate-200 text-lg"></i>
              {{ feature.text }}
            </li>
          </ul>

          <a href="https://t.me/shukach_ua_bot"
            class="flex items-center justify-center w-full text-center py-4 rounded-xl font-bold transition-all"
            :class="plan.popular ? 'btn-primary' : 'btn-secondary'">
            {{ plan.button }}
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
</style>

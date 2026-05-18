<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Хто такий Шукач?',
    answer: 'Шукач — це розумний Telegram-бот, який допомагає економити час та гроші, автоматично відстежуючи ціни та наявність товарів у найбільших магазинах України.',
    open: true
  },
  {
    question: 'Як почати відстежувати ціну?',
    answer: 'Знайдіть товар, який вас цікавить, скопіюйте посилання на нього та надішліть це посилання у бот.',
    open: false
  },
  {
    question: 'Які магазини підтримує бот?',
    answer: 'Ми підтримуємо понад 50 провідних ритейлерів України, включаючи маркетплейси, магазини електроніки, косметики та побутових товарів.',
    open: false
  },
  {
    question: 'Як я дізнаюся про знижку?',
    answer: 'Як тільки ціна на ваш товар впаде, Шукач надішле вам миттєве push-сповіщення прямо в Telegram з прямим посиланням на покупку.',
    open: false
  },
  {
    question: 'Що дає підписка "Скаут"?',
    answer: 'Підписка "Скаут" (Premium) дозволяє відстежувати до 15 товарів одночасно з частотою перевірки кожну годину та надає пріоритет у черзі сповіщень.',
    open: false
  },
  {
    question: 'Як оплатити преміум-функції?',
    answer: 'Оплата здійснюється максимально зручно через Telegram Stars (XTR) прямо всередині месенджера. Ніяких сторонніх сервісів або введення карт.',
    open: false
  }
])

const toggleFaq = (index) => {
  const currentState = faqs.value[index].open
  faqs.value.forEach(faq => faq.open = false)
  faqs.value[index].open = !currentState
}
</script>

<template>
  <section id="faq" class="py-24 relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
          Відповіді на <span class="text-gradient">популярні питання</span>
        </h2>
        <p class="text-lg text-slate-500 font-medium">Все, що ви хотіли знати про роботу Шукача</p>
      </div>

      <div class="space-y-6">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="card-premium rounded-none md:rounded-3xl overflow-hidden"
          :class="{ 'border-brand/30 shadow-brand/10': faq.open }"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full px-8 py-6 text-left flex items-center justify-between gap-6 group transition-colors"
          >
            <span class="font-bold text-text-heading text-lg md:text-xl">{{ faq.question }}</span>
            <div class="w-10 h-10 rounded-full bg-bg-main flex items-center justify-center shrink-0 group-hover:bg-brand/10 transition-colors">
              <i 
                class="ph-bold ph-caret-down text-brand transition-transform duration-500"
                :class="{ 'rotate-180': faq.open }"
              ></i>
            </div>
          </button>
          
          <div 
            v-if="faq.open"
            class="px-8 pb-8 text-text-body leading-relaxed font-medium text-[16px] md:text-[17px] animate-slide-down"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slide-down {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-down {
  animation: slide-down 0.4s ease-out forwards;
}
</style>

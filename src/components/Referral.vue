<script setup>
import { PhShareNetwork, PhUserPlus, PhGift } from '@phosphor-icons/vue'
</script>

<template>
  <section id="referral" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Standard Heading -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Більше друзів — <span class="text-gradient">більше слотів</span>
        </h2>
        <p class="text-lg text-text-body max-w-2xl mx-auto">
          Запрошуйте близьких до Шукача та розширюйте свої можливості відстеження абсолютно безкоштовно.
        </p>
      </div>

      <div
        class="card-premium rounded-none md:rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 shadow-2xl">

        <!-- Text content -->
        <div class="flex-1 space-y-8">
          <h3 class="text-3xl font-extrabold text-text-heading tracking-tight">
            Отримуйте слоти <span class="text-gradient">назавжди</span>
          </h3>

          <p class="text-lg text-text-body leading-relaxed font-medium">
            Поділіться своїм посиланням з другом. Коли він додасть свій перший товар для відстеження — ви обоє отримаєте
            <span class="text-text-heading font-bold">+1 слот</span> назавжди до вашого ліміту.
          </p>

          <div class="flex flex-wrap gap-8">
            <div class="flex flex-col">
              <span class="text-3xl font-extrabold text-text-heading">3</span>
              <span class="text-xs font-bold text-text-body uppercase tracking-widest mt-1">Друзів максимум</span>
            </div>
            <div class="flex flex-col">
              <span class="text-3xl font-extrabold text-text-heading">+1</span>
              <span class="text-xs font-bold text-text-body uppercase tracking-widest mt-1">Слот за кожного</span>
            </div>
          </div>

          <div>
            <a href="https://t.me/shukach_ua_bot" target="_blank" rel="noopener noreferrer" class="btn-primary">
              <span>Отримати посилання</span>
            </a>
          </div>
        </div>

        <!-- Visual cards -->
        <div class="flex-1 grid gap-4 w-full max-w-md">
          <div class="bg-bg-main p-6 rounded-2xl border border-border-subtle flex items-center gap-5">
            <div class="w-12 h-12 bg-brand/5 rounded-xl flex items-center justify-center shrink-0">
              <PhShareNetwork :size="24" weight="bold" class="text-brand" />
            </div>
            <div>
              <p class="text-base font-bold text-text-heading">Поділіться посиланням</p>
              <p class="text-sm text-text-body font-medium">Надішліть другу в будь-який месенджер</p>
            </div>
          </div>

          <div
            class="bg-bg-main p-6 rounded-2xl border border-border-subtle flex items-center gap-5 lg:translate-x-6">
            <div class="w-12 h-12 bg-brand/5 rounded-xl flex items-center justify-center shrink-0">
              <PhUserPlus :size="24" weight="bold" class="text-brand" />
            </div>
            <div>
              <p class="text-base font-bold text-text-heading">Друг додає товар</p>
              <p class="text-sm text-text-body font-medium">Реєструється в боті за вашим посиланням</p>
            </div>
          </div>

          <div class="bg-bg-main p-6 rounded-2xl border border-border-subtle flex items-center gap-5">
            <div class="w-12 h-12 bg-success/5 rounded-xl flex items-center justify-center shrink-0">
              <PhGift :size="24" weight="bold" class="text-success" />
            </div>
            <div>
              <p class="text-base font-bold text-text-heading">Отримуєте бонуси</p>
              <p class="text-sm text-text-body font-medium">+1 слот кожному назавжди</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

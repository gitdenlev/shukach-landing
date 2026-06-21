<script setup>
import { PhTelegramLogo, PhStorefront, PhLightning, PhEye } from '@phosphor-icons/vue'
</script>

<template>
  <section class="relative pt-32 pb-20 overflow-hidden">
    <!-- Decorative Blur Circles -->
    <div
      class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none">
    </div>
    <div
      class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none">
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        <!-- Text Content -->
        <div class="w-full lg:w-3/5 text-center lg:text-left">


          <h1 class="text-[42px] md:text-[64px] font-extrabold leading-[1.1] mb-8 tracking-tight">
            Ніяких додатків — <br />
            <span class="text-gradient">лише вигідні ціни.</span>
          </h1>

          <p class="text-lg md:text-xl text-text-body mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Шукач автоматично відстежує ціни на ваші улюблені товари та миттєво сповіщає про знижки. Економте час та
            гроші без зайвих зусиль.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <a href="https://t.me/shukach_ua_bot" target="_blank" rel="noopener noreferrer" class="btn-primary group">
              <PhTelegramLogo :size="24" weight="fill" class="group-hover:rotate-12 transition-transform ease-in-out duration-300" />
              Почати економити
            </a>
            <a href="#pricing" class="btn-secondary">
              Тарифи та можливості
            </a>
          </div>

          <!-- Stats/Trust -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-90">
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <PhStorefront :size="28" weight="duotone" class="text-brand" />
                <span class="text-2xl font-bold text-slate-800">6</span>
              </div>
              <span class="text-sm text-slate-600 font-medium mt-1">Магазинів</span>
            </div>
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <PhLightning :size="28" weight="duotone" class="text-brand" />
                <span class="text-2xl font-bold text-slate-800">1 хв</span>
              </div>
              <span class="text-sm text-slate-600 font-medium mt-1">Налаштування</span>
            </div>
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <PhEye :size="28" weight="duotone" class="text-brand" />
                <span class="text-2xl font-bold text-slate-800">24/7</span>
              </div>
              <span class="text-sm text-slate-600 font-medium mt-1">Моніторинг</span>
            </div>
          </div>
        </div>

        <!-- Visual Content -->
        <div class="w-full lg:w-2/5 relative flex items-center justify-center">
          <div class="relative w-[320px] md:w-[420px] h-[420px] md:h-[520px] mx-auto">

            <!-- Phone mockup 2 (back, right) -->
            <div class="absolute right-0 top-1/2 -translate-y-1/3 z-10 scale-90 rotate-12">
              <img src="/shukach-telegram-bot-alerts-demo.webp"
                alt="Миттєві сповіщення про знижки від Telegram-бота Шукач"
                width="240" height="480" fetchpriority="high"
                class="w-[180px] md:w-[220px] mix-blend-multiply" />
            </div>

            <!-- Phone mockup 1 (front, left) -->
            <div class="absolute left-0 top-1/2 -translate-y-1/2 z-20 animate-float">
              <img src="/shukach-telegram-bot-interface-main.webp"
                alt="Інтерфейс бота Шукач на екрані смартфона"
                width="260" height="520" fetchpriority="high"
                class="w-[220px] md:w-[260px] mix-blend-multiply" />
            </div>

          </div>
        </div>


      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.perspective-1000 {
  perspective: 1000px;
}
</style>

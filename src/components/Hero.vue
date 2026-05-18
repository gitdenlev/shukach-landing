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
            <a href="https://t.me/shukach_ua_bot" class="btn-primary group">
              <i class="ph-fill ph-telegram-logo text-2xl group-hover:rotate-12 transition-transform"></i>
              Почати економити
            </a>
            <a href="#pricing" class="btn-secondary">
              Тарифи та можливості
            </a>
          </div>

          <!-- Stats/Trust -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-8 opacity-80">
            <div class="flex flex-col">
              <span class="text-2xl font-bold">100+</span>
              <span class="text-sm text-slate-500 font-medium">Магазинів</span>
            </div>
            <div class="h-10 w-px bg-slate-200 hidden sm:block"></div>
            <div class="flex flex-col">
              <span class="text-2xl font-bold">50k+</span>
              <span class="text-sm text-slate-500 font-medium">Користувачів</span>
            </div>
            <div class="h-10 w-px bg-slate-200 hidden sm:block"></div>
            <div class="flex flex-col">
              <span class="text-2xl font-bold">24/7</span>
              <span class="text-sm text-slate-500 font-medium">Моніторинг</span>
            </div>
          </div>
        </div>

        <!-- Visual Content -->
        <div class="w-full lg:w-2/5 relative">
          <div class="relative w-full aspect-square max-w-[500px] mx-auto">

            <!-- Phone mockup 1 -->
            <div class="absolute left-0 top-1/2 -translate-y-1/2 z-20 animate-float">
              <div class="relative">
                <img src="/123.png" alt="Interface 1" class="w-[220px] md:w-[260px] rounded-[2rem]" />
              </div>
            </div>

            <!-- Phone mockup 2 -->
            <div class="absolute right-0 top-1/2 -translate-y-1/3 z-10 opacity-60 scale-90 rotate-12">
              <div class="relative">
                <img src="/1234.png" alt="Interface 2" class="w-[200px] md:w-[240px] rounded-[2rem]" />
              </div>
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

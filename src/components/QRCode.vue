<script setup>
</script>

<template>
  <section class="py-24 relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 relative z-10">
      <div
        class="card-premium rounded-none md:rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border-y md:border-border-subtle overflow-hidden relative">
        
        <div class="text-center md:text-left flex-1 relative z-10">
          <h3 class="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
            Спробуйте <span class="text-gradient">просто зараз</span>
          </h3>
          <p class="text-text-body text-lg leading-relaxed max-w-md font-medium mb-8">
            Відскануйте QR-код камерою телефону, щоб миттєво перейти в Telegram-бот та почати економити на покупках.
          </p>
        </div>

        <div class="relative group">
          <div
            class="absolute inset-0 bg-brand/10 blur-2xl group-hover:bg-brand/20 transition-all duration-500 rounded-full">
          </div>
          <div class="relative bg-white p-6 rounded-3xl shadow-2xl border border-border-subtle">
            <div class="w-48 h-48 rounded-xl flex items-center justify-center">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://t.me/shukach_ua_bot"
                alt="QR-код для переходу в Telegram-бот Шукач — автоматичний моніторинг цін та знижок"
                width="200" height="200" loading="lazy" class="w-full h-full p-2" />
            </div>
            <div
              class="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap shadow-lg">
              @shukach_ua_bot
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

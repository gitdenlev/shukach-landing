<script setup>
</script>

<template>
  <footer class="bg-white border-t border-border-subtle pt-16 pb-8 mt-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Головна сітка футера -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

        <!-- Брендовий блок (зліва) -->
        <div class="col-span-1 md:col-span-5 flex flex-col gap-6 items-start">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full overflow-hidden shadow-sm border border-border-subtle">
              <img src="/shukach-bot-logo.webp" alt="Логотип Шукач — ваш надійний трекер цін та знижок у Telegram"
                width="40" height="40" class="w-10 h-10 object-cover" />
            </div>
            <span class="font-extrabold text-2xl text-text-heading tracking-tight">Шукач</span>
          </div>
          <p class="text-text-body text-base leading-relaxed max-w-sm">
            Ваш надійний помічник у світі вигідних покупок. Відстежуємо реальні знижки, щоб ви берегли свій час та
            гроші.
          </p>

          <div class="mt-2">
            <a href="https://t.me/shukach_ua_bot" target="_blank" rel="noopener noreferrer" class="btn-primary">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Відкрити бот
            </a>
          </div>
        </div>

        <!-- Колонки з посиланнями (справа) -->
        <div class="col-span-1 md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">

          <div class="flex flex-col gap-5">
            <span class="text-xs font-bold uppercase tracking-widest text-text-body/80">Продукт</span>
            <router-link to="/#stores"
              class="text-base font-medium text-text-body hover:text-brand transition-colors">Магазини</router-link>
            <router-link to="/#pricing"
              class="text-base font-medium text-text-body hover:text-brand transition-colors">Тарифи</router-link>
            <router-link to="/#referral"
              class="text-base font-medium text-text-body hover:text-brand transition-colors">Бонуси</router-link>
          </div>

          <div class="flex flex-col gap-5">
            <span class="text-xs font-bold uppercase tracking-widest text-text-body/80">Юридично</span>
            <router-link to="/privacy"
              class="text-base font-medium text-text-body hover:text-brand transition-colors">Політика
              конфіденційності</router-link>
            <router-link to="/terms"
              class="text-base font-medium text-text-body hover:text-brand transition-colors">Умови
              використання</router-link>
          </div>

          <div class="flex flex-col gap-5">
            <span class="text-xs font-bold uppercase tracking-widest text-text-body/80">Компанія</span>
            <router-link to="/about" class="text-base font-medium text-text-body hover:text-brand transition-colors">Про
              нас</router-link>
          </div>

        </div>
      </div>

      <!-- Нижня лінія з копірайтом -->
      <div class="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-text-body/80 text-sm font-medium">
          &copy; 2026 Шукач. Всі права захищено.
        </p>
      </div>

    </div>
  </footer>
</template>

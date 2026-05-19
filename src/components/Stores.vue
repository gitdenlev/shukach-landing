<script setup>
const stores = [
  { name: 'Comfy', logo: '/allo-ukraine-price-tracker.webp' },
  { name: 'Allo', logo: '/allo-ukraine-price-tracker.webp' },
  { name: 'Citrus', logo: '/allo-ukraine-price-tracker.webp' },
  { name: 'Moyo', logo: '/allo-ukraine-price-tracker.webp' },
  { name: 'Foxtrot', logo: '/allo-ukraine-price-tracker.webp' },
  { name: 'Brain', logo: '/allo-ukraine-price-tracker.webp' },
  { name: 'Epicentr', logo: '/allo-ukraine-price-tracker.webp' },
  { name: 'Rozetka', logo: '/allo-ukraine-price-tracker.webp' }
]
</script>

<template>
  <section id="stores" class="py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
          Підтримуємо <span class="text-gradient">улюблені магазини</span>
        </h2>
        <p class="text-lg text-text-body max-w-3xl mx-auto font-medium">
          Ми інтегровані з найбільшими маркетплейсами України. Моніторинг працює автоматично для тисяч товарів.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="store in stores" :key="store.name" class="card-premium p-8 flex items-center justify-center group">
          <img :src="store.logo" :alt="`Логотип магазину ${store.name} — моніторинг цін через Telegram-бот Шукач`"
            width="120" height="40" loading="lazy"
            class="h-10 w-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

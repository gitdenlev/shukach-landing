<script setup>
const stores = [
  { name: 'Comfy', logo: '/shops/shukach-supported-shop-comfy.webp' },
  { name: 'Allo', logo: '/shops/shukach-supported-shop-allo.webp' },
  { name: 'Citrus', logo: '/shops/shukach-supported-shop-citrus.webp' },
  { name: 'Moyo', logo: '/shops/shukach-supported-shop-moyo.webp' },
  { name: 'Foxtrot', logo: '/shops/shukach-supported-shop-foxtrot.webp' },
  { name: 'Brain', logo: '/shops/shukach-supported-shop-brain.webp' }
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

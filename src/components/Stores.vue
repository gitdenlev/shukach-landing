<script setup>
const stores = [
  { name: 'Comfy', logo: 'https://comfy.ua/skin/frontend/enterprise/comfy_3/modules/common/img/logo_main2.svg' },
  { name: 'Allo', logo: 'https://logo.clearbit.com/allo.ua' },
  { name: 'Citrus', logo: 'https://cdn.citrus.ua/images/brands/citrus.svg' },
  { name: 'Moyo', logo: 'https://logo.clearbit.com/moyo.ua' },
  { name: 'Foxtrot', logo: 'https://logo.clearbit.com/foxtrot.com.ua' },
  { name: 'Brain', logo: 'https://logo.clearbit.com/brain.com.ua' },
  { name: 'Epicentr', logo: 'https://logo.clearbit.com/epicentrk.ua' },
  { name: 'Rozetka', logo: 'https://logo.clearbit.com/rozetka.com.ua' }
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
        <div 
          v-for="store in stores" 
          :key="store.name"
          class="card-premium p-8 flex items-center justify-center group"
        >
          <img 
            :src="store.logo" 
            :alt="store.name" 
            class="h-10 w-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
          />
        </div>
      </div>

      <!-- Marquee-like subtext -->
      <div class="mt-16 flex justify-center">
        <div class="inline-flex items-center gap-4 bg-bg-card px-6 py-3 rounded-full border border-border-subtle shadow-sm">
          <span class="flex -space-x-2">
            <div v-for="i in 3" :key="i" class="w-8 h-8 rounded-full border-2 border-white bg-bg-main flex items-center justify-center overflow-hidden">
               <i class="ph ph-user text-text-body text-xs"></i>
            </div>
          </span>
          <span class="text-sm font-bold text-text-heading">Приєднуйтесь до 50,000+ користувачів</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

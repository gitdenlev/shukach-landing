<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CookieConsent from './components/CookieConsent.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>

<template>
  <div class="antialiased overflow-x-hidden relative min-h-screen flex flex-col">
    <div class="bg-mesh"></div>
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
    <CookieConsent />
    <ScrollToTop />
    <SpeedInsights />
  </div>
</template>

<style>
/* Global styles are now in style.css */
</style>

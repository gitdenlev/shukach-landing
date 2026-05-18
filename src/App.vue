<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CookieConsent from './components/CookieConsent.vue'
</script>

<template>
  <div class="antialiased overflow-x-hidden relative min-h-screen flex flex-col">
    <div class="bg-mesh"></div>
    <Header />
    <div class="flex-grow">
      <router-view />
    </div>
    <Footer />
    <CookieConsent />
  </div>
</template>

<style>
/* Global styles are now in style.css */
</style>

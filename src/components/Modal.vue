<script setup>
defineProps({
  show: Boolean,
  title: String
})

defineEmits(['close'])
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" @click="$emit('close')"></div>
      
      <!-- Modal Content -->
      <div class="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl border border-border-subtle overflow-hidden transform transition-all">
        <div class="p-8 md:p-12">
          <div class="flex items-center justify-between mb-8">
            <h3 class="text-2xl font-extrabold text-text-heading tracking-tight">{{ title }}</h3>
            <button 
              @click="$emit('close')"
              class="w-10 h-10 rounded-full bg-bg-main flex items-center justify-center text-text-body hover:text-text-heading transition-colors"
            >
              <i class="ph ph-x text-xl"></i>
            </button>
          </div>
          
          <div class="text-text-body leading-relaxed">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

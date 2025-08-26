<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <div
      v-if="show"
      class="fixed left-0 top-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
    >
      <Transition
        enter-active-class="transition duration-300 ease-out delay-150"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div
          v-if="show"
          class="bg-custom-black-adventage rounded-xl shadow-lg w-full md:max-w-md mx-auto p-8 z-50"
        >
          <!-- Прогресс бар -->
          <div class="w-full bg-custom-back-popup-input custom-border-popup rounded-md h-10 overflow-hidden">
            <div 
              class="bg-custom-gradient h-full transition-all duration-300 flex items-center justify-center text-white"
              :style="{ width: `${progress}%` }"
            >
              <span v-if="progress > 0">{{ progress }}%</span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
  progress: number
}>()
</script> 
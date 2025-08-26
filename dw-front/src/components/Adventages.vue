<template>
  <div class="shadow-lg w-full max-w-full h-full flex flex-col items-center justify-center gap-y-20 px-10 md:px-8">

    <!-- Заголовок и подзаголовок -->
    <div class="flex flex-col items-center justify-center gap-y-2 z-10 text-center">
      <span class="text-titles-color text-2xl px-4 py-1.5 rounded-3xl bg-custom-gradient-titles border-2 border-violet-300">{{ $t('adventages.title') }}</span>
      <h1 class="text-center text-6xl custom-gradient-text-title">{{ $t('adventages.title2') }}</h1>
    </div>

    <img src="../assets/img/glow.png" alt="icon" class="absolute z-10 h-1/4 pointer-events-none"/>
    <img src="../assets/img/Dots/AdventagesDots.png" alt="icon" class="absolute w-full z-0 pointer-events-none" />

    <!-- Основной контент -->
    <div class="flex flex-col w-full gap-y-20 select-text">

      <!-- Первый ряд карточек -->
      <div class="flex flex-wrap gap-x-16 gap-y-20">

        <div class="flex flex-col px-2 border-bottom-custom-adventage rounded-xl bg-custom-black-adventage flex-1 min-w-[250px] z-10">
          <img src="@/assets/img/Adventages/Combat.png" alt="icon" class="pointer-events-none">
          <div class="px-4 pb-4">
            <!-- <h1 class="text-white flex items-center text-2xl">
              <img src="@/assets/img/icons/Adventages/Combat.svg" alt="icon" class="w-7 h-7 mr-2">
              Combat
            </h1> -->
            <h1 class="text-white flex items-center text-2xl">
              {{ $t('adventages.first.name') }}
            </h1>
            <!-- <p class="text-custom-white-adventage">
              With flawlesshack you will always defeat everyone, because our cheat bypasses a huge number of anti-cheats.
            </p> -->
            <p class="text-custom-white-adventage">
              {{ $t('adventages.first.text') }}            
            </p>
          </div>
        </div>

        <div class="flex flex-col px-2 border-bottom-custom-adventage rounded-xl bg-custom-black-adventage flex-1 min-w-[250px] z-10">
          <img src="@/assets/img/Adventages/Visuals.png" alt="icon" class="pointer-events-none">
          <div class="px-4 pb-4">
            <!-- <h1 class="text-white flex items-center text-2xl">
              <img src="@/assets/img/icons/Adventages/Visuals.svg" alt="icon" class="w-7 h-7 mr-2">
              Visuals
            </h1> -->
            <h1 class="text-white flex items-center text-2xl">
              {{ $t('adventages.second.name') }}
            </h1>
            <!-- <p class="text-custom-white-adventage">
              Explore stunning visual features of the client. We made huge reliance on visual features.
            </p> -->
            <p class="text-custom-white-adventage">
              {{ $t('adventages.second.text') }}
            </p>
          </div>
        </div>

        <div class="flex flex-col px-2 border-bottom-custom-adventage rounded-xl bg-custom-black-adventage flex-1 min-w-[250px] z-10">
          <img src="@/assets/img/Adventages/Movement.png" alt="icon" class="pointer-events-none">
          <div class="px-4 pb-4">
            <!-- <h1 class="text-white flex items-center text-2xl">
              <img src="@/assets/img/icons/Adventages/Movement.svg" alt="icon" class="w-7 h-7 mr-2 ">
              Movement
            </h1> -->
            <h1 class="text-white flex items-center text-2xl">
              {{ $t('adventages.third.name') }}
            </h1>
            <p class="text-custom-white-adventage">
              {{ $t('adventages.third.text') }}
            </p>
            <!-- <p class="text-custom-white-adventage">
              We also provide you with fly, speed, and other functions that perfectly bypass FunTime and other servers.
            </p> -->
          </div>
        </div>
      </div>

      <!-- Второй ряд карточек -->
      <div class="flex flex-wrap gap-x-16 justify-center">
        <div class="flex flex-col px-2 border-bottom-custom-adventage rounded-xl bg-custom-black-adventage flex-1 min-w-[250px] max-w-[400px] z-10">
          <img src="@/assets/img/Adventages/Linux.png" alt="icon" class="pointer-events-none">
          <div class="px-4 pb-4">
            <h1 class="text-white flex items-center text-2xl">
              {{ $t('adventages.fourth.name') }}
            </h1>
            <p class="text-custom-white-adventage">
              {{ $t('adventages.fourth.text') }}
            </p>
          </div>
        </div>

        <div class="flex flex-col px-2 border-bottom-custom-adventage rounded-xl bg-custom-black-adventage flex-1 min-w-[250px] max-w-[400px] z-10">
          <img src="@/assets/img/Adventages/Java.png" alt="icon" class="pointer-events-none">
          <div class="px-4 pb-4">
            <h1 class="text-white flex items-center text-2xl">
              {{ $t('adventages.fifth.name') }}
            </h1>
            <p class="text-custom-white-adventage">
              {{ $t('adventages.fifth.text') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
      
<script setup lang="ts">

</script>

      
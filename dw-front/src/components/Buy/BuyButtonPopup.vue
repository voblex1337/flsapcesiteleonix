<template>
  <button
    :disabled="!isPlanSelected"
    :class="[
      'flex items-center rounded-md px-4 py-2 text-3xl transition-shadow duration-200 text-white',
      isPlanSelected
        ? 'shadow-[0_4px_15px_rgba(255,255,255,0.5)] cursor-pointer bg-custom-gradient'
        : 'shadow-none cursor-not-allowed opacity-80 bg-custom-gradient'
    ]"
    @click="handleClick">
    {{ $t('pricing.button') }}
    <img src="@/assets/img/icons/buyico.svg" alt="icon" class="ml-2 w-10 h-10">
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useSubscriptionStore } from '@/stores/SubStore';

const subscriptionStore = useSubscriptionStore();
const isPlanSelected = computed(() => !!subscriptionStore.selectedPlan);

const handleClick = () => {
    if (isPlanSelected.value) {
        getPayment();
    }
};

const getPayment = () => {
    const sub_info = subscriptionStore.selectedPlan;
    let url = '';

    switch (sub_info.sub_type) {
        case 'LIFETIME':
            url = 'https://funpay.com/lots/offer?id=37156592';
            break;
        case 'YEAR':
            url = 'https://funpay.com/lots/offer?id=37156762';
            break;
        case 'THREE_MONTHS':
            url = 'https://funpay.com/lots/offer?id=37157451';
            break;
        case 'MONTH':
            url = 'https://funpay.com/lots/offer?id=37157580';
            break;
        default:
            console.error('Unknown subscription type');
            return;
    }

    window.location.href = url;
};
</script>


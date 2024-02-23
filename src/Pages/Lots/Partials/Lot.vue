<script setup>
const props = defineProps({
  lot: {
    type: Object,
    required: true
  }
});

const truncate = (string, value) => {
    return string.length > value ? string.substring(0, value) + "..." : string;
}
</script>

<template>
    <router-link :to="`/lots/${lot.id}`">
        <div class="p-4 text-my-gray4 rounded-2xl border-0.5 border-my-gray2 hover:border-my-lila transition duration-500 cursor-pointer lg:hover:-translate-y-1 flex items-center justify-between md:space-x-10">
            <div class="w-full">
                <p class="hidden md:flex text-sm font-light text-my-gray3 mb-4">• {{ lot.category }}</p>
                <h2 class="text-base md:text-xl font-bold">{{ lot.title }}</h2>
                <p class="hidden md:flex text-sm font-light text-my-gray3 mt-4">{{ truncate(lot.description, 100) }}</p>
                <div class="flex justify-between items-center mt-4 space-x-2">
                    <p class="text-sm font-light text-my-gray3">{{ lot.bids_count }} bids</p>
                    <p class="text-sm font-light text-my-gray3">Max bid: <span class="text-my-violet font-normal">${{ lot.max_bid }}</span></p>
                </div>
            </div>
            <img :src="lot.image" alt="Lot image" class="w-32 h-32 md:w-48 md:h-48 object-cover ml-4 rounded-2xl">
        </div>
    </router-link>
</template>
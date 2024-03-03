<script setup>
const props = defineProps({
    auction: {
    type: Object,
    required: true
  }
});
</script>

<template>
    <router-link :to="'/lots-edit'">
        <div class="p-4 text-my-gray4 rounded-2xl border-0.5 border-my-gray2 hover:border-my-lila transition duration-500 cursor-pointer lg:hover:-translate-y-1 flex items-center justify-between md:space-x-10">
            <div class="w-full">
                <p class="text-sm font-light text-my-gray3 mb-4">
                    Status: 
                    <span :class="{
                    'text-green-400': auction.status === 'Active', 
                    'text-orange-400': auction.status === 'Finished', 
                    'text-red-400': auction.status === 'Failed'
                    }">{{ auction.status }}</span>
                </p>
                <h2 class="text-base md:text-xl font-bold">{{ auction.title }}</h2>
                <div class="flex justify-between items-center mt-4 space-x-2">
                    <p class="text-sm font-light text-my-gray3">{{ auction.bids_count }} bids</p>
                    <p class="text-sm font-light text-my-gray3">Max bid: <span class="text-my-violet font-normal">${{ auction.max_bid }}</span></p>
                </div>
            </div>
            <img :src="auction.image" alt="Lot image" class="w-32 h-32 md:w-48 md:h-48 object-cover ml-4 rounded-2xl">
        </div>
    </router-link>
</template>
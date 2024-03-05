<script setup>
const props = defineProps({
    bid: {
    type: Object,
    required: true
  }
});
</script>

<template>
    <router-link :to="'/bids'">
        <div class="p-4 text-my-gray4 rounded-2xl border-0.5 border-my-gray2 hover:border-my-lila transition duration-500 cursor-pointer lg:hover:-translate-y-1 flex items-center justify-between md:space-x-10">
            <div class="w-full">
                <p class="text-sm font-light text-my-gray3 mb-4">
                    Auction status: 
                    <span :class="{
                    'text-green-400': bid.auction_status === 'Active', 
                    'text-orange-400': bid.auction_status === 'Finished', 
                    'text-red-400': bid.auction_status === 'Failed'
                    }">{{ bid.auction_status }}</span>
                </p>
                <h2 class="text-base md:text-xl font-bold">{{ bid.lot_title }}</h2>
                <p class="text-sm font-light text-my-gray3 mt-4">Bid size: <span class="text-my-violet font-normal">${{ bid.bid_size }}</span></p>
            </div>
            <img :src="bid.lot_image" alt="Lot image" class="w-32 h-32 md:w-48 md:h-48 object-cover ml-4 rounded-2xl">
        </div>
    </router-link>
</template>
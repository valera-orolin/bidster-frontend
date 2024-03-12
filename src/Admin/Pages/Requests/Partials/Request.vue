<script setup>
const props = defineProps({
    request: {
    type: Object,
    required: true
  }
});
</script>

<template>
    <router-link :to="'/admin/requests/auctions' + (request.type === 'Add' ? '/create' : '/edit')">
        <div class="p-4 text-my-gray4 rounded-2xl border-0.5 border-my-gray2 hover:border-my-lila transition duration-500 cursor-pointer lg:hover:-translate-y-1 flex items-center justify-between md:space-x-10">
            <div class="w-full">
                <p class="text-sm font-light text-my-gray3 mb-4">
                    Type: 
                    <span :class="{
                    'text-teal-400': request.type === 'Add', 
                    'text-fuchsia-400': request.type === 'Change', 
                    }">{{ request.type }}</span>
                </p>
                <h2 class="text-base md:text-xl font-bold">{{ request.auction_title }}</h2>
                <p class="text-sm font-light text-my-gray3 mt-4">{{ request.date_time }}</p>
            </div>
            <img :src="request.auction_image" alt="Lot image" class="w-32 h-32 md:w-48 md:h-48 object-cover ml-4 rounded-2xl">
        </div>
    </router-link>
</template>
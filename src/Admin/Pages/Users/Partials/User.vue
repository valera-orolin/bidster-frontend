<script setup>
const props = defineProps({
    user: {
    type: Object,
    required: true
  }
});
</script>

<template>
    <router-link :to="'/admin/users/edit'">
        <div class="p-4 text-my-gray4 rounded-2xl border-0.5 border-my-gray2 hover:border-my-lila transition duration-500 cursor-pointer lg:hover:-translate-y-1 flex items-center justify-between md:space-x-10">
            <div class="w-full">
                <h2 class="text-base md:text-xl font-bold">{{ user.name }}</h2>
                <p class="text-sm font-light text-my-gray3 mt-3">
                    Status: 
                    <span :class="{
                    'text-green-400': user.status === 'Active', 
                    'text-red-400': user.status === 'Banned'
                    }">{{ user.status }}</span>
                </p>
                <p class="text-sm font-light text-my-gray3 mt-3">Registration date: {{ user.registration_date }}</p>
                <p class="text-sm font-light text-my-gray3 mt-3">Auctions count: {{ user.auctions_count }}</p>
                <p class="text-sm font-light text-my-gray3 mt-3">Bids count: {{ user.bids_count }}</p>
            </div>
            <img :src="user.avatar" alt="Lot image" class="w-32 h-32 md:w-48 md:h-48 object-cover ml-4 rounded-2xl">
        </div>
    </router-link>
</template>
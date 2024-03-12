<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import Request from './Partials/Request.vue'
import { ref } from 'vue';

const requests = ref([
  { id: 1, auction_title: 'MacBook Pro 14', auction_image: 'https://image.cnbcfm.com/api/v1/image/106452529-1584646955287macbook-air-2020-10.png?v=1584647237&w=929&h=523&vtcrop=y', type: 'Add', date_time: 'Today, 09:20' },
  { id: 2, auction_title: 'iPhone 13 Pro', auction_image: 'https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F12%2F29%2Faiphone13pro-cov-sho-sel-1-1065947-1640788556_2.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop', type: 'Change', date_time: 'Today, 12:02' },
]);
</script>

<template>
    <AuthenticatedLayout :requestsPage="true">
        <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Request v-for="request in requests" :key="request.id" :request="request" />
        </div>
    </AuthenticatedLayout>
</template>
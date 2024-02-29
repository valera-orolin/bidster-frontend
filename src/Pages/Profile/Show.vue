<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'

const person = {
    avatar: 'https://assets-global.website-files.com/65361a9ab9e6601a1846a442/654231cc1515525d298416bf_testimonial-image-01.jpg',
    name: 'Alice Doe',
    rating: 4.5,
    auctions: 10,
    description: 'Experienced tech seller with a wide range of phones and laptops. Committed to providing top-quality devices, excellent service, and fast shipping. Your satisfaction is my priority.',
}
</script>

<template>
    <AuthenticatedLayout>
        <div class="flex justify-center">
            <div class="flex flex-row space-x-10 items-center my-gradient-bord-black border-2 border-transparent rounded-2xl p-4 lg:p-12 text-my-gray4"> 
                <div class="w-16 h-16 md:w-80 md:h-80 overflow-hidden rounded-2xl">
                        <img :src="person.avatar" alt="Avatar" class="object-cover min-w-full min-h-full">
                </div>
                <div class="space-y-3 w-160 tracking-widest">
                    <p class="text-5xl font-semibold text-my-gray3">{{ person.name }}</p>
                    <div class="flex items-center space-x-2">
                        <font-awesome-icon :icon="['fas', 'star']" class="text-base text-my-orange my-gradient-text" />
                        <p class="text-base font-light text-my-gray3 mt-0.5">{{ person.rating }}</p>
                    </div>
                    <p class="text-base font-light text-my-gray3">{{ person.description }}</p>
                    <p class="text-sm text-gray-500">{{ person.auctions }} auctions held</p>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
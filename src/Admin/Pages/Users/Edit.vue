<script setup>
import ButtonArrow from '../../../Components/ButtonArrow.vue';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import ManageForm from './Partials/ManageForm.vue';
import { ref } from 'vue';

const user = ref({ name: 'Bob', status: 'Active', registration_date: '13.05.2023', email: 'example@text.com', auctions_count: 0, bids_count: 10, avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449ba3af2f78b3f1233cda_team-02-p-500.jpg' });
</script>

<template>
    <AuthenticatedLayout>
        <div class="flex justify-center">
            <div class="space-y-12 my-animation-in-up animation-lg">
                <div class="border-2 border-transparent rounded-2xl my-gradient-bord p-4 lg:p-12 text-my-gray4 lg:my-12 w-full lg:w-260">
                    <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
                        Manage
                        <span class="my-gradient-text">{{ user.name }}</span>
                    </div>

                    <div class="w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden rounded-2xl">
                        <img :src="user.avatar" alt="Avatar" class="object-cover min-w-full min-h-full">
                    </div>

                    <div class="text-base mt-10 pr-10">
                        <router-link :to="'/profile'">
                            <ButtonArrow text="See profile" :colorsInversed="true" />
                        </router-link>
                    </div>

                    <ManageForm :user="user" />
                </div>

                <div class="border-2 border-transparent rounded-2xl my-gradient-bord p-4 lg:p-12 text-my-gray4 lg:my-12 w-full lg:w-260">
                    <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
                        Statistics
                    </div>

                    <div class="space-y-6">
                        <p class="font-light text-my-gray3 mt-3">
                            Status: 
                            <span :class="{
                            'text-green-400': user.status === 'Active', 
                            'text-red-400': user.status === 'Banned'
                            }">{{ user.status }}</span>
                        </p>
                        <p class="font-light text-my-gray3">Registration date: {{ user.registration_date }}</p>
                        <p class="font-light text-my-gray3">Email: {{ user.email }}</p>
                        <p class="font-light text-my-gray3 mt-3">Auctions count: {{ user.auctions_count }}</p>
                        <p class="font-light text-my-gray3 mt-3">Bids count: {{ user.bids_count }}</p>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
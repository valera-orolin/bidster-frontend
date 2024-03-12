<script setup>
import ButtonLila from '../../../Components/ButtonLila.vue';
import ButtonWhite from '../../../Components/ButtonWhite.vue';
import OldAuctionVersion from './Partials/Auction.vue';
import NewAuctionVersion from './Partials/Auction.vue';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
</script>

<template>
    <AuthenticatedLayout>
        <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Old Version
        </div>
        <OldAuctionVersion />

        <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 mt-24">
            New Version
        </div>
        <NewAuctionVersion />

        <div class="flex justify-center">
            <div class="border-2 border-transparent rounded-2xl my-gradient-bord p-4 lg:p-12 text-my-gray4 lg:my-12 w-full lg:w-260">
                <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                    Manage Request
                </div>

                <form class="text-my-gray3 text-base md:space-x-6">
                    <ButtonWhite class="mt-10" :text="'Accept new version'" />
                    <ButtonLila class="mt-10" :text="'Decline'" />
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
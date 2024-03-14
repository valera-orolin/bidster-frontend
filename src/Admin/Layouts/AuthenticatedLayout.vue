<script setup>
import NavPanel from '../Components/NavPanel.vue';
import Footer from '../../Components/Footer.vue';
import AuctionsSearchForm from '../Pages/Auctions/Partials/SearchForm.vue';
import UsersSearchForm from '../Pages/Users/Partials/SearchForm.vue';
import RequestsSearchForm from '../Pages/Requests/Partials/SearchForm.vue';
import { ref, defineProps } from 'vue';

const props = defineProps({
  headerText: Boolean,
  auctionsPage: Boolean,
  usersPage: Boolean,
  requestsPage: Boolean,
});

const showSearchForm = ref(false);
const toggleSearchForm = () => {
    showSearchForm.value = !showSearchForm.value;
};
</script>

<template>
    <div class="flex flex-col h-screen bg-my-black">
        <div class="fixed top-0 left-0 w-full z-50">
            <NavPanel />
        </div>
        
        <template v-if="auctionsPage || usersPage || requestsPage">
            <div class="w-full bg-my-gray2 mt-24 md:mt-28 text-center">
                <div class="my-animation-in-up">
                    <div v-if="auctionsPage" class="text-3xl md:text-6xl text-my-gray4 font-bold tracking-widest mt-12 md:mt-24">
                        Manage
                        <span class="my-gradient-text">Auctions</span>
                    </div>
                    <div v-if="usersPage" class="text-3xl md:text-6xl text-my-gray4 font-bold tracking-widest mt-12 md:mt-24">
                        Manage
                        <span class="my-gradient-text">Users</span>
                    </div>
                    <div v-if="requestsPage" class="text-3xl md:text-6xl text-my-gray4 font-bold tracking-widest mt-12 md:mt-24">
                        Manage
                        <span class="my-gradient-text">Requests</span>
                    </div>

                    <button @click="toggleSearchForm" class="py-2 px-3 md:py-4 md:px-5 bg-my-black rounded-full text-my-gray3 text-lg md:text-xl mt-6 border border-my-black hover:border-my-lila transition duration-500" title="Show search form">
                        <font-awesome-icon :icon="['fas', showSearchForm ? 'chevron-up' : 'chevron-down']" />
                    </button>

                    <AuctionsSearchForm v-if="showSearchForm && auctionsPage" />
                    <UsersSearchForm v-if="showSearchForm && usersPage" />
                    <RequestsSearchForm v-if="showSearchForm && requestsPage" />

                    <div class="mt-12 md:mb-24"></div>
                </div>
            </div>
        </template>

        <template v-if="headerText">
            <div class="w-full bg-my-gray2 mt-24 md:mt-28 text-center py-12 md:py-24">
                <div class="text-3xl md:text-6xl text-my-gray4 font-bold tracking-widest my-animation-in-up">
                    <slot name="headerText" />
                    <span class="my-gradient-text">
                        <slot name="gradientText" />
                    </span>
                </div>
            </div>
        </template>

        <div v-bind:class="{'md:px-32 p-4 md:pb-16 bg-my-black flex-grow': true, 'md:pb-16 pt-24 md:pt-36': !headerText && !auctionsPage && !usersPage && !requestsPage, 'pt-4 md:pt-16': headerText || auctionsPage || usersPage || requestsPage}">
            <main>
                <slot />
            </main>
        </div>

        <Footer />
    </div>
</template>
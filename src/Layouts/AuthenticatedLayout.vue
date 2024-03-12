<script setup>
import NavPanel from '../Components/NavPanel.vue';
import Footer from '../Components/Footer.vue';
import SearchForm from '../Pages/Lots/Partials/SearchForm.vue';
import { ref, defineProps } from 'vue';

const props = defineProps({
  headerText: Boolean,
  mainPage: Boolean
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
        
        <template v-if="mainPage">
            <div class="w-full bg-my-gray2 mt-24 md:mt-28 text-center">
                <div class="text-3xl md:text-6xl text-my-gray4 font-bold tracking-widest mt-12 md:mt-24">
                    <span class="my-gradient-text">Auctions</span>
                </div>
                <button @click="toggleSearchForm" class="py-2 px-3 md:py-4 md:px-5 bg-my-black rounded-full text-my-gray3 text-lg md:text-xl mt-6 border border-my-black hover:border-my-lila transition duration-500" title="Show search form">
                    <font-awesome-icon :icon="['fas', showSearchForm ? 'chevron-up' : 'chevron-down']" />
                </button>
                <SearchForm v-if="showSearchForm" />
                <div class="mt-12 md:mb-24"></div>
            </div>
        </template>

        <template v-if="headerText">
            <div class="w-full bg-my-gray2 mt-24 md:mt-28 text-center py-12 md:py-24">
                <div class="text-3xl md:text-6xl text-my-gray4 font-bold tracking-widest">
                    <slot name="headerText" />
                    <span class="my-gradient-text">
                        <slot name="gradientText" />
                    </span>
                </div>
            </div>
        </template>

        <div v-bind:class="{'md:px-32 p-4 md:pb-16 bg-my-black flex-grow': true, 'md:pb-16 pt-24 md:pt-36': !headerText && !mainPage, 'pt-4 md:pt-16': headerText || mainPage}">
            <main>
                <slot />
            </main>
        </div>

        <Footer />
    </div>
</template>
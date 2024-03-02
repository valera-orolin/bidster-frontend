<script setup>
import NavPanel from '../Components/NavPanel.vue';
import Footer from '../Components/Footer.vue';
import { ref, defineProps } from 'vue';

const props = defineProps({
  headerText: Boolean
})

</script>

<template>
    <div class="flex flex-col h-screen bg-my-black">
        <div class="fixed top-0 left-0 w-full z-50">
            <NavPanel />
        </div>

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

        <div v-bind:class="{'p-4 md:px-32 md:pb-16 pt-24 md:pt-36 bg-my-black flex-grow': true, 'pt-4 md:pt-14': headerText}">
            <main>
                <slot />
            </main>
        </div>

        <Footer />
    </div>
</template>
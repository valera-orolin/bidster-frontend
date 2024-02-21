<script setup>
import NavPanel from '../Components/NavPanel.vue';
import Footer from '../Components/Footer.vue';
</script>

<template>
    <div class="flex flex-col h-screen bg-my-black">
        <div class="fixed top-0 left-0 w-full z-50">
            <NavPanel />
        </div>

        <div class="p-4 md:px-32 md:pb-8 pt-24 md:pt-28 bg-my-black flex-grow">
            <main>
                <slot />
            </main>
        </div>

        <Footer />
    </div>
</template>
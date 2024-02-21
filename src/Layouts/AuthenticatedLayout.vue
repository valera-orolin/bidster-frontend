<script setup>
import NavPanel from '../Components/NavPanel.vue';
import Footer from '../Components/Footer.vue';
</script>

<template>
    <div class="flex flex-col h-screen bg-my-black">
        <NavPanel />

        <div class="p-4 md:px-32 md:py-8 bg-my-black flex-grow">
            <main>
                <slot />
            </main>
        </div>

        <Footer />
    </div>
</template>
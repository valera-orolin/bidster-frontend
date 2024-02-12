<script setup>
import NavPanel from '../Components/NavPanel.vue';
import Footer from '../Components/Footer.vue';
</script>

<template>
    <div class="h-screen bg-my-black">
        <!---<NavPanel />-->

        <div class="px-4 md:px-32 py-8 bg-my-black">
            <main>
                <slot />
            </main>
        </div>

        <!---
        <Footer />-->
    </div>
</template>
<script setup>
import NavPanel from '../Components/NavPanel.vue';
import ButtonArrow from '../Components/ButtonArrow.vue';
</script>

<template>
    <div class="flex h-screen">
        <div class="w-5/12 my-gradient p-10 pl-28 flex justify-start">
            <div class="relative">
                <img src="../assets/logo-dark.svg" alt="Bidster" />
                <div class="absolute bottom-0 left-0">
                    <img class="scale-150 translate-x-10 -translate-y-20" src="../assets/element1.svg" alt="" />
                    <img class="scale-180 transform translate-x-40 -translate-y-48" src="../assets/element2.svg" alt="" />
                </div>
            </div>
        </div>
        <div class="w-7/12 bg-my-black p-10 flex justify-between items-start relative">
            <div class="w-3/4">
                <div class="text-my-gray4 text-5xl font-bold mt-28 leading-tight">
                    Buy and sell anything securely with
                    <span class="my-gradient-text">Bidster</span>
                </div>

                <div class="text-my-gray3 text-sm tracking-widest font-light mt-12">With Bidster Ethereum smart contracts you can be sure that every auction is fair, verifiable, and immutable. No intermediaries, no fees, no hassle.</div>

                <ButtonArrow text="Check out lots" class="mt-12 text-sm" />

                <div class="flex justify-between mt-12 text-my-gray4">
                    <div class="w-1/3 text-center border-r border-my-gray2">
                        <h1 class="text-2xl font-bold my-gradient-text">100K</h1>
                        <p class="font-light text-sm mt-2">Completed auctions</p>
                    </div>
                    <div class="w-1/3 text-center border-r border-my-gray2">
                        <h1 class="text-2xl font-bold my-gradient-text">67K</h1>
                        <p class="font-light text-sm mt-2">Active users</p>
                    </div>
                    <div class="w-1/3 text-center">
                        <h1 class="text-2xl font-bold my-gradient-text">70+</h1>
                        <p class="font-light text-sm mt-2">Global partners</p>
                    </div>
                </div>

                <div class="text-my-gray3 text-lg mt-20 font-bold">Our honorable <span class="my-gradient-text">clients & partners</span></div>
            </div>
            <NavPanel class="absolute right-28 top-10" />
        </div>
    </div>
</template>

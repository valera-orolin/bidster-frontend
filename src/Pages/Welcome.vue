<script setup>
import NavPanel from '../Components/NavPanel.vue';
import ButtonArrow from '../Components/ButtonArrow.vue';
import ButtonGradient from '../Components/ButtonGradient.vue';
</script>

<template>
    <div class="flex h-screen">
        <div class="w-5/12 my-gradient p-10 pl-28 hidden lg:flex justify-start">
            <div class="relative">
                <img src="../assets/logo-dark.png" alt="Bidster" class="h-8" />
                <div class="absolute bottom-0 left-0">
                    <img class="scale-200 translate-x-10 -translate-y-48" src="../assets/element1.png" alt="" />
                    <img class="scale-230 transform translate-x-52 -translate-y-88" src="../assets/element2.svg" alt="" />
                </div>
            </div>
        </div>
        <div class="w-full lg:w-7/12 bg-my-black p-10 flex flex-col justify-between items-start relative">
            <div class="w-full lg:w-3/4">
                <div class="text-my-gray4 text-3xl lg:text-6xl font-bold mt-20 lg:mt-36 leading-tight">
                    Buy and sell anything securely with
                    <span class="my-gradient-text">Bidster</span>
                </div>

                <div class="text-my-gray3 text-base tracking-widest font-light mt-10 lg:mt-20">With Bidster Ethereum smart contracts you can be sure that every auction is fair, verifiable, and immutable. No intermediaries, no fees, no hassle.</div>

                <router-link to="/lots">
                    <ButtonArrow text="Check out lots" class="mt-10 lg:mt-20 text-base" />
                </router-link>

                <div class="flex justify-between mt-10 lg:mt-20 text-my-gray3">
                    <div class="w-1/3 text-center border-r border-my-gray2">
                        <h1 class="text-2xl font-bold my-gradient-text">100K</h1>
                        <p class="font-light text-base mt-2">Completed auctions</p>
                    </div>
                    <div class="w-1/3 text-center border-r border-my-gray2">
                        <h1 class="text-2xl font-bold my-gradient-text">67K</h1>
                        <p class="font-light text-base mt-2">Active users</p>
                    </div>
                    <div class="w-1/3 text-center">
                        <h1 class="text-2xl font-bold my-gradient-text">70+</h1>
                        <p class="font-light text-base mt-2">Global partners</p>
                    </div>
                </div>

                <div class="text-my-gray4 text-lg mt-10 lg:mt-20 font-bold">Get something <span class="my-gradient-text">incredible</span> at an <span class="my-gradient-text">incredible</span> price</div>
                <div class="flex flex-wrap space-x-2 lg:space-x-10 text-lg lg:text-2xl font-bold text-gray-500 mt-5 lg:mt-10">
                    <div>Electronics</div>
                    <div>Real estate</div>
                    <div>Clothing</div>
                    <div>Works of art</div>
                </div>
            </div>

            <div class="flex absolute right-10 top-5 lg:right-28 lg:top-10" >
                <div class="flex space-x-8 text-my-gray4 text-base items-center font-light">
                    <router-link to="/auctions" class="hover:text-my-lila transition duration-500 hidden lg:flex">My Auctions</router-link>
                    <router-link to="/bids" class="hover:text-my-lila transition duration-500 hidden lg:flex">My Bids</router-link>
                    <router-link to="/profile" class="hover:text-my-lila transition duration-500 hidden lg:flex">Profile</router-link>
                    <router-link to="/lots/create" class="hover:text-my-lila transition duration-500 hidden lg:flex">Create Auction</router-link>
                    <router-link to="/login">
                        <ButtonGradient text="Sign in" />
                    </router-link>
                </div>
            </div>
            <!--
            <NavPanel class="absolute right-28 top-10" />-->
        </div>
    </div>
</template>

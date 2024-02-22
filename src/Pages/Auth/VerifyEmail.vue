<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import ButtonGradient from '../../Components/ButtonGradient.vue'
</script>

<template>
    <AuthenticatedLayout>
        <div class="flex justify-center">
            <div class="border-2 border-transparent rounded-2xl my-gradient-bord-black p-4 lg:p-12 text-my-gray4 lg:my-12">
                <img src="../../assets/icon.svg" alt="logo" class="w-24 h-24 md:w-32 md:h-32 bg-my-gray2 rounded-2xl p-4">
                <h1 class="text-4xl md:text-5xl font-bold pt-4 md:pt-8">Email Confirmation</h1>
                <h2 class="text-sm md:text-xl pt-4 tracking-widest font-light lg:pr-20">We sent you a verification link via email.</h2>
                <div class="text-sm md:text-xl mt-6 tracking-widest rounded-2xl bg-my-lila text-my-black px-6 py-4 md:px-12 md:py-8"><span class="font-bold">Thank you!</span> Check your Email for a <br class="hidden md:flex"> verification link.</div>

                <div class="mt-6 flex flex-col md:flex-row items-center justify-between">
                    <form>
                        <ButtonGradient :text="'Resend Verification Email'" class="text-sm md:text-base tracking-widest" />
                    </form>

                    <a href="#" class="text-sm md:text-base mt-4 md:mt-0 hover:text-my-lila duration-500 transition tracking-widest">Log Out</a>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import TextInput from '../../Components/TextInput.vue'
import InputLabel from '../../Components/InputLabel.vue'
import InputError from '../../Components/InputError.vue'
import ButtonLila from '../../Components/ButtonLila.vue'
</script>

<template>
    <AuthenticatedLayout>
        <div class="flex justify-center">
            <div class="border-2 border-transparent rounded-2xl my-gradient-bord-black p-4 lg:p-12 text-my-gray4 lg:my-12 my-animation-in-up animation-md">
                <img src="../../assets/icon.svg" alt="logo" class="w-24 h-24 md:w-32 md:h-32 bg-my-gray2 rounded-2xl p-4">
                <h1 class="text-4xl md:text-5xl font-bold pt-4 md:pt-8">Log In</h1>
                <h2 class="text-sm md:text-xl pt-4 tracking-widest font-light lg:pr-20">Please fill your email and password to log in</h2>
            
                <form class="pt-8 space-y-6">
                    <div>
                        <InputLabel for="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            class="mt-3 block w-full"
                            required
                            autofocus
                            autocomplete="username"
                        />

                        <InputError class="mt-2" :message="''" />
                    </div>

                    <div>
                        <div class="flex justify-between">
                            <InputLabel for="password" value="Password" />
                            <h3 class="text-sm tracking-widest underline hover:text-my-lila cursor-pointer duration-500 transition">Forgot password?</h3>
                        </div>

                        <TextInput
                            id="password"
                            type="password"
                            class="mt-3 block w-full"
                            required
                            autocomplete="current-password"
                        />

                        <InputError class="mt-2" :message="''" />
                    </div>

                    <ButtonLila class="text-sm" :text="'Log In'" />
                </form>

                <h2 class="text-sm md:text-base pt-6 tracking-widest font-light">Already have an account? <router-link to="/register" class="underline hover:text-my-lila duration-500 transition">Sign up</router-link></h2>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
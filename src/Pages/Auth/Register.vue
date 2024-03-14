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
                <h1 class="text-4xl md:text-5xl font-bold pt-4 md:pt-8">Sign Up</h1>
                <h2 class="text-sm md:text-xl pt-4 tracking-widest font-light lg:pr-20">Create an account and start using Bidster</h2>
            
                <form class="pt-8 space-y-6">

                    <div>
                        <InputLabel for="name" value="Name" />

                        <TextInput
                            id="name"
                            type="text"
                            class="mt-3 block w-full"
                            required
                            autofocus
                            autocomplete="name"
                        />

                        <InputError class="mt-2" :message="''" />
                    </div>

                    <div>
                        <InputLabel for="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            class="mt-3 block w-full"
                            required
                            autocomplete="username"
                        />

                        <InputError class="mt-2" :message="''" />
                    </div>

                    <div>
                        <InputLabel for="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            class="mt-3 block w-full"
                            required
                            autocomplete="current-password"
                        />

                        <InputError class="mt-2" :message="''" />
                    </div>

                    <div>
                        <InputLabel for="password_confirmation" value="Confirm Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            class="mt-3 block w-full"
                            required
                            autocomplete="new-password"
                        />

                        <InputError class="mt-2" :message="''" />
                    </div>

                    <ButtonLila class="text-sm" :text="'Sign Up'" />
                </form>

                <h2 class="text-sm md:text-base pt-6 tracking-widest font-light">Don't have an account? <router-link to="/login" class="underline hover:text-my-lila duration-500 transition">Log in</router-link></h2>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
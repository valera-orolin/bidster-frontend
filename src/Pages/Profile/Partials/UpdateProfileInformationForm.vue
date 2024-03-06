<script setup>
import InputError from '../../../Components/InputError.vue';
import InputLabel from '../../..//Components/InputLabel.vue';
import PrimaryButton from '../../../Components/ButtonWhite.vue';
import TextInput from '../../../Components/TextInput.vue';
import { ref } from 'vue';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const person = {
    avatar: 'https://assets-global.website-files.com/65361a9ab9e6601a1846a442/654231cc1515525d298416bf_testimonial-image-01.jpg',
    name: 'Alice Doe',
    rating: 4.5,
    auctions: 10,
    description: 'Experienced tech seller with a wide range of phones and laptops. Committed to providing top-quality devices, excellent service, and fast shipping. Your satisfaction is my priority.',
}
</script>

<template>
    <form @submit.prevent="submitForm" class="mt-6 space-y-6">
        <div class="flex flex-col items-center">
            <div class="w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden rounded-2xl">
                    <img :src="person.avatar" alt="Avatar" class="object-cover min-w-full min-h-full">
            </div>

            <div>
                <input type="file" id="post-media" class="hidden" accept="image/*" @change="handleFileUpload">
                <font-awesome-icon :icon="['fas', 'image']" class="text-my-gray3 text-2xl mt-2 cursor-pointer transition-all duration-500 lg:hover:text-my-lila" @click="triggerFileInput"/>
            </div>
        </div>

        <div>
            <InputLabel for="name" value="Name" />

            <TextInput
                id="name"
                type="text"
                class="mt-3 block w-full"
                required
                autofocus
                autocomplete="name"
                :colorsInversed="true"
            />

            <InputError class="mt-2" :message="''" />
        </div>

        <div>
            <InputLabel for="user_id" value="User ID" />

            <TextInput
                id="user_id"
                type="text"
                class="mt-3 block w-full"
                required
                autocomplete="username"
                :colorsInversed="true"
            />

            <InputError class="mt-2" :message="''" />
        </div>

        <div>
            <InputLabel for="description" value="Description" />

            <TextInput
                id="description"
                type="text"
                class="mt-3 block w-full"
                :colorsInversed="true"
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
                :colorsInversed="true"
            />

            <InputError class="mt-2" :message="''" />
        </div>

        <div v-if="mustVerifyEmail && user.email_verified_at === null">
            <p class="text-sm mt-2 text-gray-800">
                Your email address is unverified.
                <Link
                    :href="route('verification.send')"
                    method="post"
                    as="button"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Click here to re-send the verification email.
                </Link>
            </p>

            <div
                v-show="status === 'verification-link-sent'"
                class="mt-2 font-medium text-sm text-green-600"
            >
                A new verification link has been sent to your email address.
            </div>
        </div>

        <div class="flex items-center gap-4">
            <PrimaryButton text="Save"/><!--ToDo-->

            <Transition
                enter-active-class="transition ease-in-out"
                enter-from-class="opacity-0"
                leave-active-class="transition ease-in-out"
                leave-to-class="opacity-0"
            >
                <p v-if="''" class="text-sm text-gray-600">Saved.</p> <!--ToDo-->
            </Transition>
        </div>
    </form>
</template>
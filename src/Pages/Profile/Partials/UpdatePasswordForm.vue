<script setup>
import InputError from '../../../Components/InputError.vue';
import InputLabel from '../../..//Components/InputLabel.vue';
import PrimaryButton from '../../../Components/ButtonWhite.vue';
import TextInput from '../../../Components/TextInput.vue';
import { ref } from 'vue';
</script>

<template>
    <form @submit.prevent="updatePassword" class="mt-6 space-y-6">
        <div>
            <InputLabel for="current_password" value="Current Password" />

            <TextInput
                id="current_password"
                ref="currentPasswordInput"
                type="password"
                class="mt-3 block w-full"
                autocomplete="current-password"
                :colorsInversed="true"
            />

            <InputError :message="''" class="mt-2" />
        </div>

        <div>
            <InputLabel for="password" value="New Password" />

            <TextInput
                id="password"
                ref="passwordInput"
                type="password"
                class="mt-3 block w-full"
                autocomplete="new-password"
                :colorsInversed="true"
            />

            <InputError :message="''" class="mt-2" />
        </div>

        <div>
            <InputLabel for="password_confirmation" value="Confirm Password" />

            <TextInput
                id="password_confirmation"
                type="password"
                class="mt-3 block w-full"
                autocomplete="new-password"
                :colorsInversed="true"
            />

            <InputError :message="''" class="mt-2" />
        </div>

        <div class="flex items-center gap-4">
            <PrimaryButton text="Save" />

            <Transition
                enter-active-class="transition ease-in-out"
                enter-from-class="opacity-0"
                leave-active-class="transition ease-in-out"
                leave-to-class="opacity-0"
            >
                <p v-if="''" class="text-sm text-gray-600">Saved.</p>
            </Transition>
        </div>
    </form>
</template>
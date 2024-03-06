<script setup>
import DangerButton from '../../../Components/ButtonLila.vue';
import InputError from '../../../Components/InputError.vue';
import InputLabel from '../../../Components/InputLabel.vue';
import Modal from '../../../Components/Modal.vue';
import SecondaryButton from '../../../Components/ButtonWhite.vue';
import TextInput from '../../../Components/TextInput.vue';
import { nextTick, ref } from 'vue';

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value.focus());
};

const deleteUser = () => {
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <header>
            <p class="text-my-gray3">
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting
                your account, please download any data or information that you wish to retain.
            </p>
        </header>

        <DangerButton @click="confirmUserDeletion" text="Delete account" />

        <Modal :show="confirmingUserDeletion" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-my-gray3">
                    Are you sure you want to delete your account?
                </h2>

                <p class="mt-1 text-sm text-my-gray4">
                    Once your account is deleted, all of its resources and data will be permanently deleted. Please
                    enter your password to confirm you would like to permanently delete your account.
                </p>

                <div class="mt-6">
                    <InputLabel for="password" value="Password" class="sr-only" />

                    <TextInput
                        id="password"
                        ref="passwordInput"
                        type="password"
                        class="mt-1 block w-3/4 text-my-gray3"
                        placeholder="Password"
                        @keyup.enter="deleteUser"
                        :colorsInversed="true"
                    />

                    <InputError :message="''" class="mt-2" />
                </div>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeModal" text="Cancel" />

                    <DangerButton
                        class="ms-3"
                        :class="{ 'opacity-25': '' }"
                        :disabled="''"
                        @click="deleteUser"
                        text="Delete Account"
                    />
                </div>
            </div>
        </Modal>
    </section>
</template>
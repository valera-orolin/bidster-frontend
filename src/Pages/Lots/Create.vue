<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import CreateForm from './Partials/CreateForm.vue';
</script>

<template>
    <AuthenticatedLayout>
        <div class="flex justify-center">
            <div class="border-2 border-transparent rounded-2xl my-gradient-bord p-4 lg:p-12 text-my-gray4 lg:my-12 w-full lg:w-260">
                <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
                    Create your own auction at
                    <span class="my-gradient-text">Bidster</span>
                </div>

                <CreateForm />
            </div>
        </div>
    </AuthenticatedLayout>
</template>
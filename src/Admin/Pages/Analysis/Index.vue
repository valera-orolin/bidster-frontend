<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
</script>

<template>
    <AuthenticatedLayout :headerText="true">
        <template v-slot:gradientText>
            Coming Soon
        </template>
    </AuthenticatedLayout>
</template>
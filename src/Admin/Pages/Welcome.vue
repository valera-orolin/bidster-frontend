<script setup>
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout.vue'
</script>

<template>
    <AuthenticatedLayout :headerText="true">
        <template v-slot:headerText>
            Welcome, 
        </template>
        <template v-slot:gradientText>
            Director
        </template>
    </AuthenticatedLayout>
</template>
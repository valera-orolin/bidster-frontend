<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import User from './Partials/User.vue'
import { ref } from 'vue';

const users = ref([
    { name: 'Bob', status: 'Active', registration_date: '13.05.2023', auctions_count: 0, bids_count: 10, avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449ba3af2f78b3f1233cda_team-02-p-500.jpg' },
    { name: 'Charles', status: 'Banned', registration_date: '18.05.2023', auctions_count: 0, bids_count: 15, avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449d32366fe33e15a136d5_team-05-p-500.jpg' },
    { name: 'Anna', status: 'Active', registration_date: '23.07.2023', auctions_count: 5, bids_count: 2, avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449b9a6792e3768d902864_team-01-p-500.jpg' },
    { name: 'George', status: 'Banned', registration_date: '14.12.2022', auctions_count: 0, bids_count: 5, avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449ba3af2f78b3f1233cda_team-02-p-500.jpg' },
    { name: 'Valera', status: 'Active', registration_date: '17.01.2023', auctions_count: 3, bids_count: 17, avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449d05072ffcef86596b1a_team-04-p-500.jpg' },
    { name: 'Alice Doe', status: 'Active', registration_date: '12.02.2020', auctions_count: 10, bids_count: 40, avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449bb1eca6c83c657117bc_team-03-p-500.jpg' },
]);
</script>

<template>
    <AuthenticatedLayout :usersPage="true">
        <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <User v-for="user in users" :key="user.id" :user="user" />
        </div>
    </AuthenticatedLayout>
</template>
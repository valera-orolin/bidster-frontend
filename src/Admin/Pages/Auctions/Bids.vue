<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import Bid from './Partials/Bid.vue'
import { ref } from 'vue';

const lot_title = 'MacBook Pro 14';

const auction_bids = ref([
  { buyer_name: 'Bob', bid_size: '100', bid_time: 'Yesterday, 12:30', buyer_avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449ba3af2f78b3f1233cda_team-02-p-500.jpg' },
  { buyer_name: 'Charles', bid_size: '110', bid_time: 'Yesterday, 15:23', buyer_avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449d32366fe33e15a136d5_team-05-p-500.jpg' },
  { buyer_name: 'Anna', bid_size: '200', bid_time: 'Yesterday, 16:03', buyer_avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449b9a6792e3768d902864_team-01-p-500.jpg' },
  { buyer_name: 'Bob', bid_size: '260', bid_time: 'Yesterday, 22:14', buyer_avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449ba3af2f78b3f1233cda_team-02-p-500.jpg' },
  { buyer_name: 'George', bid_size: '300', bid_time: 'Today, 10:45', buyer_avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449d05072ffcef86596b1a_team-04-p-500.jpg' },
  { buyer_name: 'Valera', bid_size: '340', bid_time: 'Today, 12:38', buyer_avatar: 'https://assets-global.website-files.com/654211f784e4059b9b1ab2b4/65449bb1eca6c83c657117bc_team-03-p-500.jpg' },
]);
</script>

<template>
    <AuthenticatedLayout :headerText="true">
        <template v-slot:headerText>
            Bids for
        </template>
        <template v-slot:gradientText>
            {{ lot_title }}
        </template>
        
        <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Bid v-for="bid in auction_bids" :key="bid.id" :bid="bid" class="my-animation-in-up" />
        </div>
    </AuthenticatedLayout>
</template>
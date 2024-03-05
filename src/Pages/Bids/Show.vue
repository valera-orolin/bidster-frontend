<script setup>
import ButtonGradient from '../../Components/ButtonGradient.vue';
import ButtonArrow from '../../Components/ButtonArrow.vue';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import { onMounted, ref } from 'vue';
import { Chart, BarController, LinearScale, CategoryScale, BarElement } from 'chart.js';

const bid = { 
    auction_status: 'Active', 
    lot_title: 'MacBook Pro 14', 
    bid_size: '100', 
    is_leading_bid: false,
    lot_starting_price: '100', 
    lot_address: 'Minsk, Central', 
    lot_publication_date: 'Today, 14:11', 
    lot_end_date: '2024-07-01', 
    lot_image: 'https://image.cnbcfm.com/api/v1/image/106452529-1584646955287macbook-air-2020-10.png?v=1584647237&w=929&h=523&vtcrop=y' 
}

const bids = [
    { user_name: 'Bob', bid_size: 100, date_time: '' },
    { user_name: 'Charles', bid_size: 110, date_time: '' },
    { user_name: 'Anna', bid_size: 200, date_time: '' },
    { user_name: 'Bob', bid_size: 260, date_time: '' },
    { user_name: 'George', bid_size: 300, date_time: '' },
    { user_name: 'Valera', bid_size: 340, date_time: '' },
]

Chart.register(BarController, LinearScale, CategoryScale, BarElement);
const chartContainer = ref(null);
onMounted(() => {
    const ctx = chartContainer.value.getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: bids.map(bid => bid.user_name),
            datasets: [{
                label: 'Bid size',
                data: bids.map(bid => bid.bid_size),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
</script>

<template>
    <AuthenticatedLayout>
        <div class="flex flex-col lg:flex-row">
            <div class="flex flex-col items-start">
                <img :src="bid.lot_image" alt="Lot image" class="w-full h-56 md:h-72 lg:w-200 lg:h-112 object-cover rounded-2xl" />
            </div>

            <div class="flex flex-col text-my-gray4 mt-5 lg:mt-0 lg:ml-10">
                <h2 class="text-2xl lg:text-4xl font-bold">{{ bid.lot_title }}</h2>

                <p class="text-base font-light text-my-gray3 mt-3">Starting: {{ bid.lot_publication_date }}</p>
                <p class="text-base font-light text-my-gray3 mt-1">Ending: {{ bid.lot_end_date }}</p>

                <p class="text-base font-light text-my-gray3 mt-3">Bid size: <span class="bg-my-violet py-1 px-2 rounded-xl font-normal">${{ bid.bid_size }}</span></p>

                <p v-if="bid.is_leading_bid" class="text-base font-light text-my-gray3 mt-3">This bid is <span class="text-green-400">leading</span></p>
                <p v-else class="text-base font-light text-my-gray3 mt-3">This bid is <span class="text-red-400">not leading</span></p>
                

                <div class="flex flex-col md:flex-row md:space-x-4 items-center w-fit">
                    <ButtonGradient class="mt-8 w-56" :text="'Place a new bid'" />

                    <router-link :to="`/lots/1`">
                        <ButtonArrow class="mt-8 w-56" :text="'See the lot'" />
                    </router-link>
                </div>
            </div>
        </div>

        <div class="flex flex-col">
            <p class="text-2xl font-bold text-my-gray3 mt-14">Statistics</p>
            <div class="w-80 md:w-160 lg:w-full lg:max-h-160 mt-10">
                <canvas id="myChart" ref="chartContainer"></canvas>
            </div>
        </div>

    </AuthenticatedLayout>
</template>
<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue';
import TextInput from '../../Components/TextInput.vue'
import InputError from '../../Components/InputError.vue'
import InputLabel from '../../Components/InputLabel.vue'
import ButtonGradient from '../../Components/ButtonGradient.vue';
import { onMounted, ref } from 'vue';
import { Chart, BarController, LinearScale, CategoryScale, BarElement } from 'chart.js';

const auction = { id: 1, 
    title: 'MacBook Pro 14', 
    description: 'The laptop is new. Got it from a reseller from Poland.', 
    category: 'Electronics, Laptops', 
    bids_count: '18', 
    max_bid: '340', 
    image: 'https://image.cnbcfm.com/api/v1/image/106452529-1584646955287macbook-air-2020-10.png?v=1584647237&w=929&h=523&vtcrop=y', 
    status: 'Active', 
    starting_price: 100 
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
        <div class="flex justify-center">

            <div class="border-2 border-transparent rounded-2xl my-gradient-bord p-4 lg:p-12 text-my-gray4 lg:my-12 w-full lg:w-260">
                <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
                    Place a bid on 
                    <router-link to="/lots/1">
                        <span class="my-gradient-text">{{ auction.title }}</span>
                    </router-link>
                </div>

                <div class="space-y-6">
                    <p class="font-light text-my-gray3 mb-4">
                        Auction status: 
                        <span :class="{
                        'text-green-400': auction.status === 'Active', 
                        'text-orange-400': auction.status === 'Finished', 
                        'text-red-400': auction.status === 'Failed'
                        }">{{ auction.status }}</span>
                    </p>
                    <p class="font-light text-my-gray3">Bids count: {{ auction.bids_count }}</p>
                    <p class="font-light text-my-gray3">Starting price: ${{ auction.starting_price }}</p>
                    <p class="font-light text-my-gray3">Max bid: ${{ auction.max_bid }}</p>

                    <div class="w-72 md:w-160 lg:w-full">
                        <canvas id="myChart" ref="chartContainer"></canvas>
                    </div>

                    <form class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-12 md:items-end">
                        <div>
                            <InputLabel for="bid-size" value="Bid size, $" />

                            <TextInput
                                id="bid-size"
                                type="number"
                                class="mt-3 block w-64"
                                required
                                :colorsInversed="true"
                                :defaultValue="auction.max_bid"
                            />

                            <InputError class="mt-2" :message="''" />
                        </div>

                        <ButtonGradient class="h-fit" text="Place a bid" />
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
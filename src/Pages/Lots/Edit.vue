<script setup>
import ButtonArrow from '../../Components/ButtonArrow.vue';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import EditForm from './Partials/EditForm.vue';
import { onMounted, ref } from 'vue';
import { Chart, BarController, LinearScale, CategoryScale, BarElement } from 'chart.js';

const lot = { 
  id: 1,
  status: 'Active',
  title: 'MacBook Pro 14', 
  description: 'MacBook Pro 14-inch model. Equipped with Apples M1 Pro chip, it offers exceptional speed and power. Features a stunning Liquid Retina XDR display for vibrant colors and deep blacks. Comes with 16GB of memory and 512GB SSD. The battery life is phenomenal, perfect for on-the-go use. The laptop is in excellent condition, almost like new. A great deal for anyone in need of a high-performance machine.', 
  category: 'Real estate',
  subcategory: 'Apartments',
  bids_count: '18', 
  max_bid: '340', 
  starting_price: '100', 
  address: 'Minsk, Central', 
  publication_date: 'Today, 14:11', 
  end_date: '2024-07-01',
  images: [
    'https://image.cnbcfm.com/api/v1/image/106452529-1584646955287macbook-air-2020-10.png?v=1584647237&w=929&h=523&vtcrop=y',
    'https://mobistore.by/files/uploads/Apple_MacBook_Pro_14_M1_Max/apple-14-mbp-intro2.jpg',
    'https://mobistore.by/files/uploads/Apple_MacBook_Pro_14_M1_Max/45504-88662-MacBook-Pro-on-Apple-Box-xl.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoMYDGeyjIdMaF7S0yQi9VLuOf9azIdJsGA&usqp=CAU',
  ],
  characteristics: [
    { id: 1, name: 'Model', value: 'MacBook Pro 14-inch' },
    { id: 2, name: 'Processor', value: 'Apple M1 Pro' },
    { id: 3, name: 'RAM', value: '16GB' },
    { id: 4, name: 'Storage', value: '512GB SSD' },
    { id: 5, name: 'Display', value: '14-inch Liquid Retina XDR' },
    { id: 6, name: 'Resolution', value: '3024 x 1964 pixels' },
    { id: 7, name: 'Operating System', value: 'macOS Monterey' },
    { id: 8, name: 'Ports', value: '3 x Thunderbolt 4 (USB-C), SDXC card slot, HDMI port, MagSafe 3 port' },
    { id: 9, name: 'Wireless', value: 'Wi-Fi 6 (802.11ax), Bluetooth 5.0' },
    { id: 10, name: 'Battery Life', value: 'Up to 17 hours web browsing, up to 20 hours video playback' },
    { id: 11, name: 'Condition', value: 'Excellent, like new' },
    { id: 12, name: 'Accessories', value: 'Original box, power adapter, USB-C to MagSafe 3 Cable' },
  ]
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
            <div class="space-y-12">
                <div class="border-2 border-transparent rounded-2xl my-gradient-bord p-4 lg:p-12 text-my-gray4 lg:my-12 w-full lg:w-260">
                    <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
                        Edit
                        <span class="my-gradient-text">{{ lot.title }}</span>
                    </div>

                    <router-link :to="`/lots/${lot.id}`">
                        <ButtonArrow text="See the lot" :colorsInversed="true" />
                    </router-link>

                    <EditForm :lot="lot" />
                </div>

                <div class="border-2 border-transparent rounded-2xl my-gradient-bord p-4 lg:p-12 text-my-gray4 lg:my-12 w-full lg:w-260">
                    <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
                        Statistics
                    </div>

                    <div class="space-y-6">
                        <p class="font-light text-my-gray3 mb-4">
                            Status: 
                            <span :class="{
                            'text-green-400': lot.status === 'Active', 
                            'text-orange-400': lot.status === 'Finished', 
                            'text-red-400': lot.status === 'Failed'
                            }">{{ lot.status }}</span>
                        </p>
                        <p class="font-light text-my-gray3">Bids count: {{ lot.bids_count }}</p>
                        <p class="font-light text-my-gray3">Max bid: ${{ lot.max_bid }}</p>

                        <div class="w-72 md:w-160 lg:w-full">
                            <canvas id="myChart" ref="chartContainer"></canvas>
                        </div>

                        <ButtonArrow text="See the bids" :colorsInversed="true" />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style>
.file-upload input[type="file"] {
  display: none;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
}
</style>
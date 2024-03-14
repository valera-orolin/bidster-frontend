<script setup>
import ButtonArrow from '../../Components/ButtonArrow.vue';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import ButtonWhite from '../../Components/ButtonWhite.vue';
import ButtonLila from '../../Components/ButtonLila.vue';
import ButtonGradient from '../../Components/ButtonGradient.vue';
import TextInput from '../../Components/TextInput.vue'
import TextArea from '../../Components/TextArea.vue'
import InputLabel from '../../Components/InputLabel.vue'
import InputError from '../../Components/InputError.vue'
import { onMounted, ref, watch } from 'vue';
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

let showImageViewer = ref(false);
let currentImageIndex = ref(0);

const openImage = () => {
  showImageViewer.value = true;
};

const nextImage = () => {
  if (currentImageIndex.value < lot.images.length - 1) {
    currentImageIndex.value++;
  } else {
    currentImageIndex.value = 0;
  }
};

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else {
    currentImageIndex.value = lot.images.length - 1;
  }
};

const fileCount = ref(0);

const updateFileLabel = (event) => {
  fileCount.value = event.target.files.length;
};

const categories = ref([
    { name: 'Real estate', subcategories: ['New buildings', 'Apartments', 'Rooms', 'Houses, dachas, cottages', 'Garages and parking lots', 'Sites', 'Commercial real estate'] },
    { name: 'Auto and spare parts', subcategories: ['Passenger cars', 'Spare parts', 'Trucks and buses', 'Motor vehicles', 'Agricultural machinery', 'Special equipment', 'Trailers', 'Water transport', 'Accessories', 'Tires, wheels', 'Tools, equipment'] },
]);

const defaultCategory = categories.value.find(category => category.name === lot.category);
const selectedCategory = ref(defaultCategory || categories.value[0]);
const defaultSubcategory = selectedCategory.value.subcategories.find(subcategory => subcategory === lot.subcategory);
const selectedSubcategory = ref(defaultSubcategory || '');
watch(selectedCategory, (newVal) => {
    selectedSubcategory.value = newVal.subcategories[0];
});

const characteristics = ref(lot.characteristics);
const addCharacteristic = () => {
    const id = Math.max(...characteristics.value.map(c => c.id)) + 1;
    characteristics.value.push({ id, name: '', value: '' });
};
const removeCharacteristic = (id) => {
    const index = characteristics.value.findIndex(c => c.id === id);
    if (index !== -1) {
        characteristics.value.splice(index, 1);
    }
};

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
            <div class="space-y-12 my-animation-in-up animation-lg">
                <div class="border-2 border-transparent rounded-2xl my-gradient-bord p-4 lg:p-12 text-my-gray4 lg:my-12 w-full lg:w-260">
                    <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
                        Edit
                        <span class="my-gradient-text">{{ lot.title }}</span>
                    </div>

                    <router-link :to="`/lots/${lot.id}`">
                        <ButtonArrow text="See the lot" :colorsInversed="true" />
                    </router-link>

                    <form class="text-my-gray3 text-base mt-10">
                        <div class="space-y-6">
                            <div>
                                <InputLabel for="title" value="Title" />

                                <TextInput
                                    id="title"
                                    type="text"
                                    class="mt-3 block w-full"
                                    required
                                    autofocus
                                    :colorsInversed="true"
                                    :defaultValue="lot.title"
                                />

                                <InputError class="mt-2" :message="''" />
                            </div>

                            <div>
                                <InputLabel for="address" value="Address" />

                                <TextInput
                                    id="address"
                                    type="text"
                                    class="mt-3 block w-full"
                                    required
                                    :colorsInversed="true"
                                    :defaultValue="lot.address"
                                />

                                <InputError class="mt-2" :message="''" />
                            </div>

                            <div>
                                <InputLabel for="starting-price" value="Starting price, $" />

                                <TextInput
                                    id="starting-price"
                                    type="number"
                                    class="mt-3 block w-64"
                                    required
                                    :colorsInversed="true"
                                    :defaultValue="lot.starting_price"
                                />

                                <InputError class="mt-2" :message="''" />
                            </div>

                            <div class="flex flex-col items-start w-full lg:w-160">
                                <img :src="lot.images[currentImageIndex]" alt="Lot image" class="h-56 md:h-72 lg:h-112 object-cover rounded-2xl cursor-zoom-in" @click="openImage" />
                                <div class="flex justify-between w-full mt-4">
                                    <ButtonWhite type="button" text="❮" @click="previousImage" />
                                    <ButtonWhite type="button" text="❯" @click="nextImage" />
                                </div>
                            </div>

                            <div>
                                <InputLabel for="images" value="Images" />

                                <div class="file-upload mt-3 flex flex-col md:flex-row md:items-center">
                                    <input type="file" id="images" class="file-input hidden" accept="image/*" multiple @change="updateFileLabel">
                                    <label for="images" class="file-label bg-my-black p-5 rounded-full cursor-pointer w-fit">Select images</label>
                                    <span class="file-count-label mt-2 md:mt-0 md:ml-6 text-my-gray3">Images selected: {{ fileCount }}</span>
                                </div>

                                <InputError class="mt-2" :message="''" />
                            </div>

                            <div>
                                <InputLabel for="end-date" value="End date" />

                                <TextInput
                                    id="end-date"
                                    type="date"
                                    class="mt-3 block w-64"
                                    required
                                    :colorsInversed="true"
                                    :defaultValue="lot.end_date"
                                />

                                <InputError class="mt-2" :message="''" />
                            </div>

                            <div>
                                <InputLabel for="description" value="Description"   />

                                <TextArea
                                    id="description"
                                    type="date"
                                    class="mt-3 block w-full"
                                    maxlength="1000"
                                    rows="5"
                                    required
                                    :colorsInversed="true"
                                    :defaultValue="lot.description"
                                />

                                <InputError class="mt-2" :message="''" />
                            </div>

                            <div class="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-6">
                                <div>
                                    <InputLabel for="category" value="Category" />
                                    <select id="category" v-model="selectedCategory" required class="w-64 p-5 rounded-full transition duration-500 bg-my-black mt-3 focus:outline-none">
                                        <option v-for="category in categories" :value="category">{{ category.name }}</option>
                                    </select>
                                </div>

                                <div>
                                    <InputLabel for="subcategory" value="Subcategory" />
                                    <select id="subcategory" v-model="selectedSubcategory" required class="w-64 p-5 rounded-full transition duration-500 bg-my-black mt-3 focus:outline-none">
                                        <option v-for="subcategory in selectedCategory.subcategories" :value="subcategory">{{ subcategory }}</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <InputLabel for="characteristics" value="Characteristics" />
                                <div class="mt-3 flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4 items-start" v-for="characteristic in characteristics" :key="characteristic.id">
                                    <TextInput
                                        type="text"
                                        class="w-64 md:w-96"
                                        v-model="characteristic.name" 
                                        placeholder="Name" 
                                        required
                                        :colorsInversed="true"
                                        :defaultValue="characteristic.name"
                                    />
                                    <TextInput
                                        type="text"
                                        class="w-64 md:w-96"
                                        v-model="characteristic.value" 
                                        placeholder="Value"
                                        required
                                        :colorsInversed="true"
                                        :defaultValue="characteristic.value"
                                    />
                                    <button type="button" @click="removeCharacteristic(characteristic.id)" class="text-4xl hover:text-my-lila transition duration-500">×</button>
                                </div>
                                <ButtonWhite type="button" @click="addCharacteristic" class="mt-3" text="Add characteristic"/>
                            </div>
                        </div>
                        <ButtonGradient class="mt-10" :text="'Edit auction'" />
                    </form>
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

                        <router-link to="/auctions/bids">
                            <ButtonArrow text="See the bids" :colorsInversed="true" />
                        </router-link>
                    </div>
                </div>

                <div class="border-2 border-transparent rounded-2xl my-gradient-bord p-4 lg:p-12 text-my-gray4 lg:my-12 w-full lg:w-260 my-animation-in-up">
                    <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
                        End the auction
                    </div>

                    <div class="space-x-6">
                        <ButtonLila text="Declare failure" />
                        <ButtonWhite text="Declare finish" />
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showImageViewer" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <img :src="lot.images[currentImageIndex]" class="max-h-screen max-w-screen" />
            <button type="button" class="absolute top-0 right-0 m-4 text-white text-5xl" @click="showImageViewer = false">×</button>
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
<script setup>
import ButtonGradient from '../../Components/ButtonGradient.vue';
import Chat from './Partials/Chat.vue';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'

const lot = { 
  id: 1, 
  title: 'MacBook Pro 14', 
  description: 'MacBook Pro 14-inch model. Equipped with Apples M1 Pro chip, it offers exceptional speed and power. Features a stunning Liquid Retina XDR display for vibrant colors and deep blacks. Comes with 16GB of memory and 512GB SSD. The battery life is phenomenal, perfect for on-the-go use. The laptop is in excellent condition, almost like new. A great deal for anyone in need of a high-performance machine.', 
  category: 'Electronics, Laptops', 
  bids_count: '18', 
  max_bid: '340', 
  starting_price: '100', 
  address: 'Minsk, Central', 
  publication_date: 'Today, 14:11', 
  image: 'https://image.cnbcfm.com/api/v1/image/106452529-1584646955287macbook-air-2020-10.png?v=1584647237&w=929&h=523&vtcrop=y',
  characteristics: [
    { name: 'Model', value: 'MacBook Pro 14-inch' },
    { name: 'Processor', value: 'Apple M1 Pro' },
    { name: 'RAM', value: '16GB' },
    { name: 'Storage', value: '512GB SSD' },
    { name: 'Display', value: '14-inch Liquid Retina XDR' },
    { name: 'Resolution', value: '3024 x 1964 pixels' },
    { name: 'Operating System', value: 'macOS Monterey' },
    { name: 'Ports', value: '3 x Thunderbolt 4 (USB-C), SDXC card slot, HDMI port, MagSafe 3 port' },
    { name: 'Wireless', value: 'Wi-Fi 6 (802.11ax), Bluetooth 5.0' },
    { name: 'Battery Life', value: 'Up to 17 hours web browsing, up to 20 hours video playback' },
    { name: 'Condition', value: 'Excellent, like new' },
    { name: 'Accessories', value: 'Original box, power adapter, USB-C to MagSafe 3 Cable' },
  ]
}

const person = {
        avatar: 'https://assets-global.website-files.com/65361a9ab9e6601a1846a442/654231cc1515525d298416bf_testimonial-image-01.jpg',
        name: 'John Doe',
        rating: 4.5,
        auctions: 10,
        description: 'Experienced tech seller with a wide range of phones and laptops. Committed to providing top-quality devices, excellent service, and fast shipping. Your satisfaction is my priority.',
      }
</script>

<template>
    <AuthenticatedLayout>
        <div class="flex">
            <img :src="lot.image" alt="Lot image" class="h-32 w-auto md:h-96 object-cover rounded-2xl">
            <div class="flex flex-col text-my-gray4 ml-10">
                <h2 class="text-base md:text-4xl font-bold">{{ lot.title }}</h2>

                <p class="text-base font-light text-my-gray3 mt-3">{{ lot.address }}</p>
                <p class="text-base font-light text-my-gray3 mt-1">{{ lot.publication_date }}</p>

                <p class="text-base font-light text-my-gray3 mt-3">Starting price: <span class="text-my-violet font-normal">${{ lot.starting_price }}</span></p>
                <p class="text-base font-light text-my-gray3 mt-1">{{ lot.bids_count }} bids</p>
                <p class="text-base font-light text-my-gray3 mt-1">Max bid: <span class="bg-my-violet py-1 px-2 rounded-xl font-normal">${{ lot.max_bid }}</span></p>

                <ButtonGradient class="mt-8 w-56" :text="'Place a bid'" />
            </div>
        </div>

        <div class="flex flex-col">
            <p class="text-2xl font-bold text-my-gray3 mt-14">Description</p>
            <p class="text-base font-light text-my-gray3 mt-3">{{ lot.description }}</p>

            <p class="text-2xl font-bold text-my-gray3 mt-14 mb-5">Сharacteristics</p>
            <div v-for="(characteristic, index) in lot.characteristics" :key="index" :class="{ 'bg-my-gray2 rounded-2xl': index % 2 === 0 }">
                <div class="grid grid-cols-2 py-2 px-6">
                    <p class="text-sm font-light text-my-gray3">{{ characteristic.name }}</p>
                    <p class="text-sm font-light text-my-gray3">{{ characteristic.value }}</p>
                </div>
            </div>

            <p class="text-2xl font-bold text-my-gray3 mt-14">Seller</p>
            <div class="flex flex-col space-y-4 mt-5 bg-my-gray2 rounded-2xl w-fit p-8 border-0.5 border-my-gray2 hover:border-my-lila transition duration-500 cursor-pointer lg:hover:-translate-y-1">
                <div class="w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-2xl">
                    <img :src="person.avatar" alt="Avatar" class="object-cover min-w-full min-h-full">
                </div>
                <div class="space-y-3">
                    <div class="flex items-center space-x-8">
                        <p class="text-base font-semibold text-my-gray3">{{ person.name }}</p>
                        <div class="flex items-center space-x-3">
                            <font-awesome-icon :icon="['fas', 'star']" class="text-base text-my-orange my-gradient-text" />
                            <p class="text-base font-light text-my-gray3 mt-0.5">{{ person.rating }}</p>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500">{{ person.auctions }} auctions held</p>
                    <p class="text-base font-light text-my-gray3 w-96">{{ person.description }}</p>
                </div>
            </div>

            <p class="text-2xl font-bold text-my-gray3 mt-14 mb-5">Chat about <span class="my-gradient-text">{{ lot.title }}</span></p>
            <Chat />
        </div>

    </AuthenticatedLayout>
</template>
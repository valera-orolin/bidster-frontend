<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import Auction from '../Auctions/Partials/Auction.vue';
import Bid from '../Bids/Partials/Bid.vue'
import { ref } from 'vue';

const person = {
    avatar: 'https://assets-global.website-files.com/65361a9ab9e6601a1846a442/654231cc1515525d298416bf_testimonial-image-01.jpg',
    name: 'Alice Doe',
    rating: 4.5,
    auctions: 10,
    description: 'Experienced tech seller with a wide range of phones and laptops. Committed to providing top-quality devices, excellent service, and fast shipping. Your satisfaction is my priority.',
}

const auctions = ref([
  { id: 1, title: 'MacBook Pro 14', description: 'The laptop is new. Got it from a reseller from Poland.', category: 'Electronics, Laptops', bids_count: '18', max_bid: '340', image: 'https://image.cnbcfm.com/api/v1/image/106452529-1584646955287macbook-air-2020-10.png?v=1584647237&w=929&h=523&vtcrop=y', status: 'Active' },
  { id: 2, title: 'iPhone 13 Pro', description: 'Brand new with a two-year warranty.', category: 'Electronics, Mobile Phones', bids_count: '25', max_bid: '900', image: 'https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F12%2F29%2Faiphone13pro-cov-sho-sel-1-1065947-1640788556_2.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop', status: 'Finished' },
  { id: 3, title: 'Samsung Galaxy S21', description: 'In perfect condition, barely used.', category: 'Electronics, Mobile Phones', bids_count: '15', max_bid: '600', image: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F601d455bbba4e5eafdefda0f%2F0x0.jpg', status: 'Failed' },
  { id: 4, title: 'Canon EOS 5D Mark IV', description: 'Used but in excellent condition. Comes with a 50mm lens.', category: 'Electronics, Cameras', bids_count: '12', max_bid: '1200', image: 'https://www.cameralabs.com/wp-content/uploads/2017/01/Canon5DIV_hero3_4000-1920x1266.jpg', status: 'Active' },
  { id: 5, title: 'Sony PlayStation 5', description: 'Brand new in box. Comes with one controller.', category: 'Electronics, Gaming', bids_count: '30', max_bid: '500', image: 'https://photo-shop.by/images/ps5_3.jpg', status: 'Failed' },
  { id: 6, title: 'Microsoft Xbox Series X', description: 'Lightly used. Comes with two controllers.', category: 'Electronics, Gaming', bids_count: '20', max_bid: '450', image: 'https://cdn.mos.cms.futurecdn.net/27n98LotAmE93gCbHgUnWT-1200-80.jpg', status: 'Active' },
  { id: 7, title: 'Apple Watch Series 7', description: 'Brand new, still sealed in box.', category: 'Electronics, Wearables', bids_count: '10', max_bid: '350', image: 'https://media.cnn.com/api/v1/images/stellar/prod/211012221554-1-apple-watch-series-7-review-underscored.jpg?q=w_4032,h_3024,x_0,y_0,c_fill', status: 'Active' },
  { id: 8, title: 'Bose QuietComfort 35 II', description: 'Used but in great condition. Amazing sound quality.', category: 'Electronics, Audio', bids_count: '8', max_bid: '200', image: 'https://i.ebayimg.com/images/g/23EAAOSwms5kSTyi/s-l1200.webp', status: 'Finished' },
  { id: 9, title: 'iPad Pro 12.9-inch', description: 'Brand new with a two-year warranty.', category: 'Electronics, Tablets', bids_count: '16', max_bid: '1000', image: 'https://i.pcmag.com/imagery/reviews/063x9GzWFSp0jiWj9qTEkyR-13.fit_lim.size_1050x.jpg', status: 'Finished' },
  { id: 10, title: 'Dell XPS 15', description: 'Lightly used, powerful laptop with a 4K display.', category: 'Electronics, Laptops', bids_count: '14', max_bid: '800', image: 'https://mobile-review.com/articles/2020/image/dell-xps-15-9500/anons3.jpg', status: 'Failed' },
]);

const bids = ref([
  { auction_status: 'Active', lot_title: 'MacBook Pro 14', bid_size: '100', lot_image: 'https://image.cnbcfm.com/api/v1/image/106452529-1584646955287macbook-air-2020-10.png?v=1584647237&w=929&h=523&vtcrop=y' },
  { auction_status: 'Finished', lot_title: 'iPhone 13 Pro', bid_size: '800', lot_image: 'https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F12%2F29%2Faiphone13pro-cov-sho-sel-1-1065947-1640788556_2.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop'},
  { auction_status: 'Active', lot_title: 'Samsung Galaxy S21', bid_size: '150', lot_image: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F601d455bbba4e5eafdefda0f%2F0x0.jpg' },
  { auction_status: 'Finished', lot_title: 'Canon EOS 5D Mark IV', bid_size: '250', lot_image: 'https://www.cameralabs.com/wp-content/uploads/2017/01/Canon5DIV_hero3_4000-1920x1266.jpg' },
  { auction_status: 'Failed', lot_title: 'Sony PlayStation 5', bid_size: '200', lot_image: 'https://photo-shop.by/images/ps5_3.jpg' },
  { auction_status: 'Active', lot_title: 'Microsoft Xbox Series X', bid_size: '220', lot_image: 'https://cdn.mos.cms.futurecdn.net/27n98LotAmE93gCbHgUnWT-1200-80.jpg' },
  { auction_status: 'Active', lot_title: 'Apple Watch Series 7', bid_size: '180', lot_image: 'https://media.cnn.com/api/v1/images/stellar/prod/211012221554-1-apple-watch-series-7-review-underscored.jpg?q=w_4032,h_3024,x_0,y_0,c_fill' },
  { auction_status: 'Finished', lot_title: 'Bose QuietComfort 35 II', bid_size: '120', lot_image: 'https://i.ebayimg.com/images/g/23EAAOSwms5kSTyi/s-l1200.webp' },
  { auction_status: 'Finished', lot_title: 'iPad Pro 12.9-inch', bid_size: '300', lot_image: 'https://i.pcmag.com/imagery/reviews/063x9GzWFSp0jiWj9qTEkyR-13.fit_lim.size_1050x.jpg' },
  { auction_status: 'Failed', lot_title: 'Dell XPS 15', bid_size: '280', lot_image: 'https://mobile-review.com/articles/2020/image/dell-xps-15-9500/anons3.jpg' },
]);

const selected = ref('option1');
</script>

<template>
    <AuthenticatedLayout>
        <div class="flex justify-center">
            <div class="flex flex-col lg:flex-row space-y-6 space-x-0 lg:space-y-0 lg:space-x-10 lg:items-center my-gradient-bord-black border-2 border-transparent rounded-2xl p-4 lg:p-12 text-my-gray4"> 
                <div class="w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden rounded-2xl">
                        <img :src="person.avatar" alt="Avatar" class="object-cover min-w-full min-h-full">
                </div>
                <div class="space-y-3 lg:w-140 tracking-widest">
                    <p class="text-3xl md:text-5xl font-semibold text-my-gray3">{{ person.name }}</p>
                    <div class="flex items-center space-x-2">
                        <font-awesome-icon :icon="['fas', 'star']" class="text-base text-my-orange my-gradient-text" />
                        <p class="text-base font-light text-my-gray3 mt-0.5">{{ person.rating }}</p>
                    </div>
                    <p class="text-base font-light text-my-gray3">{{ person.description }}</p>
                    <p class="text-sm text-gray-500">{{ person.auctions }} auctions held</p>
                </div>
            </div>
        </div>

        <div class="flex justify-center space-x-8 mt-16">
            <button :class="selected === 'option1' ? 'bg-my-lila text-my-black' : 'bg-my-gray2 text-my-gray4 border border-my-gray3'" class="hover:bg-my-lila hover:text-my-gray2 py-4 px-12 rounded-2xl transition duration-500" @click="selected = 'option1'">Auctions</button>
            <button :class="selected === 'option2' ? 'bg-my-lila text-my-black' : 'bg-my-gray2 text-my-gray4 border border-my-gray3'" class="hover:bg-my-lila hover:text-my-gray2 py-4 px-12 rounded-2xl transition duration-500" @click="selected = 'option2'">Bids</button>
        </div>

        <div v-if="selected === 'option1'" class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
            <Auction v-for="auction in auctions" :key="auction.id" :auction="auction" />
        </div>

        <div v-else class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
            <Bid v-for="bid in bids" :key="bid.id" :bid="bid" />
        </div>
    </AuthenticatedLayout>
</template>
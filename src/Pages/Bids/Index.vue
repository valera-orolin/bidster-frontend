<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import Bid from './Partials/Bid.vue'
import { ref } from 'vue';

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
</script>

<template>
    <AuthenticatedLayout :headerText="true">
        <template v-slot:headerText>
            Your
        </template>
        <template v-slot:gradientText>
            Bids
        </template>
        
        <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Bid v-for="bid in bids" :key="bid.id" :bid="bid" />
        </div>
    </AuthenticatedLayout>
</template>
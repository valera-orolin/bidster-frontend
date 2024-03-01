<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import NavPanel from '../../Components/NavPanel.vue';
import Footer from '../../Components/Footer.vue';
import Lot from '../Lots/Partials/Lot.vue'
import { ref } from 'vue';

const lots = ref([
  { id: 1, title: 'MacBook Pro 14', description: 'The laptop is new. Got it from a reseller from Poland.', category: 'Electronics, Laptops', bids_count: '18', max_bid: '340', image: 'https://image.cnbcfm.com/api/v1/image/106452529-1584646955287macbook-air-2020-10.png?v=1584647237&w=929&h=523&vtcrop=y' },
  { id: 2, title: 'iPhone 13 Pro', description: 'Brand new with a two-year warranty.', category: 'Electronics, Mobile Phones', bids_count: '25', max_bid: '900', image: 'https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F12%2F29%2Faiphone13pro-cov-sho-sel-1-1065947-1640788556_2.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop' },
  { id: 3, title: 'Samsung Galaxy S21', description: 'In perfect condition, barely used.', category: 'Electronics, Mobile Phones', bids_count: '15', max_bid: '600', image: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F601d455bbba4e5eafdefda0f%2F0x0.jpg' },
  { id: 4, title: 'Canon EOS 5D Mark IV', description: 'Used but in excellent condition. Comes with a 50mm lens.', category: 'Electronics, Cameras', bids_count: '12', max_bid: '1200', image: 'https://www.cameralabs.com/wp-content/uploads/2017/01/Canon5DIV_hero3_4000-1920x1266.jpg' },
  { id: 5, title: 'Sony PlayStation 5', description: 'Brand new in box. Comes with one controller.', category: 'Electronics, Gaming', bids_count: '30', max_bid: '500', image: 'https://photo-shop.by/images/ps5_3.jpg' },
  { id: 6, title: 'Microsoft Xbox Series X', description: 'Lightly used. Comes with two controllers.', category: 'Electronics, Gaming', bids_count: '20', max_bid: '450', image: 'https://cdn.mos.cms.futurecdn.net/27n98LotAmE93gCbHgUnWT-1200-80.jpg' },
  { id: 7, title: 'Apple Watch Series 7', description: 'Brand new, still sealed in box.', category: 'Electronics, Wearables', bids_count: '10', max_bid: '350', image: 'https://media.cnn.com/api/v1/images/stellar/prod/211012221554-1-apple-watch-series-7-review-underscored.jpg?q=w_4032,h_3024,x_0,y_0,c_fill' },
  { id: 8, title: 'Bose QuietComfort 35 II', description: 'Used but in great condition. Amazing sound quality.', category: 'Electronics, Audio', bids_count: '8', max_bid: '200', image: 'https://i.ebayimg.com/images/g/23EAAOSwms5kSTyi/s-l1200.webp' },
  { id: 9, title: 'iPad Pro 12.9-inch', description: 'Brand new with a two-year warranty.', category: 'Electronics, Tablets', bids_count: '16', max_bid: '1000', image: 'https://i.pcmag.com/imagery/reviews/063x9GzWFSp0jiWj9qTEkyR-13.fit_lim.size_1050x.jpg' },
  { id: 10, title: 'Dell XPS 15', description: 'Lightly used, powerful laptop with a 4K display.', category: 'Electronics, Laptops', bids_count: '14', max_bid: '800', image: 'https://mobile-review.com/articles/2020/image/dell-xps-15-9500/anons3.jpg' },
]);
</script>

<template>
    <AuthenticatedLayout :headerText="true">
        <template v-slot:headerText>
            Your
        </template>
        <template v-slot:gradientText>
            Auctions
        </template>
        
        <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Lot v-for="lot in lots" :key="lot.id" :lot="lot" />
        </div>
    </AuthenticatedLayout>
</template>
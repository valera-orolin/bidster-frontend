<script setup>
import TextInput from '../../../../Components/TextInput.vue';
import ButtonWhite from '../../../../Components/ButtonWhite.vue';
import { ref, watch } from 'vue';

const categories = ref([
    { name: 'Real estate', subcategories: ['New buildings', 'Apartments', 'Rooms', 'Houses, dachas, cottages', 'Garages and parking lots', 'Sites', 'Commercial real estate'] },
    { name: 'Auto and spare parts', subcategories: ['Passenger cars', 'Spare parts', 'Trucks and buses', 'Motor vehicles', 'Agricultural machinery', 'Special equipment', 'Trailers', 'Water transport', 'Accessories', 'Tires, wheels', 'Tools, equipment'] },
]);

const selectedCategory = ref(categories.value[0]);
const selectedSubcategory = ref('');
watch(selectedCategory, (newVal) => {
    selectedSubcategory.value = newVal.subcategories[0];
});
</script>

<template>
    <form>
        <div class="md:px-32 p-4 md:pt-16 text-my-gray4">
            <TextInput
                id="search-text"
                type="text"
                class="block w-full mb-3"
                placeholder="Search for auctions"
                :colorsInversed="true"
            />

            <div class="flex justify-between flex-wrap">
                <div class="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-6 items-start md:items-center mt-3">
                    <p>Starting price</p>
                    <TextInput
                        id="starting-price-from"
                        type="text"
                        class="block w-64"
                        required
                        placeholder="From"
                        :colorsInversed="true"
                    />

                    <TextInput
                        id="starting-price-to"
                        type="text"
                        class="block w-64"
                        required
                        placeholder="To"
                        :colorsInversed="true"
                    />
                </div>

                <div class="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-6 items-start md:items-center mt-3">
                    <p>Max bid</p>
                    <TextInput
                        id="max-bid-from"
                        type="text"
                        class="block w-64"
                        required
                        placeholder="From"
                        :colorsInversed="true"
                    />

                    <TextInput
                        id="max-bid-to"
                        type="text"
                        class="block w-64"
                        required
                        placeholder="To"
                        :colorsInversed="true"
                    />
                </div>

                <div class="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-6 items-start sm:items-center mt-3">
                    <div class="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-6 items-start md:items-center">
                        <p>Category</p>
                        <select id="category" v-model="selectedCategory" required class="w-64 p-5 rounded-full transition duration-500 bg-my-black focus:outline-none">
                            <option v-for="category in categories" :value="category">{{ category.name }}</option>
                        </select>
                    </div>

                    <div class="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-6 items-start md:items-center">
                        <p>Subcategory</p>
                        <select id="subcategory" v-model="selectedSubcategory" required class="w-64 p-5 rounded-full transition duration-500 bg-my-black focus:outline-none">
                            <option v-for="subcategory in selectedCategory.subcategories" :value="subcategory">{{ subcategory }}</option>
                        </select>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-6 items-start md:items-center mt-3">
                    <p>Status</p>
                    <select id="category" required class="w-64 p-5 rounded-full transition duration-500 bg-my-black focus:outline-none">
                        <option value="All">All</option>
                        <option value="Active">Active</option>
                        <option value="Finished">Finished</option>
                        <option value="Failed">Failed</option>
                    </select>
                </div>
            </div>

            <div class="w-full flex md:justify-end mt-6">
                <ButtonWhite class="w-full md:w-fit" text="Search" />
            </div>
        </div>
    </form>
</template>
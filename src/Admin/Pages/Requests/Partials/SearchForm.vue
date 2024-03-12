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
                placeholder="Search for requests"
                :colorsInversed="true"
            />

            <div class="flex justify-between flex-wrap">
                <div class="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-6 items-start md:items-center mt-3">
                    <p>Type</p>
                    <select id="category" required class="w-64 p-5 rounded-full transition duration-500 bg-my-black focus:outline-none">
                        <option value="All">All</option>
                        <option value="Add">Add</option>
                        <option value="Change">Change</option>
                    </select>
                </div>
            </div>

            <div class="w-full flex md:justify-end mt-6">
                <ButtonWhite class="w-full md:w-fit" text="Search" />
            </div>
        </div>
    </form>
</template>
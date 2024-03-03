<script setup>
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import CreateForm from './Partials/CreateForm.vue';
import { ref, watch } from 'vue';

const fileCount = ref(0);

const updateFileLabel = (event) => {
  fileCount.value = event.target.files.length;
};

const categories = ref([
    { name: 'Real estate', subcategories: ['New buildings', 'Apartments', 'Rooms', 'Houses, dachas, cottages', 'Garages and parking lots', 'Sites', 'Commercial real estate'] },
    { name: 'Auto and spare parts', subcategories: ['Passenger cars', 'Spare parts', 'Trucks and buses', 'Motor vehicles', 'Agricultural machinery', 'Special equipment', 'Trailers', 'Water transport', 'Accessories', 'Tires, wheels', 'Tools, equipment'] },
]);

const selectedCategory = ref(categories.value[0]);
const selectedSubcategory = ref('');
watch(selectedCategory, (newVal) => {
    selectedSubcategory.value = newVal.subcategories[0];
});

const characteristics = ref([]);
let id = 0;
const addCharacteristic = () => {
    characteristics.value.push({ id: id++, name: '', value: '' });
};
const removeCharacteristic = (id) => {
    const index = characteristics.value.findIndex(c => c.id === id);
    if (index !== -1) {
        characteristics.value.splice(index, 1);
    }
};
</script>

<template>
    <AuthenticatedLayout>
        <div class="flex justify-center">
            <div class="border-2 border-transparent rounded-2xl my-gradient-bord p-4 lg:p-12 text-my-gray4 lg:my-12 w-full lg:w-260">
                <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
                    Create your own auction at
                    <span class="my-gradient-text">Bidster</span>
                </div>

                <CreateForm />
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
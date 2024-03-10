<script setup>
import ButtonWhite from '../../../Components/ButtonWhite.vue';
import ButtonLila from '../../../Components/ButtonLila.vue';
import TextInput from '../../../Components/TextInput.vue';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
import { ref } from 'vue';

const categories = ref([
    { name: 'Real estate', subcategories: ['New buildings', 'Apartments', 'Rooms', 'Houses, dachas, cottages', 'Garages and parking lots', 'Sites', 'Commercial real estate'], showSubcategories: true },
    { name: 'Auto and spare parts', subcategories: ['Passenger cars', 'Spare parts', 'Trucks and buses', 'Motor vehicles', 'Agricultural machinery', 'Special equipment', 'Trailers', 'Water transport', 'Accessories', 'Tires, wheels', 'Tools, equipment'], showSubcategories: false },
]);

const updateCategoryName = (index, newName) => {
    categories.value[index].name = newName;
};

const updateSubcategoryName = (index, subIndex, newName) => {
    categories.value[index].subcategories[subIndex] = newName;
};

const addCategory = () => {
    categories.value.push({ name: '', subcategories: [], showSubcategories: false });
};

const removeCategory = (index) => {
    categories.value.splice(index, 1);
};

const addSubcategory = (index) => {
    categories.value[index].subcategories.push('');
};

const removeSubcategory = (index, subIndex) => {
    categories.value[index].subcategories.splice(subIndex, 1);
};

const toggleSubcategories = (index) => {
    categories.value[index].showSubcategories = !categories.value[index].showSubcategories;
};

const submitForm = () => {
    // Здесь вы можете отправить массив категорий на сервер
    console.log(categories.value);
};
</script>

<template>
    <AuthenticatedLayout>
        <div class="flex justify-center">
            <div class="space-y-12">
                <div class="border-2 border-transparent rounded-2xl my-gradient-bord p-4 lg:p-12 text-my-gray4 lg:my-12 w-full lg:w-260">
                    <div class="text-my-gray4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
                        Manage
                        <span class="my-gradient-text">Categories</span>
                    </div>
                    <form @submit.prevent="submitForm">
                        <div v-for="(category, index) in categories" :key="index">
                            <div class="flex justify-between items-center mt-6">
                                <TextInput
                                    type="text"
                                    @input="updateCategoryName(index, $event.target.value)"
                                    :defaultValue="category.name"
                                    placeholder="Category" 
                                    class="block w-84 font-bold"
                                    required
                                    :colorsInversed="true"
                                />
                                <ButtonWhite type="button" @click="removeCategory(index)" text="Delete Category" />
                            </div>

                            <button @click="toggleSubcategories(index)" type="button" class="py-2 px-3 md:py-4 md:px-5 bg-my-black rounded-full text-my-gray3 text-lg md:text-xl mt-6 border border-my-black hover:border-my-lila transition duration-500" title="Show search form">
                                <font-awesome-icon :icon="['fas', 'chevron-down']" />
                            </button>

                            <div v-if="category.showSubcategories" v-for="(subcategory, subIndex) in category.subcategories" :key="subIndex" class="flex flex-row items-center mt-1 space-x-3">
                                <TextInput
                                    type="text"
                                    @input="updateSubcategoryName(index, subIndex, $event.target.value)"
                                    :defaultValue="subcategory"
                                    placeholder="Subcategory"
                                    class="block w-84"
                                    required
                                    :colorsInversed="true"
                                />
                                <button type="button" @click="removeSubcategory(index, subIndex)" class="text-2xl">×</button>
                            </div>
                            <ButtonWhite v-if="category.showSubcategories" type="button" @click="addSubcategory(index)" text="Add Subcategory" class="mt-1" />
                        </div>
                        <div class="mt-6 flex flex-row items-center space-x-3">
                            <ButtonWhite type="button" @click="addCategory" text="Add Category" />
                            <ButtonLila type="submit" text="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
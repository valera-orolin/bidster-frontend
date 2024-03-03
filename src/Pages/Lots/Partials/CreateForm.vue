<script setup>
import ButtonGradient from '../../../Components/ButtonGradient.vue';
import TextInput from '../../../Components/TextInput.vue'
import TextArea from '../../../Components/TextArea.vue'
import InputLabel from '../../../Components/InputLabel.vue'
import InputError from '../../../Components/InputError.vue'
import ButtonWhite from '../../../Components/ButtonWhite.vue';
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
    <form class="text-my-gray3 text-base">
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
                />

                <InputError class="mt-2" :message="''" />
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
                    />
                    <TextInput
                        type="text"
                        class="w-64 md:w-96"
                        v-model="characteristic.value" 
                        placeholder="Value"
                        required
                        :colorsInversed="true"
                    />
                    <button type="button" @click="removeCharacteristic(characteristic.id)" class="text-4xl hover:text-my-lila transition duration-500">×</button>
                </div>
                <ButtonWhite type="button" @click="addCharacteristic" class="mt-3" text="Add characteristic"/>
            </div>

        </div>

        <ButtonGradient class="mt-10" :text="'Create auction'" />
    </form>
</template>
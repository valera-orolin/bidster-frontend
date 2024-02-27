<script setup>
import ButtonGradient from '../../Components/ButtonGradient.vue';
import TextInput from '../../Components/TextInput.vue'
import TextArea from '../../Components/TextArea.vue'
import InputLabel from '../../Components/InputLabel.vue'
import InputError from '../../Components/InputError.vue'
import ButtonWhite from '../../Components/ButtonWhite.vue';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue'
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
const addCharacteristic = () => {
    characteristics.value.push({ name: '', value: '' });
};
const removeCharacteristic = (index) => {
    characteristics.value.splice(index, 1);
};
</script>

<template>
    <AuthenticatedLayout>
        <div class="flex justify-center">
            <div class="border-2 border-transparent rounded-2xl my-gradient-bord p-4 lg:p-12 text-my-gray4 lg:my-12 w-260">
                <div class="text-my-gray4 text-5xl font-bold leading-tight mb-10">
                    Create your own auction at
                    <span class="my-gradient-text">Bidster</span>
                </div>

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

                            <div class="file-upload mt-7">
                                <input type="file" id="images" class="file-input hidden" accept="image/*" multiple @change="updateFileLabel">
                                <label for="images" class="file-label bg-my-black p-5 rounded-full cursor-pointer">Select images</label>
                                <span class="file-count-label ml-6 text-my-gray3">Images selected: {{ fileCount }}</span>
                            </div>

                            <InputError class="mt-2" :message="''" />
                        </div>

                        <div>
                            <InputLabel for="end-date" value="End date" class="mt-11" />

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

                        <div class="flex flex-row space-x-6">
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
                            <table class="mt-3">
                                <tr v-for="(characteristic, index) in characteristics" :key="index">
                                    <td>
                                        <TextInput
                                            type="text"
                                            class="w-96"
                                            v-model="characteristic.name" 
                                            placeholder="Name" 
                                            required
                                            :colorsInversed="true"
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            type="text"
                                            class="w-96"
                                            v-model="characteristic.value" 
                                            placeholder="Value"
                                            required
                                            :colorsInversed="true"
                                        />
                                    </td>
                                    <td>
                                        <button type="button" @click="removeCharacteristic(index)" class="text-4xl">×</button>
                                    </td>
                                </tr>
                            </table>
                            <ButtonWhite type="button" @click="addCharacteristic" class="mt-3" text="Add characteristic"/>
                        </div>
                    </div>

                    <ButtonGradient class="mt-10" :text="'Create auction'" />
                </form>
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